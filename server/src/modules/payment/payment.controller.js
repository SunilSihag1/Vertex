import * as paymentService from "./payment.service.js";
import { verifyRazorpaySignature } from "../../utils/payment.utils.js";

/* =========================
   CREATE SUBSCRIPTION ORDER
========================= */
export const createSubscriptionOrder = async (req, res) => {
    try {
        const { planId, billing } = req.body;

        if (!planId || !billing) {
            return res.status(400).json({
                success: false,
                message: "planId and billing are required"
            });
        }

        if (!["monthly", "yearly"].includes(billing)) {
            return res.status(400).json({
                success: false,
                message: "billing must be 'monthly' or 'yearly'"
            });
        }

        // Use the authenticated user's ID — never hardcode
        const order = await paymentService.createOrder(
            req.user.userId,
            planId,
            billing
        );

        return res.status(201).json({
            success: true,
            order
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================
   VERIFY PAYMENT
========================= */
export const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "razorpay_order_id, razorpay_payment_id and razorpay_signature are required"
            });
        }

        const isValid = verifyRazorpaySignature(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        if (!isValid) {
            await paymentService.failPayment(
                razorpay_order_id,
                "SIGNATURE_VERIFICATION_FAILED",
                "Payment signature mismatch"
            );

            return res.status(400).json({
                success: false,
                message: "Payment verification failed"
            });
        }

        const payment = await paymentService.activatePayment(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        return res.status(200).json({
            success: true,
            payment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================
   PAYMENT FAILED
========================= */
export const paymentFailed = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            error_code,
            error_reason
        } = req.body;

        if (!razorpay_order_id) {
            return res.status(400).json({
                success: false,
                message: "razorpay_order_id is required"
            });
        }

        const payment = await paymentService.failPayment(
            razorpay_order_id,
            error_code   ?? "UNKNOWN_ERROR",
            error_reason ?? "No reason provided"
        );

        return res.status(200).json({
            success: false,
            message: "Payment failure recorded",
            payment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================
   GET RAZORPAY KEY
========================= */
export const getRazorpayKey = (_req, res) => {
    const key = process.env.RAZORPAY_KEY_ID;

    if (!key) {
        return res.status(500).json({
            success: false,
            message: "Razorpay key not configured"
        });
    }

    return res.status(200).json({ key });
};