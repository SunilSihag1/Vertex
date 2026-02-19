import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./model.js";
import nodemailer from "nodemailer";


const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password"
  }
});


// =======================
// SIGNUP ROUTE
// =======================
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, phone, address, role } = req.body;

        // 1️⃣ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists ❌"
            });
        }

        // 2️⃣ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3️⃣ Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        await transporter.sendMail({
            from: "your_email@gmail.com",
            to: email,
            subject: "OTP Verification",
            text: `Your OTP is: ${otp}`
        });

        console.log("Generated OTP:", otp); // TEMP (email baad me karenge)

        // 4️⃣ Create user (unverified)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            role,
            otp,
            otpExpiry,
            isVerified: false
        });

        res.status(201).json({
            message: "Signup successful! OTP sent 📩",
            email: user.email
        });

    } catch (error) {
        res.status(500).json({
            message: "Signup error ❌",
            error: error.message
        });
    }
});


// =======================
// VERIFY OTP ROUTE
// =======================
router.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found ❌"
            });
        }

        if (user.otp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP ❌"
            });
        }

        if (user.otpExpiry < new Date()) {
            return res.status(400).json({
                message: "OTP expired ⏳"
            });
        }

        // 1️⃣ Verify account
        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;

        await user.save();

        res.status(200).json({
            message: "Account verified successfully ✅"
        });

    } catch (error) {
        res.status(500).json({
            message: "OTP verification error ❌",
            error: error.message
        });
    }
});


// =======================
// LOGIN ROUTE
// =======================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1️⃣ Check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found ❌"
            });
        }

        // 2️⃣ Check if verified
        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your account first ❌"
            });
        }

        // 3️⃣ Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password ❌"
            });
        }

        // 4️⃣ Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            "secretkey",
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful ✅",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Login error ❌",
            error: error.message
        });
    }
});

export default router;
