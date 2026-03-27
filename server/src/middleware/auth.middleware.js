/**
 * auth.middleware.js
 * Location: server/src/middleware/auth.middleware.js
 *
 * Validates access tokens on every protected request.
 *
 * Checks (in order):
 *  1. Bearer token present in Authorization header
 *  2. Token cryptographically valid (jose verifies signature + expiry)
 *  3. User exists and is active
 *  4. tokenVersion matches (catches logout-all + password change)
 *  5. Token not issued before passwordChangedAt (catches post-reset tokens)
 */

import { errors as JoseErrors } from "jose";
import User from "../modules/auth/auth.model.js";
import { verifyAccessToken } from "../utils/jwt.utils.js";

const authMiddleware = async (req, res, next) => {
    try {
        // ── 1. Extract token from Authorization header ─────────────────────────

        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access token missing" });
        }

        const token = authHeader.slice(7); // remove "Bearer " prefix

        // ── 2. Verify signature and expiry via jose ────────────────────────────

        let decoded;
        try {
            decoded = await verifyAccessToken(token);
        } catch (err) {
            if (
                err instanceof JoseErrors.JWTExpired ||
                err instanceof JoseErrors.JWTInvalid ||
                err instanceof JoseErrors.JWSInvalid ||
                err instanceof JoseErrors.JWSSignatureVerificationFailed
            ) {
                return res.status(401).json({ message: "Invalid or expired token" });
            }
            throw err; // unexpected jose error — let outer catch handle it
        }

        // ── 3. Load user with security fields ─────────────────────────────────

        const user = await User.findById(decoded.userId)
            .select("+tokenVersion +passwordChangedAt");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        if (!user.isActive) {

            return res.status(403).json({ message: "Account disabled" });
        }

        if (user.lockUntil && user.lockUntil > Date.now()) {

            return res.status(423).json({ message: "Account locked" });
        }

        // ── 4. tokenVersion check ──────────────────────────────────────────────
        //
        // If the user has logged out from all devices or changed their password,
        // tokenVersion is incremented. Any token embedding the old version is
        // instantly rejected — no blacklist needed.

        if (decoded.tokenVersion !== user.tokenVersion) {

            return res.status(401).json({ message: "Token has been invalidated. Please log in again." });
        }

        // ── 5. passwordChangedAt check ────────────────────────────────────────
        //
        // If the user reset their password, any access token issued before
        // that moment is rejected — even if it hasn't expired yet.

        if (user.passwordChangedAt) {
            const changedAtSecs = Math.floor(user.passwordChangedAt.getTime() / 1000);
            if (decoded.iat < changedAtSecs) {

                return res.status(401).json({
                    message: "Password was changed. Please log in again.",
                });
            }
        }

        // ── 6. Attach safe user context ───────────────────────────────────────

        req.user = {
            userId: user._id,
            email: user.email,
            role: user.role,
        };

        next();

    } catch (err) {

        console.error("[authMiddleware]", err);
        return res.status(500).json({ message: "Authentication error" });
    }
};

export default authMiddleware;