import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"; 
import authRoutes from "./modules/auth/auth.routes.js";
import planRoutes from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";
import otpRoutes from "./modules/otp/otp.routes.js";
import profileRoutes from "./modules/profile/profile.routes.js";
import storeRoutes from "./modules/store/store.routes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ── DB Connection ──────────────────────────────────────────────────────────
connectDB();

// ── Routes ─────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/stores", storeRoutes);

export default app;