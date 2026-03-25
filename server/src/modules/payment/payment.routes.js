/**
 * payment.routes.js
 * Location: server/src/modules/payment/payment.routes.js
 *
 * Change: getRazorpayKey route REMOVED.
 * The key is now returned directly in the create-order response,
 * eliminating one round-trip on every checkout.
 */

import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import {
    createSubscriptionOrder,
    verifyPayment,
    paymentFailed,
} from "./payment.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

// Protected — all payment actions require an authenticated user
router.post("/create-order",    authMiddleware, createSubscriptionOrder);
router.post("/verify-payment",  authMiddleware, verifyPayment);
router.post("/payment-failed",  authMiddleware, paymentFailed);

export default router;