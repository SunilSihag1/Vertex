import express from "express";
import { signup, verifyOtp, login , googleAuth } from "./auth.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/google", googleAuth);

export default router;