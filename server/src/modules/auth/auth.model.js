/**
 * auth.model.js
 * Location: server/src/modules/auth/auth.model.js
 *
 * Key changes from old version:
 *  REMOVED → refreshToken: String   (single device, plain-text — insecure)
 *  ADDED   → sessions: []           (multi-device, hashed tokens + rich metadata)
 *  ADDED   → tokenVersion: Number   (instant mass-invalidation without a blacklist)
 *  ADDED   → passwordChangedAt: Date (invalidates tokens issued before password reset)
 *
 * Each session stores:
 *  - deviceId    : client-generated UUID (same device = update session, new device = new session)
 *  - tokenHash   : SHA-256 of raw refresh token (never store raw tokens)
 *  - device      : { browser, os, type } parsed from User-Agent
 *  - ip          : IP at time of login
 *  - country     : resolved from IP via geoip-lite
 *  - lastSeenAt  : updated on every /refresh call → "Last active X ago" in UI
 *  - expiresAt   : MongoDB TTL index cleans up expired sessions automatically
 */

import mongoose from "mongoose";

// ─── Session Sub-Schema ───────────────────────────────────────────────────────

const sessionSchema = new mongoose.Schema(
    {
        /**
         * Client-generated UUID stored in the browser's localStorage.
         * Sent with every login request.
         *
         * Logic:
         *  - Same deviceId found in sessions[] → UPDATE that session in place
         *  - No match → CREATE new session (evict oldest if cap reached)
         *
         * This is the correct industrial approach.
         * IP-based matching is WRONG (shared NAT, VPN, mobile networks).
         */
        deviceId: {
            type: String,
            required: true,
        },

        /**
         * SHA-256 hash of the raw refresh token.
         * Raw token → HttpOnly cookie (client).
         * Hashed token → MongoDB (server).
         *
         * If DB is breached, hashed tokens are useless.
         */
        tokenHash: {
            type: String,
            required: true,
        },

        // ── Device Info ────────────────────────────────────────────────────────

        device: {
            browser: { type: String, default: "Unknown" },  // e.g. "Chrome 124"
            os: { type: String, default: "Unknown" },  // e.g. "Windows 11"
            type: {
                type: String,
                enum: ["desktop", "mobile", "tablet", "unknown"],
                default: "unknown",
            },
        },

        // ── Network Info ───────────────────────────────────────────────────────

        ip: {
            type: String,
            default: null,
        },

        /**
         * ISO 3166-1 alpha-2 country code resolved from IP.
         * e.g. "IN", "US", "GB", "Local" (private IP), "Unknown"
         */
        country: {
            type: String,
            default: "Unknown",
        },

        // ── Activity ───────────────────────────────────────────────────────────

        /**
         * Updated on every successful token refresh.
         * Use this to display "Last active 2 hours ago" in a session management UI.
         */
        lastSeenAt: {
            type: Date,
            default: Date.now,
        },

        /**
         * MongoDB TTL index on this field automatically removes
         * expired sessions at DB level — no cron job needed.
         */
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    {
        _id: true,                                   // each session has its own _id
        timestamps: { createdAt: true, updatedAt: false }, // track when session was first created
    }
);

// ─── User Schema ──────────────────────────────────────────────────────────────

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },

        password: {
            type: String,
            minlength: 8,
            required: function () {
                return this.authProvider === "local";
            },
            select: false
        },

        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local",
        },

        googleId: {
            type: String,
        },

        role: {
            type: String,
            enum: ["user", "shop-owner", "admin"],
            default: "user",
            index: true
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        loginAttempts: {
            type: Number,
            default: 0,
        },

        lockUntil: {
            type: Date,
        },

        lastLogin: {
            type: Date,
        },

        lastLoginIP: {
            type: String,
        },

        // ── Token Security ─────────────────────────────────────────────────────

        sessions: {
            type: [sessionSchema],
            select: false,
            default: [],
        },

        tokenVersion: {
            type: Number,
            default: 0,
            select: false,
        },

        passwordChangedAt: {
            type: Date,
            select: false,
        },

    },
    { timestamps: true }
);

// ─── Indexes ──────────────────────────────────────────────────────────────────

// TTL index: MongoDB auto-deletes sessions where expiresAt has passed
userSchema.index(
    { "sessions.expiresAt": 1 },
    { expireAfterSeconds: 0, sparse: true }
);

// Fast lookup when matching deviceId during login
userSchema.index(
    { "sessions.deviceId": 1 },
    { sparse: true }
);

// ─── Export ───────────────────────────────────────────────────────────────────

const User = mongoose.model("User", userSchema);
export default User;