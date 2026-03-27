/**
 * legalAudit.model.js
 * Location: server/src/modules/legal/legalAudit.model.js
 *
 * Immutable audit log of every admin action taken on legal documents.
 * Once created, audit records should never be modified or deleted.
 *
 * Fixes applied:
 *  1. ObjectId properly destructured from mongoose
 *  2. _id removed — Mongoose handles this automatically
 *  3. documentId and versionId given proper type definitions with ref
 *  4. required: true added to critical fields
 *  5. timestamp replaced with timestamps: true (Mongoose-managed)
 *  6. Model name capitalized ("LegalAudit")
 */

import mongoose from "mongoose";

const { Schema, Types: { ObjectId } } = mongoose;

const legalAuditSchema = new Schema(
    {
        // ── Which document was acted on ───────────────────────────────────────
        documentId: {
            type: ObjectId,
            ref: "LegalDocument",
            required: true,
            index: true,
        },

        // ── Which version was acted on (null for document-level actions) ───────
        versionId: {
            type: ObjectId,
            ref: "LegalVersion",
        },

        // ── What action was performed ─────────────────────────────────────────
        action: {
            type: String,
            enum: ["created", "updated", "published", "deactivated"],
            required: true,
        },

        // ── Who performed the action ──────────────────────────────────────────
        performedBy: {
            type: ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        // timestamps: true → auto-manages createdAt
        // Audit records are immutable — updatedAt is not needed
        timestamps: { createdAt: true, updatedAt: false },
    }
);

// ── Make audit records truly immutable ───────────────────────────────────────
// Prevent any update or delete operations on audit logs
legalAuditSchema.pre(["updateOne", "findOneAndUpdate", "findByIdAndUpdate"], function () {
    throw new Error("Audit records are immutable and cannot be modified.");
});

legalAuditSchema.pre(["deleteOne", "findOneAndDelete", "findByIdAndDelete"], function () {
    throw new Error("Audit records are immutable and cannot be deleted.");
});

export default mongoose.model("LegalAudit", legalAuditSchema);