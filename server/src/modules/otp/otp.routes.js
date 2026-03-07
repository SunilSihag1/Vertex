import express from "express";
import otpController from "./otp.controller.js";

const router = express.Router();

// Verify OTP
router.post("/verify-otp", otpController.verifyOtp);

// Resend OTP
router.post("/resend-otp", otpController.resendOtp);

export default router;