/**
 * auth.routes.js — COMPLETE FILE (replace existing)
 *
 * Added two protected routes:
 *   POST /send-change-password-otp  → sends OTP to logged-in user's email
 *   POST /change-password           → verifies OTP + updates password
 */

import express from "express";
import authController from "./auth.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

// ─── Public ───────────────────────────────────────────────────────────────────

router.post("/signup",  authController.signup);
router.post("/login",   authController.login);
router.post("/refresh", authController.refresh);
router.post("/google",  authController.googleAuth);

// ─── Protected ────────────────────────────────────────────────────────────────

router.post("/logout",     authMiddleware, authController.logout);
router.post("/logout-all", authMiddleware, authController.logoutAll);

// Password change flow (OTP-verified)
router.post("/send-change-password-otp", authMiddleware, authController.sendChangePasswordOtp);
router.post("/change-password",          authMiddleware, authController.changePassword);

export default router;