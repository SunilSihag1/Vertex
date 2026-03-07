import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
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

export default app;
