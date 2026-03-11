import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import router from "./modules/plan/plan.routes.js";
import subscriptionRoutes from "./modules/payment/payment.routes.js";
import connectDB from "./config/db.js";
import otpRoutes from "./modules/otp/otp.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/otp", otpRoutes);

// DB Connection
connectDB()

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/plans", router);
app.use("/api/subscription", subscriptionRoutes);

export default app;
