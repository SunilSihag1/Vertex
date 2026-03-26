/**
 * auth.controller.js
 * Location: server/src/modules/auth/auth.controller.js
 *
 * googleAuth: now receives { idToken, deviceId } — NOT { name, email, googleId }
 */

import * as authService from "./auth.service.js";

// ─── Shared Cookie Config ─────────────────────────────────────────────────────

const COOKIE_OPTIONS = {
    httpOnly: true,                                      // JS cannot read this cookie
    secure: process.env.NODE_ENV === "production",    // HTTPS only in prod
    sameSite: "strict",                                  // No cross-site sending
    maxAge: 7 * 24 * 60 * 60 * 1000,                 // 7 days in ms
};

const CLEAR_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
};

// ─── SIGNUP ───────────────────────────────────────────────────────────────────

const signup = async (req, res) => {
    try {
        const result = await authService.signup(req.body);
        return res.status(201).json(result);
    } catch (err) {
        if (err.message === "User already exists") {
            return res.status(409).json({ message: err.message });
        }
        return res.status(400).json({ message: err.message });
    }
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────

const login = async (req, res) => {
    try {
        const { email, password, deviceId } = req.body;

        const context = {
            ip: req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
        };

        const { accessToken, refreshToken } =
            await authService.login({ email, password, deviceId }, context);

        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

        return res.status(200).json({ accessToken });

    } catch (err) {
        const statusMap = {
            "Invalid credentials": 401,
            "User not verified": 401,
            "Account disabled": 403,
            "Account locked. Try later.": 423,
            "Device ID is required": 400,
        };
        return res.status(statusMap[err.message] ?? 400).json({ message: err.message });
    }
};

// ─── REFRESH TOKEN ────────────────────────────────────────────────────────────

const refresh = async (req, res) => {
    try {
        const rawToken = req.cookies.refreshToken;

        if (!rawToken) {
            return res.status(401).json({ message: "Refresh token missing" });
        }

        const context = {
            ip: req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
            deviceId: req.headers["x-device-id"] ?? undefined,
        };

        const { accessToken, refreshToken } =
            await authService.refresh(rawToken, context);

        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

        return res.status(200).json({ accessToken });

    } catch (err) {
        res.clearCookie("refreshToken", CLEAR_COOKIE_OPTIONS);
        return res.status(401).json({ message: err.message });
    }
};

// ─── GOOGLE AUTH ──────────────────────────────────────────────────────────────
//
// What changed:
//   OLD → const { name, email, googleId } = req.body   ← INSECURE (blind trust)
//   NEW → const { idToken, deviceId } = req.body       ← verified by Google
//
// The controller just extracts and passes — verification happens in the service.

const googleAuth = async (req, res) => {
    try {
        const { idToken, deviceId } = req.body;

        if (!idToken) {
            return res.status(400).json({ message: "Google ID token is required" });
        }

        const context = {
            ip: req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
        };

        const { accessToken, refreshToken } =
            await authService.googleAuth({ idToken, deviceId }, context);

        // Set refreshToken as HttpOnly cookie (same as normal login)
        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

        return res.status(200).json({ accessToken });

    } catch (err) {
        const statusMap = {
            "Invalid Google token": 401,
            "Google account has no verified email": 400,
            "Account disabled": 403,
            "Device ID is required": 400,
            "Google ID token is required": 400,
        };
        return res.status(statusMap[err.message] ?? 400).json({ message: err.message });
    }
};

// ─── LOGOUT ───────────────────────────────────────────────────────────────────

const logout = async (req, res) => {
    try {
        const rawToken = req.cookies.refreshToken;
        await authService.logout(req.user.userId, rawToken);
        res.clearCookie("refreshToken", CLEAR_COOKIE_OPTIONS);
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

// ─── LOGOUT ALL ───────────────────────────────────────────────────────────────

const logoutAll = async (req, res) => {
    try {
        await authService.logoutAll(req.user.userId);
        res.clearCookie("refreshToken", CLEAR_COOKIE_OPTIONS);
        return res.status(200).json({ message: "Logged out from all devices" });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export default { signup, login, refresh, logout, logoutAll, googleAuth };