/**
 * AuthContext.jsx
 * Location: client/src/context/AuthContext.jsx
 *
 * Single source of truth for auth state across the entire app.
 *
 * What it does on startup:
 *  1. Reads accessToken from localStorage
 *  2. Checks if it's expired (client-side decode — no network call)
 *  3. If expired → silently hits /auth/refresh (uses HttpOnly cookie)
 *  4. If refresh succeeds → user is logged in
 *  5. If refresh fails (cookie gone/expired) → user is logged out
 *
 * Exposes via useAuth():
 *  - user            → { userId, email } or null
 *  - isAuthenticated → boolean
 *  - isLoading       → boolean (true only during initial app boot check)
 *  - login()         → call after successful login API response
 *  - logout()        → call to clear state + hit logout endpoint
 */

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../service/api";

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext(null);

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Decodes a JWT payload without verifying signature.
 * Safe to use client-side — we only use this to check expiry and read claims.
 * Server always does the real cryptographic verification.
 *
 * @param {string} token
 * @returns {object | null}
 */
const decodeToken = (token) => {
    try {
        const base64 = token.split(".")[1];
        return JSON.parse(atob(base64));
    } catch {
        return null;
    }
};

/**
 * Returns true if the token is present and not expired.
 * Adds a 10-second buffer so we refresh slightly before actual expiry.
 *
 * @param {string | null} token
 * @returns {boolean}
 */
const isTokenValid = (token) => {
    if (!token) return false;
    const payload = decodeToken(token);
    if (!payload?.exp) return false;
    // exp is in seconds, Date.now() in ms — 10s buffer
    return payload.exp * 1000 > Date.now() + 10_000;
};

/**
 * Extracts safe user info from access token payload.
 *
 * @param {string} token
 * @returns {{ userId: string, email: string } | null}
 */
const getUserFromToken = (token) => {
    const payload = decodeToken(token);
    if (!payload?.userId) return null;
    return {
        userId: payload.userId,
        email: payload.email,
    };
};

// ─── Provider ─────────────────────────────────────────────────────────────────

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // true during boot check only

    // ── Boot: check auth status once on app load ───────────────────────────────

    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem("accessToken");

            // Case 1: Valid token in storage → decode and use directly (no network call)
            if (isTokenValid(storedToken)) {
                setUser(getUserFromToken(storedToken));
                setIsLoading(false);
                return;
            }

            // Case 2: Token missing or expired → try silent refresh via HttpOnly cookie
            try {
                const res = await api.post("/auth/refresh");
                const newToken = res.data.accessToken;

                localStorage.setItem("accessToken", newToken);
                setUser(getUserFromToken(newToken));
            } catch {
                // Refresh failed — cookie is gone or expired → user is logged out
                localStorage.removeItem("accessToken");
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    // ── login() — call this after a successful /auth/login or /auth/google ─────

    const login = useCallback((accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        setUser(getUserFromToken(accessToken));
    }, []);

    // ── logout() — call this to log the user out ───────────────────────────────

    const logout = useCallback(async () => {
        try {
            // Tell the server to revoke this device's session
            await api.post("/auth/logout");
        } catch {
            // Even if server call fails, clear client state
        } finally {
            localStorage.removeItem("accessToken");
            setUser(null);
        }
    }, []);

    // ── Derived state ──────────────────────────────────────────────────────────

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useAuth — access auth state anywhere in the app.
 *
 * @example
 * const { user, isAuthenticated, login, logout } = useAuth();
 */
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used inside <AuthProvider>");
    }
    return ctx;
};