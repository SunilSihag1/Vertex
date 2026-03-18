import express from "express";
import {
    createSubscriptionOrder,
    verifyPayment,
    paymentFailed,
    getRazorpayKey
} from "./payment.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-order", authMiddleware, createSubscriptionOrder);
router.post("/verify-payment", authMiddleware, verifyPayment);
router.post("/payment-failed", authMiddleware, paymentFailed);
router.get("/razorpay-key", authMiddleware, getRazorpayKey);

export default router;