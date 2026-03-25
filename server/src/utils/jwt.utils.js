/**
 * jwt.util.js
 * Location: server/src/utils/jwt.util.js
 *
 * Uses `jose` (Web Crypto API) instead of legacy `jsonwebtoken`.
 * jose is async, edge-compatible, and the industry standard in 2024+.
 *
 * Install: npm install jose
 */

import { SignJWT, jwtVerify } from "jose";
import crypto from "crypto";

// ─── Constants ────────────────────────────────────────────────────────────────

const ALG               = "HS256";
const ACCESS_EXPIRY     = "15m";
const REFRESH_EXPIRY    = "7d";
export const REFRESH_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

// ─── Secret Validation ───────────────────────────────────────────────────────

const rawAccessSecret  = process.env.ACCESS_SECRET;
const rawRefreshSecret = process.env.REFRESH_SECRET;

if (!rawAccessSecret || !rawRefreshSecret) {
    throw new Error("[jwt.util] ACCESS_SECRET and REFRESH_SECRET must be set in .env");
}

if (rawAccessSecret.length < 32 || rawRefreshSecret.length < 32) {
    throw new Error("[jwt.util] JWT secrets must be at least 32 characters for HS256");
}

// jose requires Uint8Array for HMAC secrets
const ACCESS_SECRET  = new TextEncoder().encode(rawAccessSecret);
const REFRESH_SECRET = new TextEncoder().encode(rawRefreshSecret);

// ─── Access Token ─────────────────────────────────────────────────────────────

/**
 * Signs a short-lived access token (15 minutes).
 *
 * Payload includes tokenVersion — middleware uses this to instantly
 * invalidate all tokens when user changes password or logs out everywhere.
 *
 * @param {{ userId: string, email: string, tokenVersion: number }} payload
 * @returns {Promise<string>}
 */
export const signAccessToken = async ({ userId, email, tokenVersion }) => {
    return new SignJWT({ userId, email, tokenVersion })
        .setProtectedHeader({ alg: ALG })
        .setIssuedAt()
        .setExpirationTime(ACCESS_EXPIRY)
        .setJti(crypto.randomUUID())   // unique per token — enables future blacklisting
        .sign(ACCESS_SECRET);
};

/**
 * Verifies an access token and returns its decoded payload.
 * Throws a jose error if expired or tampered.
 *
 * @param {string} token
 * @returns {Promise<{ userId: string, email: string, tokenVersion: number, iat: number, exp: number, jti: string }>}
 */
export const verifyAccessToken = async (token) => {
    const { payload } = await jwtVerify(token, ACCESS_SECRET, { algorithms: [ALG] });
    return payload;
};

// ─── Refresh Token ────────────────────────────────────────────────────────────

/**
 * Signs a long-lived refresh token (7 days).
 * Returns the raw token (for HttpOnly cookie) AND its SHA-256 hash (for DB).
 *
 * RULE: Only the hash is stored in MongoDB. Never the raw token.
 *
 * @param {{ userId: string }} payload
 * @returns {Promise<{ token: string, tokenHash: string, expiresAt: Date }>}
 */
export const signRefreshToken = async ({ userId }) => {
    const token = await new SignJWT({ userId })
        .setProtectedHeader({ alg: ALG })
        .setIssuedAt()
        .setExpirationTime(REFRESH_EXPIRY)
        .setJti(crypto.randomUUID())
        .sign(REFRESH_SECRET);

    return {
        token,
        tokenHash: hashToken(token),
        expiresAt: new Date(Date.now() + REFRESH_EXPIRY_MS),
    };
};

/**
 * Verifies a refresh token and returns its decoded payload.
 *
 * @param {string} token
 * @returns {Promise<{ userId: string, iat: number, exp: number, jti: string }>}
 */
export const verifyRefreshToken = async (token) => {
    const { payload } = await jwtVerify(token, REFRESH_SECRET, { algorithms: [ALG] });
    return payload;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * SHA-256 hashes any string. Used to hash refresh tokens before DB storage.
 * If DB is breached, hashed tokens are useless without the originals.
 *
 * @param {string} value
 * @returns {string} hex-encoded SHA-256 hash
 */
export const hashToken = (value) => {
    return crypto.createHash("sha256").update(value).digest("hex");
};