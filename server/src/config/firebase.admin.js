/**
 * firebase.admin.js
 * Location: server/src/config/firebase.admin.js
 *
 * Firebase Admin SDK — server-side only.
 * Used to VERIFY Google ID tokens that the client sends.
 *
 * ─── ONE-TIME SETUP ───────────────────────────────────────────────────────────
 *
 * 1. Firebase Console → Project Settings (gear icon) → Service Accounts tab
 * 2. Click "Generate new private key" → JSON file downloads
 * 3. Open the JSON and copy these 3 values into your server/.env:
 *
 *    FIREBASE_PROJECT_ID      = "project_id" value from JSON
 *    FIREBASE_CLIENT_EMAIL    = "client_email" value from JSON
 *    FIREBASE_PRIVATE_KEY     = "private_key" value from JSON (keep the quotes!)
 *
 * Example .env:
 *    FIREBASE_PROJECT_ID=shop-management-system-7a86a
 *    FIREBASE_CLIENT_EMAIL=firebase-adminsdk-abc12@shop-management-system-7a86a.iam.gserviceaccount.com
 *    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

import admin from "firebase-admin";

const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
    throw new Error(
        "[firebase.admin] Missing env variables.\n" +
        "Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY\n" +
        "Get them from: Firebase Console → Project Settings → Service Accounts → Generate new private key"
    );
}

// Guard against double-initialization (nodemon hot-reload can trigger this)
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: FIREBASE_PROJECT_ID,
            clientEmail: FIREBASE_CLIENT_EMAIL,
            // .env stores \n as literal string "\\n" — must convert back to real newlines
            privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        }),
    });
}

export default admin;