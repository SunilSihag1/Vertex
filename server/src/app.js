import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes         from "./modules/auth/auth.routes.js";
import planRoutes         from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";
import otpRoutes          from "./modules/otp/otp.routes.js";
import profileRoutes      from "./modules/profile/profile.routes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── DB Connection ──────────────────────────────────────────────────────────
connectDB();

// ── Routes ─────────────────────────────────────────────────────────────────
app.use("/api/auth",         authRoutes);
app.use("/api/otp",          otpRoutes);
app.use("/api/plans",        planRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/profile",      profileRoutes); 

export default app;