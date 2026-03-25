/**
 * vite.config.js
 * Location: client/vite.config.js
 *
 * Added server.headers:
 *
 * The "Cross-Origin-Opener-Policy would block window.closed" warning comes
 * from Vite's default COOP header being too strict for Firebase's popup flow.
 *
 * Firebase's signInWithPopup() opens a Google window, completes auth,
 * then tries to communicate back via window.closed / postMessage.
 * The strict "same-origin" COOP header blocks this cross-origin window access.
 *
 * Fix: "same-origin-allow-popups" allows popups opened by our page to
 * communicate back, while still protecting against other cross-origin attacks.
 *
 * NOTE: This only affects the Vite dev server. Production (Nginx/Vercel/etc.)
 * needs the same header set there separately.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],

    server: {
        headers: {
            "Cross-Origin-Opener-Policy":   "same-origin-allow-popups",
            "Cross-Origin-Embedder-Policy": "unsafe-none",
        },
    },
});