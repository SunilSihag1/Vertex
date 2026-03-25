/**
 * useDeviceId.js
 * Location: client/src/hooks/useDeviceId.js
 *
 * Generates a stable UUID for this browser and persists it in localStorage.
 *
 * This is the client side of the "same device = update session" mechanism.
 * The server uses this deviceId to decide:
 *   - deviceId already in sessions[] → update that session in place
 *   - deviceId not found             → create a new session slot
 *
 * Behavior:
 *  - First visit : generates crypto-random UUID via Web Crypto API, saves to localStorage
 *  - All subsequent visits : reads from localStorage
 *  - Must be sent with every login / google-auth request as `deviceId` in req.body
 *
 * Usage:
 *   const deviceId = useDeviceId();
 *   api.post("/auth/login", { email, password, deviceId });
 */

import { useState, useEffect } from "react";

const STORAGE_KEY = "app_device_id";

/**
 * Returns a stable, persistent device UUID for this browser.
 *
 * @returns {string | null}  null only on very first render tick if localStorage
 *                           was unavailable during the synchronous init phase.
 */
const useDeviceId = () => {
    const [deviceId, setDeviceId] = useState(() => {
        // Synchronous init — avoids unnecessary re-render on mount
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) return stored;

            const newId = crypto.randomUUID(); // Web Crypto API — available in all modern browsers
            localStorage.setItem(STORAGE_KEY, newId);
            return newId;
        } catch {
            // localStorage blocked (e.g. Safari private mode strict settings)
            return null;
        }
    });

    useEffect(() => {
        // Fallback for edge cases where useState initializer returned null
        if (!deviceId) {
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) { setDeviceId(stored); return; }

                const newId = crypto.randomUUID();
                localStorage.setItem(STORAGE_KEY, newId);
                setDeviceId(newId);
            } catch {
                // silently fail — server will respond with "Device ID is required"
            }
        }
    }, [deviceId]);

    return deviceId;
};

export default useDeviceId;