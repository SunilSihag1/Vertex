import express from "express";
import authController from "./auth.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

/* =========================
   PUBLIC ROUTES
========================= */

// Signup
router.post("/signup", authController.signup);

// Login
router.post("/login", authController.login);

// Refresh Token
router.post("/refresh", authController.refresh);


/* =========================
   PROTECTED ROUTES
========================= */

// Logout (JWT required)
router.post("/logout", authMiddleware, authController.logout);

//google login
router.post("/google", authController.googleAuth);


export default router;