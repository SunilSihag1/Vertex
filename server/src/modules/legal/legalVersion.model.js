/**
 * legalVersion.model.js
 * Location: server/src/modules/legal/legalVersion.model.js
 *
 * Each LegalDocument can have multiple versions.
 * This model tracks every version of every legal document.
 *
 * Fixes applied:
 *  1. ObjectId properly destructured from mongoose
 *  2. _id removed — Mongoose handles this automatically
 *  3. createdAt + updatedAt fixed — were bare variable references, now timestamps: true
 *  4. required: true added to critical fields
 *  5. Model name capitalized ("LegalVersion")
 */

import mongoose from "mongoose";

const { Schema, Types: { ObjectId } } = mongoose;

const legalVersionSchema = new Schema(
    {
        // ── Which document this version belongs to ────────────────────────────
        documentId: {
            type:     ObjectId,
            ref:      "LegalDocument",
            required: true,
            index:    true,
        },

        // ── Semantic version string ───────────────────────────────────────────
        version: {
            type:     String,
            required: true,
            trim:     true,
            // e.g., "1.0.0", "1.1.0", "2.0.0"
        },

        // ── Full document content ─────────────────────────────────────────────
        content: {
            type:     String,
            required: true,
            // Store as Markdown or HTML
        },

        // ── When this version becomes legally effective ────────────────────────
        effectiveDate: {
            type:     Date,
            required: true,
        },

        // ── Who published this version (admin user) ───────────────────────────
        publishedBy: {
            type: ObjectId,
            ref:  "User",
        },

        // ── Human-readable summary of what changed ────────────────────────────
        changeLog: {
            type: String,
            // e.g., "Updated data retention section; added GDPR clause 7"
        },

        // ── Draft vs published ────────────────────────────────────────────────
        isPublished: {
            type:    Boolean,
            default: false,
            index:   true,
        },
    },
    {
        // timestamps: true → Mongoose auto-manages createdAt + updatedAt
        // Fixes the broken bare `createdAt, updatedAt` variables that were here before
        timestamps: true,
    }
);

// ── Compound index: version string must be unique per document ────────────────
legalVersionSchema.index({ documentId: 1, version: 1 }, { unique: true });

export default mongoose.model("LegalVersion", legalVersionSchema);