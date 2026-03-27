/**
 * auth.routes.js
 * Location: server/src/modules/auth/auth.routes.js
 *
 * Added: POST /logout-all  → logs out from all devices
 */

import express from "express";
import authController from "./auth.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

// ─── Public ───────────────────────────────────────────────────────────────────

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/google", authController.googleAuth);

// ─── Protected ────────────────────────────────────────────────────────────────

router.post("/logout", authMiddleware, authController.logout);
router.post("/logout-all", authMiddleware, authController.logoutAll);

export default router;