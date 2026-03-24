import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import {
    createSubscriptionOrder,
    verifyPayment,
    paymentFailed,
    getRazorpayKey
} from "./payment.controller.js";

const router = express.Router();

// Public — Razorpay key is safe to expose (it's the test/live public key)
router.get("/razorpay-key", getRazorpayKey);

// Protected — all payment actions require an authenticated user
router.post("/create-order",    authMiddleware, createSubscriptionOrder);
router.post("/verify-payment",  authMiddleware, verifyPayment);
router.post("/payment-failed",  authMiddleware, paymentFailed);

export default router;