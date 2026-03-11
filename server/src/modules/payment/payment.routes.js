import express from "express";
import {
    createSubscriptionOrder,
    verifyPayment,
    paymentFailed,
    getRazorpayKey
} from "./payment.controller.js";

const router = express.Router();

router.post("/create-order", createSubscriptionOrder);

router.post("/verify-payment", verifyPayment);

router.post("/payment-failed", paymentFailed);

router.get("/razorpay-key", getRazorpayKey);

export default router;