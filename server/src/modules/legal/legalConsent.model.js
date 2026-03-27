/**
 * legalConsent.model.js
 * Location: server/src/modules/legal/legalConsent.model.js
 *
 * Tracks which user accepted which legal document version,
 * when they accepted it, and how (signup, subscription, etc.)
 *
 * Fixes applied:
 *  1. ObjectId properly destructured from mongoose
 *  2. _id removed — Mongoose auto-assigns ObjectId, no need to declare it
 *  3. createdAt fixed from bare variable to proper schema field
 *  4. timestamps: true added for automatic createdAt management
 *  5. required: true added to critical fields
 *  6. Model name capitalized ("LegalConsent") to follow Mongoose convention
 */

import mongoose from "mongoose";

// ── Correct way to get ObjectId type ──────────────────────────────────────────
const { Schema, Types: { ObjectId } } = mongoose;

const legalConsentSchema = new Schema(
    {
        // ── Who accepted ──────────────────────────────────────────────────────
        userId: {
            type: ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        // ── What they accepted ────────────────────────────────────────────────
        documentId: {
            type: ObjectId,
            ref: "LegalDocument",
            required: true,
        },

        versionId: {
            type: ObjectId,
            ref: "LegalVersion",
            required: true,
        },

        // ── When they accepted ────────────────────────────────────────────────
        acceptedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },

        // ── Context of acceptance (for audit trail) ───────────────────────────
        ipAddress: {
            type: String,
        },

        userAgent: {
            type: String,
        },

        acceptedVia: {
            type: String,
            enum: ["signup", "subscription", "manual_update"],
            required: true,
        },
    },
    {
        // timestamps: true → Mongoose auto-manages createdAt + updatedAt
        // This replaces the broken bare `createdAt` variable that was here before
        timestamps: { createdAt: true, updatedAt: false }, // consent is immutable — no updatedAt needed
    }
);

// ── Compound index: one consent record per user per document version ──────────
// Prevents duplicate consent entries for the same document version
legalConsentSchema.index({ userId: 1, versionId: 1 }, { unique: true });

export default mongoose.model("LegalConsent", legalConsentSchema);