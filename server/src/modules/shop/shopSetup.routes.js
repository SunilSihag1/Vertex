/**
 * shopSetup.routes.js
 * Location: server/src/modules/shop/shopSetup.routes.js
 */

import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import {
    getSetupStatus,
    saveShopProfile,
    saveStaffInvitations,
    advanceToComplete,
    completeSetup,
} from "./shopSetup.controller.js";

const router = express.Router();

router.use(authMiddleware);

// GET  /api/shop-setup/status          — check current setup progress
router.get("/status", getSetupStatus);

// POST /api/shop-setup/profile         — save Step 1 (shop profile)
router.post("/profile", saveShopProfile);

// POST /api/shop-setup/staff           — save Step 2 (staff invitations)
router.post("/staff", saveStaffInvitations);

// POST /api/shop-setup/advance-product — skip or complete Step 3
router.post("/advance-product", advanceToComplete);

// POST /api/shop-setup/complete        — finalize setup + send emails
router.post("/complete", completeSetup);

export default router;