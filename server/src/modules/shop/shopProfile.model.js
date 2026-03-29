/**
 * shopProfile.model.js
 * Location: server/src/modules/shop/shopProfile.model.js
 *
 * Stores all detailed shop setup information collected during onboarding.
 * The lean Store model (store.model.js) holds identity + status.
 * This model holds everything else — owner details, hours, address, socials.
 *
 * Relationship:
 *   Store (1) ──── (1) ShopProfile
 *
 * setupStep tracks onboarding progress so users can resume from where they left off:
 *   1 = Shop Profile form
 *   2 = Staff form
 *   3 = Products form
 *   4 = Complete
 */

import mongoose from "mongoose";

const { Schema, Types: { ObjectId } } = mongoose;

// ─── Operating Hours Sub-Schema ───────────────────────────────────────────────

const operatingHoursSchema = new Schema(
    {
        openTime: { type: String, default: "09:00" }, // "HH:mm" format
        closeTime: { type: String, default: "21:00" },
        fromDay: { type: String, default: "Monday" },
        toDay: { type: String, default: "Sunday" },
    },
    { _id: false }
);

// ─── Address Sub-Schema ───────────────────────────────────────────────────────

const shopAddressSchema = new Schema(
    {
        street: { type: String, trim: true, default: "" },
        city: { type: String, trim: true, default: "" },
        state: { type: String, trim: true, default: "" },
        pincode: {
            type: String,
            trim: true,
            match: [/^[1-9][0-9]{5}$/, "Enter a valid 6-digit pincode"],
            default: "",
        },
        lat: { type: Number, default: null },
        lng: { type: Number, default: null },
    },
    { _id: false }
);

// ─── Owner Details Sub-Schema ─────────────────────────────────────────────────

const ownerDetailsSchema = new Schema(
    {
        name: { type: String, trim: true, default: "" },
        phone: { type: String, trim: true, default: "" },
        email: { type: String, trim: true, lowercase: true, default: "" },
        aadhaarPan: { type: String, trim: true, default: "" }, // optional KYC
    },
    { _id: false }
);

// ─── Contact Info Sub-Schema ──────────────────────────────────────────────────

const contactInfoSchema = new Schema(
    {
        businessEmail: { type: String, trim: true, lowercase: true, default: "" },
        receptionistPhone: { type: String, trim: true, default: "" },
        whatsappPhone: { type: String, trim: true, default: "" },
    },
    { _id: false }
);

// ─── Socials Sub-Schema ───────────────────────────────────────────────────────

const socialsSchema = new Schema(
    {
        website: { type: String, trim: true, default: "" },
        instagram: { type: String, trim: true, default: "" },
        facebook: { type: String, trim: true, default: "" },
    },
    { _id: false }
);

// ─── Main ShopProfile Schema ──────────────────────────────────────────────────

const shopProfileSchema = new Schema(
    {
        // ── References ────────────────────────────────────────────────────────
        storeId: {
            type: ObjectId,
            ref: "Store",
            required: true,
            unique: true,   // one profile per store
            index: true,
        },

        ownerId: {
            type: ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        // ── Branding ──────────────────────────────────────────────────────────
        coverImageUrl: { type: String, default: null },
        logoImageUrl: { type: String, default: null },
        businessType: { type: String, trim: true, default: "" },

        // ── Nested sections ───────────────────────────────────────────────────
        ownerDetails: { type: ownerDetailsSchema, default: () => ({}) },
        contactInfo: { type: contactInfoSchema, default: () => ({}) },
        operatingHours: { type: operatingHoursSchema, default: () => ({}) },
        address: { type: shopAddressSchema, default: () => ({}) },
        socials: { type: socialsSchema, default: () => ({}) },

        // ── Onboarding Progress ───────────────────────────────────────────────
        // Persists which step the owner reached so they can resume after
        // closing the browser or navigating away.
        setupStep: {
            type: Number,
            enum: [1, 2, 3, 4],
            default: 1,
        },

        isSetupComplete: {
            type: Boolean,
            default: false,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("ShopProfile", shopProfileSchema);