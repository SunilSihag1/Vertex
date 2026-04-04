/**
 * auth.controller.js — COMPLETE FILE (replace existing)
 * Location: server/src/modules/auth/auth.controller.js
 */

import * as authService from "./auth.service.js";

// ─── Shared Cookie Config ─────────────────────────────────────────────────────

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge:   7 * 24 * 60 * 60 * 1000,
};

const CLEAR_COOKIE_OPTIONS = {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
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
            ip:        req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
        };

        const { accessToken, refreshToken } =
            await authService.login({ email, password, deviceId }, context);

        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        return res.status(200).json({ accessToken });

    } catch (err) {
        const statusMap = {
            "Invalid credentials":        401,
            "User not verified":           401,
            "Account disabled":            403,
            "Account locked. Try later.": 423,
            "Device ID is required":       400,
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
            ip:        req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
            deviceId:  req.headers["x-device-id"] ?? undefined,
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

const googleAuth = async (req, res) => {
    try {
        const { idToken, deviceId } = req.body;

        if (!idToken) {
            return res.status(400).json({ message: "Google ID token is required" });
        }

        const context = {
            ip:        req.ip,
            userAgent: req.headers["user-agent"] ?? "unknown",
        };

        const { accessToken, refreshToken } =
            await authService.googleAuth({ idToken, deviceId }, context);

        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        return res.status(200).json({ accessToken });

    } catch (err) {
        const statusMap = {
            "Invalid Google token":                  401,
            "Google account has no verified email":  400,
            "Account disabled":                      403,
            "Device ID is required":                 400,
            "Google ID token is required":           400,
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

// ─── SEND CHANGE-PASSWORD OTP ─────────────────────────────────────────────────

/**
 * Sends a password-reset OTP to the currently logged-in user's email.
 * No request body needed — userId is read from the verified JWT.
 */
const sendChangePasswordOtp = async (req, res) => {
    try {
        const result = await authService.sendChangePasswordOtp(req.user.userId);
        return res.status(200).json(result);
    } catch (err) {
        const statusMap = {
            "User not found": 404,
            "Google accounts cannot change password here. Manage your password through Google.": 400,
        };
        return res.status(statusMap[err.message] ?? 400).json({ message: err.message });
    }
};

// ─── CHANGE PASSWORD ──────────────────────────────────────────────────────────

/**
 * Verifies OTP + updates password in a single atomic operation.
 * On success, all sessions are revoked and the user must log in again.
 */
const changePassword = async (req, res) => {
    try {
        const { otp, newPassword } = req.body;

        if (!otp || !newPassword) {
            return res.status(400).json({ message: "otp and newPassword are required." });
        }

        const result = await authService.changePassword(req.user.userId, { otp, newPassword });
        return res.status(200).json(result);

    } catch (err) {
        const statusMap = {
            "User not found":                                    404,
            "Google accounts cannot change password.":          400,
            "OTP not found":                                    400,
            "OTP expired":                                      410,
            "Invalid OTP":                                      400,
            "Too many attempts":                                429,
            "Password does not meet security requirements":     422,
        };
        return res.status(statusMap[err.message] ?? 400).json({ message: err.message });
    }
};

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export default {
    signup,
    login,
    refresh,
    logout,
    logoutAll,
    googleAuth,
    sendChangePasswordOtp,
    changePassword,
};