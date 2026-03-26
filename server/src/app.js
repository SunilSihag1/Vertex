/**
 * app.js
 * Location: server/src/app.js
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./modules/auth/auth.routes.js";
import planRoutes from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";
import otpRoutes from "./modules/otp/otp.routes.js";
import profileRoutes from "./modules/profile/profile.routes.js";
import storeRoutes from "./modules/store/store.routes.js";

const app = express();

// ── Trust proxy ────────────────────────────────────────────────────────────────
// Required so req.ip shows the real client IP instead of the proxy IP (Nginx/cloud LB).
// Without this, geoip lookups and rate-limiting by IP are broken.
app.set("trust proxy", 1);

// ── Core Middleware ────────────────────────────────────────────────────────────
app.use(cors({
    origin: process.env.CLIENT_URL ?? "http://localhost:5173",
    credentials: true,  // Required: allows browser to send HttpOnly cookies cross-origin
}));
app.use(express.json());
app.use(cookieParser()); // CRITICAL: without this, req.cookies is undefined and refresh token is never read
app.use(morgan("dev"));

// ── DB Connection ──────────────────────────────────────────────────────────────
connectDB();

// ── Routes ─────────────────────────────────────────────────────────────────────
app.use("/api/auth",         authRoutes);
app.use("/api/otp",          otpRoutes);
app.use("/api/plans",        planRoutes);      // was using `router` (wrong variable) — now correctly uses planRoutes
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/profile",      profileRoutes);
app.use("/api/stores",       storeRoutes);

export default app;