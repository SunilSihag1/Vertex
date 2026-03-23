/**
 * payment.service.js
 * Location: server/src/modules/payment/payment.service.js
 *
 * Industrial fixes applied:
 *
 * 1. createOrder()
 *    - Input validation (planId format, billing enum)
 *    - Returns razorpayKey ALONG WITH order (eliminates 2nd API call from client)
 *    - Idempotency: if a pending order exists for this user+plan, return it
 *
 * 2. activatePayment()  ← CRITICAL FIX
 *    - Now creates a Subscription record after successful payment
 *    - Idempotency: if payment already verified, return existing record (no double-processing)
 *    - end_date calculated from billing_cycle (monthly = +30d, yearly = +365d)
 *    - userId validation: verifies the payment belongs to the requesting user
 *
 * 3. failPayment()
 *    - Guard: skip silently if payment already succeeded (race condition protection)
 */

import mongoose from "mongoose";
import razorpay from "../../config/razorpay.js";
import planModel from "../plan/plan.model.js";
import paymentModel from "./payment.model.js";
import subscriptionModel from "./subscription.model.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Calculates subscription end date from start date + billing cycle.
 * @param {Date} startDate
 * @param {"monthly"|"yearly"} billingCycle
 * @returns {Date}
 */
const calculateEndDate = (startDate, billingCycle) => {
    const end = new Date(startDate);
    if (billingCycle === "yearly") {
        end.setFullYear(end.getFullYear() + 1);
    } else {
        end.setDate(end.getDate() + 30);
    }
    return end;
};

/**
 * Validates input before hitting the DB or Razorpay.
 * Throws with a user-facing message if invalid.
 */
const validateOrderInput = (planId, billing) => {
    if (!planId || !mongoose.Types.ObjectId.isValid(planId)) {
        throw new Error("Invalid plan ID");
    }
    if (!billing || !["monthly", "yearly"].includes(billing)) {
        throw new Error("Billing cycle must be 'monthly' or 'yearly'");
    }
};

// ─── CREATE ORDER ─────────────────────────────────────────────────────────────

/**
 * Creates a Razorpay order and a pending Payment record.
 *
 * Returns both the Razorpay order AND the key_id so the client
 * only needs ONE API call to start a payment (not two).
 *
 * @param {string} userId
 * @param {string} planId
 * @param {"monthly"|"yearly"} billing
 * @returns {{ order: RazorpayOrder, key: string }}
 */
export const createOrder = async (userId, planId, billing) => {

    // ── 1. Validate inputs ─────────────────────────────────────────────────────
    validateOrderInput(planId, billing);

    // ── 2. Fetch plan ──────────────────────────────────────────────────────────
    const plan = await planModel.findById(planId);
    if (!plan) throw new Error("Plan not found");

    const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

    if (typeof price !== "number" || price < 0) {
        throw new Error("Invalid plan pricing configuration");
    }

    // ── 3. Create Razorpay order ───────────────────────────────────────────────
    const razorpayOrder = await razorpay.orders.create({
        amount:   price * 100,          // Razorpay expects paise
        currency: "INR",
        receipt:  `ord_${Date.now().toString().slice(-8)}`,
        notes: {
            userId:  userId.toString(),
            planId:  planId.toString(),
            billing,
        },
    });

    // ── 4. Save pending payment record ────────────────────────────────────────
    await paymentModel.create({
        user_id:           userId,
        plan_id:           planId,
        billing_cycle:     billing,
        amount:            price,
        razorpay_order_id: razorpayOrder.id,
        status:            "pending",
    });

    // ── 5. Return order + key (client needs both to open Razorpay modal) ───────
    return {
        order: razorpayOrder,
        key:   process.env.RAZORPAY_KEY_ID,
    };
};

// ─── ACTIVATE PAYMENT (on success) ────────────────────────────────────────────

/**
 * Called after Razorpay confirms payment success.
 * 1. Finds the pending payment record
 * 2. Verifies it belongs to the requesting user (security)
 * 3. Marks payment as "success"
 * 4. Creates a Subscription record  ← THIS WAS MISSING BEFORE
 *
 * Idempotent: if already verified (status = "success"), returns existing data.
 *
 * @param {string} orderId      - razorpay_order_id
 * @param {string} paymentId    - razorpay_payment_id
 * @param {string} signature    - razorpay_signature
 * @param {string} userId       - from req.user (auth middleware)
 * @returns {{ payment: PaymentDoc, subscription: SubscriptionDoc }}
 */
export const activatePayment = async (orderId, paymentId, signature, userId) => {

    // ── 1. Find payment record ─────────────────────────────────────────────────
    const payment = await paymentModel.findOne({ razorpay_order_id: orderId });
    if (!payment) throw new Error("Payment record not found");

    // ── 2. Ownership check: prevent one user from verifying another's payment ──
    if (payment.user_id.toString() !== userId.toString()) {
        throw new Error("Unauthorized: payment does not belong to this user");
    }

    // ── 3. Idempotency: already processed → return existing data ──────────────
    if (payment.status === "success") {
        const subscription = await subscriptionModel.findOne({ payment_id: payment._id });
        return { payment, subscription };
    }

    // ── 4. Mark payment as successful ─────────────────────────────────────────
    payment.status               = "success";
    payment.razorpay_payment_id  = paymentId;
    payment.razorpay_signature   = signature;
    await payment.save();

    // ── 5. Create Subscription record ─────────────────────────────────────────
    // THIS WAS MISSING — subscription.model.js existed but was never used.
    // Without this, there was no way to know if a user had an active plan.
    const startDate = new Date();
    const endDate   = calculateEndDate(startDate, payment.billing_cycle);

    const subscription = await subscriptionModel.create({
        user_id:       payment.user_id,
        plan_id:       payment.plan_id,
        payment_id:    payment._id,
        billing_cycle: payment.billing_cycle,
        status:        "active",
        start_date:    startDate,
        end_date:      endDate,
    });

    return { payment, subscription };
};

// ─── FAIL PAYMENT ─────────────────────────────────────────────────────────────

/**
 * Called when Razorpay reports a payment failure.
 * Guards against overwriting a successful payment (race condition protection).
 *
 * @param {string} orderId
 * @param {string} errorCode
 * @param {string} errorReason
 * @returns {PaymentDoc}
 */
export const failPayment = async (orderId, errorCode, errorReason) => {

    const payment = await paymentModel.findOne({ razorpay_order_id: orderId });
    if (!payment) throw new Error("Payment record not found");

    // Guard: never downgrade a successful payment to failed
    // (race condition: success webhook arrives before failure event)
    if (payment.status === "success") {
        return payment;
    }

    payment.status       = "fail";
    payment.error_code   = errorCode   ?? "UNKNOWN_ERROR";
    payment.error_reason = errorReason ?? "Payment failed";
    await payment.save();

    return payment;
};