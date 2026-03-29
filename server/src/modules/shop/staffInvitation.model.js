/**
 * staffInvitation.model.js
 * Location: server/src/modules/shop/staffInvitation.model.js
 *
 * Tracks pending/accepted/declined staff invitations sent by shop owners.
 *
 * Flow:
 *   1. Owner submits staff details during shop setup (or later from dashboard)
 *   2. A StaffInvitation record is created with a unique secure token
 *   3. After shop setup completes, invitation emails are dispatched
 *   4. Staff clicks the link → /accept-invite?token=<inviteToken>
 *   5. Staff creates a password → their User account is created with the
 *      appropriate role and linked to the store via StoreMember
 *
 * Security:
 *   - inviteToken is a cryptographically random 32-byte hex string
 *   - tokenExpiresAt defaults to 7 days — expired invites cannot be accepted
 *   - Once accepted, status → "accepted" and token is cleared
 */

import mongoose from "mongoose";
import crypto from "crypto";

const { Schema, Types: { ObjectId } } = mongoose;

const staffInvitationSchema = new Schema(
    {
        // ── Which store this invitation belongs to ────────────────────────────
        storeId: {
            type: ObjectId,
            ref: "Store",
            required: true,
            index: true,
        },

        // ── Who sent the invitation ───────────────────────────────────────────
        invitedBy: {
            type: ObjectId,
            ref: "User",
            required: true,
        },

        // ── Invitee details ───────────────────────────────────────────────────
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
        },

        phone: {
            type: String,
            trim: true,
            default: "",
        },

        jobTitle: {
            type: String,
            trim: true,
            required: true,
            // e.g. "Manager", "Cashier", "Sales Associate", "Accountant"
        },

        address: {
            type: String,
            trim: true,
            default: "",
        },

        // ── Role that will be assigned when invitation is accepted ────────────
        role: {
            type: String,
            enum: ["admin", "manager", "staff", "accountant"],
            default: "staff",
        },

        // ── Invitation lifecycle ───────────────────────────────────────────────
        status: {
            type: String,
            enum: ["pending", "sent", "accepted", "declined", "expired"],
            default: "pending",
            index: true,
        },

        // ── Secure token for the acceptance link ──────────────────────────────
        inviteToken: {
            type: String,
            unique: true,
            sparse: true, // null once accepted/expired
        },

        tokenExpiresAt: {
            type: Date,
        },

        // ── Linked User once invitation is accepted ───────────────────────────
        acceptedByUserId: {
            type: ObjectId,
            ref: "User",
            default: null,
        },

        acceptedAt: {
            type: Date,
            default: null,
        },

        // ── Email delivery tracking ───────────────────────────────────────────
        emailSentAt: {
            type: Date,
            default: null,
        },

        emailError: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// ─── Static Helper ────────────────────────────────────────────────────────────

/**
 * Generates a cryptographically secure invite token.
 * Used when creating an invitation record.
 */
staffInvitationSchema.statics.generateToken = function () {
    return crypto.randomBytes(32).toString("hex");
};

/**
 * Default token expiry: 7 days from now.
 */
staffInvitationSchema.statics.defaultExpiry = function () {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
};

// ─── TTL index: auto-expire pending tokens after 7 days ──────────────────────
staffInvitationSchema.index(
    { tokenExpiresAt: 1 },
    { expireAfterSeconds: 0, sparse: true }
);

export default mongoose.model("StaffInvitation", staffInvitationSchema);