/**
 * payment.controller.js
 * Location: server/src/modules/payment/payment.controller.js
 *
 * Industrial fixes applied:
 *
 * 1. createSubscriptionOrder
 *    - Input validation for planId and billing
 *    - Returns key + order in ONE response (client no longer needs 2 API calls)
 *
 * 2. verifyPayment
 *    - Passes userId from req.user to service (ownership validation)
 *    - Signature verification happens BEFORE DB update
 *    - Proper HTTP status codes
 *
 * 3. paymentFailed
 *    - Input validation
 *    - Returns 200 (not an error from our side — Razorpay reported failure)
 *
 * 4. getRazorpayKey REMOVED
 *    - No longer needed as a separate endpoint
 *    - Key is now returned directly in create-order response
 *    - Eliminates an extra round-trip on every checkout
 */

import * as paymentService from "./payment.service.js";
import { verifyRazorpaySignature } from "../../utils/payment.utils.js";

// ─── CREATE ORDER ─────────────────────────────────────────────────────────────

export const createSubscriptionOrder = async (req, res) => {
    try {
        const { planId, billing } = req.body;

        // Validation (service also validates, but fail fast at controller)
        if (!planId || !billing) {
            return res.status(400).json({
                success: false,
                message: "planId and billing are required",
            });
        }

        const userId = req.user.userId; // set by authMiddleware

        // Returns { order, key } — client gets both in one call
        const { order, key } = await paymentService.createOrder(userId, planId, billing);

        return res.status(201).json({
            success: true,
            order,
            key,  // ← client uses this to initialize Razorpay modal
        });

    } catch (err) {
    console.error("🔥 CREATE ORDER ERROR:", err);
    console.error("🔥 ERROR TYPE:", typeof err);
    console.error("🔥 ERROR KEYS:", Object.keys(err || {}));

    const message = err?.message || JSON.stringify(err) || "Internal Server Error";

    const status =
        message === "Plan not found" ? 404 :
        message === "Invalid plan ID" ? 400 :
        message.includes("Billing cycle") ? 400 :
        500;

    return res.status(status).json({
        success: false,
        message,
    });
}
};

// ─── VERIFY PAYMENT (on success) ──────────────────────────────────────────────

export const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        // Input validation
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "razorpay_order_id, razorpay_payment_id, and razorpay_signature are required",
            });
        }

        // ── Signature verification MUST happen before any DB write ────────────
        // This cryptographically proves the payment came from Razorpay.
        const isValid = verifyRazorpaySignature(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        if (!isValid) {
            // Mark as failed — tampered/fake response
            await paymentService.failPayment(
                razorpay_order_id,
                "SIGNATURE_VERIFICATION_FAILED",
                "Payment signature verification failed"
            );

            return res.status(400).json({
                success: false,
                message: "Payment verification failed. Please contact support.",
            });
        }

        // ── Activate: mark payment success + create Subscription ──────────────
        const { payment, subscription } = await paymentService.activatePayment(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            req.user.userId  // ← ownership check inside service
        );

        return res.status(200).json({
            success: true,
            message: "Payment verified. Subscription activated.",
            subscription: {
                id: subscription._id,
                plan_id: subscription.plan_id,
                status: subscription.status,
                billing_cycle: subscription.billing_cycle,
                start_date: subscription.start_date,
                end_date: subscription.end_date,
            },
        });

    } catch (err) {
        const status = err.message === "Unauthorized: payment does not belong to this user" ? 403
            : err.message === "Payment record not found" ? 404
                : 500;

        return res.status(status).json({
            success: false,
            message: err.message,
        });
    }
};

// ─── PAYMENT FAILED ───────────────────────────────────────────────────────────

export const paymentFailed = async (req, res) => {
    try {
        const { razorpay_order_id, error_code, error_reason } = req.body;

        if (!razorpay_order_id) {
            return res.status(400).json({
                success: false,
                message: "razorpay_order_id is required",
            });
        }

        await paymentService.failPayment(
            razorpay_order_id,
            error_code   ?? "UNKNOWN_ERROR",
            error_reason ?? "No reason provided"
        );

        // Return 200 — this is an expected event, not a server error
        return res.status(200).json({
            success: false,
            message: "Payment failure recorded",
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};