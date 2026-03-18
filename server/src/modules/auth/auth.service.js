/**
 * auth.service.js
 * Location: server/src/modules/auth/auth.service.js
 */

import bcrypt from "bcrypt";
import User from "./auth.model.js";
import Store from "../store/store.model.js";
import * as otpService from "../otp/otp.service.js";
import admin from "../../config/firebase.admin.js";
import {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
    hashToken,
} from "../../utils/jwt.utils.js";
import { parseDevice, resolveCountry } from "../../utils/device.utils.js";

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_SESSIONS       = 5;
const BCRYPT_ROUNDS      = 12;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_DURATION_MS   = 15 * 60 * 1000;

// ─── Password Validation ──────────────────────────────────────────────────────

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

const validatePassword = (password) => {
    if (!PASSWORD_REGEX.test(password)) {
        throw new Error("Password does not meet security requirements");
    }
};

// ─── Session Helpers ──────────────────────────────────────────────────────────

const buildSessionMeta = (context, tokenData) => ({
    deviceId:   context.deviceId,
    tokenHash:  tokenData.tokenHash,
    expiresAt:  tokenData.expiresAt,
    ip:         context.ip         ?? null,
    country:    resolveCountry(context.ip),
    device:     parseDevice(context.userAgent),
    lastSeenAt: new Date(),
});

const upsertSession = (user, context, tokenData) => {
    const now  = new Date();
    const meta = buildSessionMeta(context, tokenData);

    // Remove expired sessions
    user.sessions = user.sessions.filter((s) => s.expiresAt > now);

    // Same deviceId → update in place (same device re-logging in)
    const idx = user.sessions.findIndex((s) => s.deviceId === context.deviceId);
    if (idx !== -1) {
        Object.assign(user.sessions[idx], {
            tokenHash:  meta.tokenHash,
            expiresAt:  meta.expiresAt,
            ip:         meta.ip,
            country:    meta.country,
            device:     meta.device,
            lastSeenAt: meta.lastSeenAt,
        });
        return;
    }

    // New device → evict oldest if at cap
    if (user.sessions.length >= MAX_SESSIONS) {
        user.sessions.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        user.sessions.shift();
    }
    user.sessions.push(meta);
};

// ─── SIGNUP ───────────────────────────────────────────────────────────────────

const signup = async ({ name, email, password }) => {
    email = email.toLowerCase().trim();

    const existing = await User.findOne({ email });
    if (existing) throw new Error("User already exists");

    validatePassword(password);

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

    const user = await User.create({
        name,
        email,
        password:     hashedPassword,
        authProvider: "local",
    });

    await otpService.generateOtp(user._id, "email_verification");

    return { message: "Signup successful. OTP sent." };
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────

const login = async ({ email, password, deviceId }, context = {}) => {
    if (!deviceId) throw new Error("Device ID is required");

    email = email.toLowerCase();

    const user = await User.findOne({ email })
        .select("+password +sessions +tokenVersion");

    if (!user)            throw new Error("Invalid credentials");
    if (!user.isActive)   throw new Error("Account disabled");
    if (!user.isVerified) throw new Error("User not verified");

    // Auto-unlock expired lockout
    if (user.lockUntil && user.lockUntil < Date.now()) {
        user.loginAttempts = 0;
        user.lockUntil     = null;
    }

    if (user.lockUntil && user.lockUntil > Date.now()) {
        throw new Error("Account locked. Try later.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        user.loginAttempts += 1;
        if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            user.lockUntil = new Date(Date.now() + LOCK_DURATION_MS);
        }
        await user.save();
        throw new Error("Invalid credentials");
    }

    user.loginAttempts = 0;
    user.lockUntil     = null;
    user.lastLogin     = new Date();
    user.lastLoginIP   = context.ip ?? null;

    const accessToken = await signAccessToken({
        userId:       user._id.toString(),
        email:        user.email,
        tokenVersion: user.tokenVersion,
    });

    const { token: refreshToken, tokenHash, expiresAt } = await signRefreshToken({
        userId: user._id.toString(),
    });

    upsertSession(user, { deviceId, ...context }, { tokenHash, expiresAt });
    await user.save();

    return { accessToken, refreshToken };
};

// ─── REFRESH TOKEN ROTATION ───────────────────────────────────────────────────

const refresh = async (rawToken, context = {}) => {
    if (!rawToken) throw new Error("Refresh token missing");

    let decoded;
    try {
        decoded = await verifyRefreshToken(rawToken);
    } catch {
        throw new Error("Invalid refresh token");
    }

    const incomingHash = hashToken(rawToken);
    const user = await User.findById(decoded.userId).select("+sessions +tokenVersion");
    if (!user) throw new Error("Invalid refresh token");

    const now        = new Date();
    const sessionIdx = user.sessions.findIndex(
        (s) => s.tokenHash === incomingHash && s.expiresAt > now
    );

    if (sessionIdx === -1) {
        // Reuse detected — wipe all sessions (potential token theft)
        user.sessions      = [];
        user.tokenVersion += 1;
        await user.save();
        throw new Error("Session expired or reuse detected. Please log in again.");
    }

    const activeStore = await Store.findOne({ userId: user._id, isActive: true });
    if (!activeStore) throw new Error("No active store found");

    const sessionDeviceId = context.deviceId ?? user.sessions[sessionIdx].deviceId;

    const accessToken = await signAccessToken({
        userId:       user._id.toString(),
        email:        user.email,
        tokenVersion: user.tokenVersion,
    });

    const { token: newRefreshToken, tokenHash, expiresAt } = await signRefreshToken({
        userId: user._id.toString(),
    });

    user.sessions.splice(sessionIdx, 1);
    upsertSession(user, { deviceId: sessionDeviceId, ...context }, { tokenHash, expiresAt });
    await user.save();

    return { accessToken, refreshToken: newRefreshToken };
};

// ─── GOOGLE AUTH ──────────────────────────────────────────────────────────────

/**
 * Industrial-standard Google OAuth flow:
 *
 * ❌ Old way (INSECURE):
 *    Client sends { name, email, googleId } → Server trusts it blindly
 *    → Anyone can fake any user's email and get logged in
 *
 * ✅ New way (SECURE):
 *    Client sends { idToken } → Server verifies with Google → extracts data
 *    → idToken is cryptographically signed by Google, cannot be faked
 *
 * @param {{ idToken: string, deviceId: string }} data
 * @param {{ ip: string, userAgent: string }} context
 */
const googleAuth = async ({ idToken, deviceId }, context = {}) => {

    // ── Validate inputs ────────────────────────────────────────────────────────

    if (!idToken)  throw new Error("Google ID token is required");
    if (!deviceId) throw new Error("Device ID is required");

    // ── Step 1: Verify idToken with Google ────────────────────────────────────
    // admin.auth().verifyIdToken() sends the token to Google's servers.
    // Google checks: is it signed by us? is it expired? is it for this project?
    // If anything is wrong, it throws — we catch and convert to a clean error.

    let googleUser;
    try {
        googleUser = await admin.auth().verifyIdToken(idToken);
    } catch (err) {
        // Common reasons: token expired (>1hr), wrong project, tampered token
        throw new Error("Invalid Google token");
    }

    // ── Step 2: Extract VERIFIED data ─────────────────────────────────────────
    // ONLY trust what Google confirmed — never the client's raw payload.

    const { uid: googleId, email, name, picture } = googleUser;

    if (!email) {
        // Rare: Google accounts without verified email (shouldn't happen for consumer accounts)
        throw new Error("Google account has no verified email");
    }

    const normalizedEmail = email.toLowerCase();

    // ── Step 3: Find or create user ───────────────────────────────────────────

    let user = await User.findOne({ email: normalizedEmail })
        .select("+sessions +tokenVersion");

    if (!user) {
        // First time Google login → create account
        // Name fallback: use part before @ if Google doesn't provide a name
        user = await User.create({
            name:         name ?? normalizedEmail.split("@")[0],
            email:        normalizedEmail,
            googleId,
            authProvider: "google",
            isVerified:   true,  // Google already verified their email
        });
        // Re-fetch with select fields (create() doesn't return select: false fields)
        user = await User.findById(user._id).select("+sessions +tokenVersion");

    } else if (!user.googleId) {
        // User already has an account (signed up with email/password) but
        // is now logging in with Google for the first time → link accounts
        user.googleId = googleId;
        // Keep authProvider as "local" so they can still use password login too
    }

    if (!user.isActive) throw new Error("Account disabled");

    // ── Step 4: Issue our own JWT pair ────────────────────────────────────────
    // Same as normal login — Google auth just gave us a verified identity.
    // From here on, we use our own access/refresh tokens.

    const accessToken = await signAccessToken({
        userId:       user._id.toString(),
        email:        user.email,
        tokenVersion: user.tokenVersion,
    });

    const { token: refreshToken, tokenHash, expiresAt } = await signRefreshToken({
        userId: user._id.toString(),
    });

    upsertSession(user, { deviceId, ...context }, { tokenHash, expiresAt });
    await user.save();

    return { accessToken, refreshToken };
};

// ─── LOGOUT ───────────────────────────────────────────────────────────────────

const logout = async (userId, rawToken) => {
    if (rawToken) {
        const tokenHash = hashToken(rawToken);
        await User.findByIdAndUpdate(userId, {
            $pull: { sessions: { tokenHash } },
        });
    }
    return { message: "Logged out successfully" };
};

// ─── LOGOUT ALL ───────────────────────────────────────────────────────────────

const logoutAll = async (userId) => {
    await User.findByIdAndUpdate(userId, {
        $set: { sessions: [] },
        $inc: { tokenVersion: 1 },
    });
    return { message: "Logged out from all devices" };
};

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export { signup, login, refresh, logout, logoutAll, googleAuth };