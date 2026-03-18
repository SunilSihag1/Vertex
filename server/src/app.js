/**
 * app.js
 * Location: server/src/app.js
 *
 * Two critical additions vs old version:
 *
 * 1. cookie-parser  — without this req.cookies is undefined,
 *                     so refreshToken cookie can never be read
 *
 * 2. app.set("trust proxy", 1) — without this req.ip always shows
 *                                 "127.0.0.1" (the proxy IP) instead of
 *                                 the real client IP when behind Nginx / cloud LB
 *
 * Install: npm install cookie-parser
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./modules/auth/auth.routes.js";
import otpRoutes from "./modules/otp/otp.routes.js";
import planRoutes from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";

const app = express();

// ─── Trust Proxy ──────────────────────────────────────────────────────────────
// Must be set BEFORE any middleware that reads req.ip
app.set("trust proxy", 1);

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(cors({
    origin:      process.env.CLIENT_URL ?? "http://localhost:5173",
    credentials: true,  // Required: allows browser to send/receive cookies cross-origin
}));

// ─── Body Parser ──────────────────────────────────────────────────────────────
app.use(express.json());

// ─── Cookie Parser ────────────────────────────────────────────────────────────
// Required: parses Cookie header → populates req.cookies
// Without this, req.cookies.refreshToken is always undefined
app.use(cookieParser());

// ─── Database ─────────────────────────────────────────────────────────────────
connectDB();

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth",         authRoutes);
app.use("/api/otp",          otpRoutes);
app.use("/api/plans",        planRoutes);
app.use("/api/subscription", subscriptionRoutes);

export default app;