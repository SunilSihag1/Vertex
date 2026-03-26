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

import dotenv from "dotenv";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";

import authRoutes from "./modules/auth/auth.routes.js";
import planRoutes from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";
import otpRoutes from "./modules/otp/otp.routes.js";
import router from "./modules/plan/plan.routes.js";
import profileRoutes from "./modules/profile/profile.routes.js";
import storeRoutes from "./modules/store/store.routes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── DB Connection ──────────────────────────────────────────────────────────
connectDB();

// ── Routes ─────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/plans", router);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/stores", storeRoutes);

export default app;