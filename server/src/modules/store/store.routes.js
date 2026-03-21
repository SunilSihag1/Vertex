import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import Store from "./store.model.js";

const router = express.Router();

/* All store routes require a valid JWT */
router.use(authMiddleware);

/* ── POST /api/stores — Create a new store ──────────────────── */
router.post("/", async (req, res) => {
    try {
        const { name, tagline, category, currency, timezone } = req.body;

        if (!name?.trim()) {
            return res.status(400).json({ success: false, message: "Shop name is required." });
        }

        /* Prevent duplicate stores for the same user */
        const existing = await Store.findOne({ ownerId: req.user.userId });
        if (existing) {
            return res.status(409).json({ success: false, message: "You already have a shop." });
        }

        const store = await Store.create({
            name:     name.trim(),
            tagline:  tagline?.trim() ?? "",
            category: category ?? "",
            ownerId:  req.user.userId,
            currency: currency ?? "INR",
            timezone: timezone ?? "Asia/Kolkata",
            status:   "trial",
        });

        return res.status(201).json({ success: true, data: store });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to create shop." });
    }
});

/* ── GET /api/stores/mine — Get the current user's store ─────── */
router.get("/mine", async (req, res) => {
    try {
        const store = await Store.findOne({ ownerId: req.user.userId });

        if (!store) {
            return res.status(404).json({ success: false, message: "No shop found." });
        }

        return res.status(200).json({ success: true, data: store });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch shop." });
    }
});

export default router;