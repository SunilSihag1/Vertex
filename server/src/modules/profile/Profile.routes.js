import express from "express";
import { getProfile, updateProfile } from "./Profile.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";

const router = express.Router();

// All profile routes require a valid JWT
router.use(authMiddleware);

router.get("/", getProfile);
router.put("/", updateProfile);

export default router;