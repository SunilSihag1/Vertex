/**
 * useGoogleAuth.js
 * Location: client/src/hooks/useGoogleAuth.js
 *
 * Reusable hook — used by BOTH Login.jsx and Signup.jsx.
 * No code duplication. One hook, one place to fix if something breaks.
 *
 * ─── WHAT THIS HOOK DOES ──────────────────────────────────────────────────────
 *
 * 1. Opens Google sign-in popup via Firebase
 * 2. Gets the idToken (Google-signed JWT) from the result
 * 3. Sends ONLY { idToken, deviceId } to our server
 * 4. Server verifies with Google → issues our own JWT
 * 5. Updates AuthContext state via login()
 * 6. Redirects to target page
 *
 * ─── WHY ONLY idToken, NOT name/email/googleId ────────────────────────────────
 *
 * Anyone can send { email: "admin@yourapp.com", googleId: "123" } in a curl request.
 * The server cannot know if it's real or fake.
 *
 * idToken is cryptographically signed by Google's private key.
 * The server verifies it with Google's public key via firebase-admin.
 * If it's tampered, expired, or from a different project → rejected.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import api from "../service/api";
import { useAuth } from "../context/AuthContext";
import useDeviceId from "./useDeviceId";
import { useNavigate } from "react-router-dom";

/**
 * @param {{ redirectTo?: string }} options
 *   redirectTo — where to navigate after successful auth (default: "/")
 *
 * @returns {{
 *   handleGoogleAuth : () => Promise<void>,
 *   isLoading        : boolean,
 *   error            : string | null,
 *   clearError       : () => void,
 * }}
 */
const useGoogleAuth = ({ redirectTo = "/" } = {}) => {
    const { login } = useAuth();
    const deviceId  = useDeviceId();
    const navigate  = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]         = useState(null);

    const clearError = () => setError(null);

    const handleGoogleAuth = async () => {

        // Guard: deviceId must exist before we can create a session
        if (!deviceId) {
            setError("Unable to identify your device. Please allow localStorage and try again.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // ── Step 1: Open Google popup ──────────────────────────────────────
            // prompt: "select_account" forces account chooser every time,
            // even if user already chose a Google account before.
            // This is important for multi-account users.
            const googleProvider = new GoogleAuthProvider();
            googleProvider.setCustomParameters({ prompt: "select_account" });

            const result = await signInWithPopup(auth, googleProvider);

            // ── Step 2: Get idToken ────────────────────────────────────────────
            // getIdToken() returns a JWT signed by Google.
            // This token proves the user authenticated with Google.
            // It expires in 1 hour — fine for our use case.
            const idToken = await result.user.getIdToken();

            // ── Step 3: Send to our server ────────────────────────────────────
            // Server will verify idToken with Google → extract name/email/uid
            // → find/create user → issue our own JWT pair
            const res = await api.post("/auth/google", {
                idToken,   // ← the only thing server needs from Google
                deviceId,  // ← for session tracking (which device is this)
            });

            // ── Step 4: Update auth state + redirect ──────────────────────────
            login(res.data.accessToken);
            navigate(redirectTo, { replace: true });

        } catch (err) {

            // ── Firebase errors ────────────────────────────────────────────────

            if (err.code === "auth/popup-closed-by-user" ||
                err.code === "auth/cancelled-popup-request") {
                // User closed the popup themselves — not an error, stay silent
                return;
            }

            if (err.code === "auth/popup-blocked") {
                setError("Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.");
                return;
            }

            if (err.code === "auth/network-request-failed") {
                setError("Network error. Please check your connection and try again.");
                return;
            }

            // ── Server errors ──────────────────────────────────────────────────

            const serverMessage = err.response?.data?.message;
            if (serverMessage) {
                setError(serverMessage);
                return;
            }

            // ── Fallback ───────────────────────────────────────────────────────
            setError("Google sign-in failed. Please try again.");

        } finally {
            setIsLoading(false);
        }
    };

    return { handleGoogleAuth, isLoading, error, clearError };
};

export default useGoogleAuth;