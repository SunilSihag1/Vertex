/**
 * legalDocument.model.js
 * Location: server/src/modules/legal/legalDocument.model.js
 *
 * NOTE: Old filename was "legalDocumen.model.js" — 't' was missing.
 * Rename the file: mv legalDocumen.model.js legalDocument.model.js
 *
 * Represents a top-level legal document (Privacy Policy, T&C, etc.)
 * Each document can have multiple versions tracked in LegalVersion.
 *
 * Fixes applied:
 *  1. ObjectId properly destructured from mongoose
 *  2. _id removed — Mongoose handles this automatically
 *  3. createdAt + updatedAt fixed — were bare variable references, now timestamps: true
 *  4. required: true added to type and title
 *  5. Model name capitalized ("LegalDocument")
 */

import mongoose from "mongoose";

const { Schema, Types: { ObjectId } } = mongoose;

const legalDocumentSchema = new Schema(
    {
        // ── Document type ─────────────────────────────────────────────────────
        type: {
            type: String,
            enum: [
                "privacy_policy",
                "terms_and_conditions",
                "refund_policy",
                "cookie_policy",
                "data_processing_agreement",
                "acceptable_use_policy",
            ],
            required: true,
            unique: true,  // Only one active document per type
            index: true,
        },

        // ── Display title ─────────────────────────────────────────────────────
        title: {
            type: String,
            required: true,
            trim: true,
            // e.g., "Privacy Policy", "Terms and Conditions"
        },

        // ── Points to the currently active version ────────────────────────────
        currentVersionId: {
            type: ObjectId,
            ref: "LegalVersion",
        },

        // ── Visibility + enforcement flags ────────────────────────────────────
        isActive: {
            type: Boolean,
            default: true,
            index: true,
        },

        requiresAcceptance: {
            type: Boolean,
            default: true,
            // true  → users must explicitly accept before using the service
            // false → informational only (e.g., Cookie Policy in some regions)
        },
    },
    {
        // timestamps: true → Mongoose auto-manages createdAt + updatedAt
        // Fixes the broken bare `createdAt, updatedAt` variables that were here before
        timestamps: true,
    }
);

export default mongoose.model("LegalDocument", legalDocumentSchema);