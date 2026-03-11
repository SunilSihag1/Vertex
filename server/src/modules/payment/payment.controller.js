import * as paymentService from "./payment.service.js";
import { verifyRazorpaySignature } from "../../utils/payment.utils.js";

export const verifyPayment = async (req, res) => {

    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const isValid = verifyRazorpaySignature(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        if (!isValid) {

            await paymentService.failPayment(
                razorpay_order_id,
                "SIGNATURE_VERIFICATION_FAILED",
                "Payment verification failed"
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

        res.status(200).json({
            success: true,
            payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



export const paymentFailed = async (req, res) => {

    try {

        const {
            razorpay_order_id,
            error_code,
            error_reason
        } = req.body;

        const payment = await paymentService.failPayment(
            razorpay_order_id,
            error_code,
            error_reason
        );

        res.json({
            success: false,
            message: "Payment failed",
            payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const createSubscriptionOrder = async (req, res) => {

    try {

        const { planId, billing } = req.body;
        const UserID = "69a7d0141b2f19af2be24026";

        const order = await paymentService.createOrder(
            UserID,
            planId,
            billing
        );

        res.json({
            success: true,
            order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const getRazorpayKey = async (req, res) => {

    res.json({
        key: process.env.RAZORPAY_KEY_ID
    });

};