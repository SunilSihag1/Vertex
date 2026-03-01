import { registerUser } from "./auth.service.js";
import User from "./auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const signup = async (req, res) => {
    try {
        await registerUser(req.body);

        res.status(201).json({
            message: "OTP sent to your email"
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: "User already verified" });
        }

        // 🔥 Expiry pehle check karo
        if (user.otpExpires < Date.now()) {
            return res.status(400).json({ message: "OTP expired" });
        }

        // 🔥 Hashed OTP compare
        const isOtpMatch = await bcrypt.compare(
            otp.toString(),
            user.otp
        );

        if (!isOtpMatch) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpires = null;

        await user.save();

        res.status(200).json({
            message: "Account verified successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        // 🔴 If user not found
        if (!user) {
            return res.status(400).json({
                message: "Please register first"
            });
        }

        // 🔴 If user is Google account
        if (user.googleId) {
            return res.status(400).json({
                message: "Please login using Google"
            });
        }

        // 🔴 If account not verified
        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your account first"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
};

export const googleAuth = async (req, res) => {
    try {
        const { name, email, googleId } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email,
                googleId,
                isVerified: true
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Google login successful",
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Google authentication failed"
        });
    }
};