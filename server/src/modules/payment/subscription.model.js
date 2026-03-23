/**
 * subscription.model.js
 * Location: server/src/modules/payment/subscription.model.js
 *
 * Tracks the active plan for each user.
 * Created immediately after a successful payment verification.
 *
 * Industrial fixes:
 *  - required: true on all critical fields
 *  - Proper indexes for fast queries
 *  - end_date properly required (calculated from billing_cycle)
 *  - payment_id reference added (audit trail back to Payment record)
 *  - Compound index: userId + status for "find active subscription" queries
 */

import mongoose from "mongoose";

const { Schema, Types: { ObjectId } } = mongoose;

const subscriptionSchema = new Schema(
    {
        // ── Who owns this subscription ─────────────────────────────────────────
        user_id: {
            type:     ObjectId,
            ref:      "User",
            required: true,
            index:    true,
        },

        // ── What plan they're on ───────────────────────────────────────────────
        plan_id: {
            type:     ObjectId,
            ref:      "Plan",
            required: true,
        },

        // ── Which payment created this subscription (audit trail) ──────────────
        payment_id: {
            type:     ObjectId,
            ref:      "Payment",
            required: true,
        },

        // ── Subscription state ─────────────────────────────────────────────────
        status: {
            type:    String,
            enum:    ["active", "cancelled", "expired"],
            default: "active",
            index:   true,
        },

        // ── Billing ────────────────────────────────────────────────────────────
        billing_cycle: {
            type:     String,
            enum:     ["monthly", "yearly"],
            required: true,
        },

        // ── Duration ───────────────────────────────────────────────────────────
        start_date: {
            type:     Date,
            required: true,
            default:  Date.now,
        },

        end_date: {
            type:     Date,
            required: true,
            // Calculated in payment.service.js based on billing_cycle:
            //   monthly → start_date + 30 days
            //   yearly  → start_date + 365 days
        },
    },
    {
        timestamps: true,
    }
);

// ── Indexes ───────────────────────────────────────────────────────────────────

// Primary query: "Does this user have an active subscription?"
subscriptionSchema.index({ user_id: 1, status: 1 });

// Find subscriptions expiring soon (for renewal reminders / cron jobs)
subscriptionSchema.index({ end_date: 1, status: 1 });

export default mongoose.model("Subscription", subscriptionSchema);