import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./auth.model.js";
import * as otpService from "../otp/otp.service.js";

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

if (!ACCESS_SECRET || !REFRESH_SECRET) {
    throw new Error("JWT secrets missing in environment variables");
}

/* =========================
   SIGNUP
========================= */
const signup = async ({ name, email, password }) => {

    email = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
        throw new Error("Password does not meet security requirements");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        authProvider: "local"
    });

    await otpService.generateOtp(user._id, "email_verification");

    return { message: "Signup successful. OTP sent." };
};


/* =========================
   LOGIN
========================= */
const login = async ({ email, password }, ip) => {

    email = email.toLowerCase();

    const user = await User.findOne({ email })
        .select("+password +refreshToken");

    if (!user) throw new Error("Invalid credentials");

    if (!user.isActive) throw new Error("Account disabled");

    if (!user.isVerified) throw new Error("User not verified");

    // unlock if expired
    if (user.lockUntil && user.lockUntil < Date.now()) {
        user.loginAttempts = 0;
        user.lockUntil = null;
    }

    if (user.lockUntil && user.lockUntil > Date.now()) {
        throw new Error("Account locked. Try later.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        user.loginAttempts += 1;

        if (user.loginAttempts >= 5) {
            user.lockUntil = Date.now() + 15 * 60 * 1000;
        }

        await user.save();
        throw new Error("Invalid credentials");
    }

    // successful login
    user.loginAttempts = 0;
    user.lockUntil = null;
    user.lastLogin = new Date();
    user.lastLoginIP = ip;


    const accessToken = jwt.sign(
        {
            userId: user._id,
            email: user.email,
        },
        ACCESS_SECRET,
        { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
        { userId: user._id },
        REFRESH_SECRET,
        { expiresIn: "7d" }
    );

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
};


/* =========================
   REFRESH TOKEN (Rotation)
========================= */
const refresh = async (token) => {

    if (!token) throw new Error("Refresh token missing");

    let decoded;

    try {
        decoded = jwt.verify(token, REFRESH_SECRET);
    } catch {
        throw new Error("Invalid refresh token");
    }

    const user = await User.findById(decoded.userId)
        .select("+refreshToken");

    if (!user || user.refreshToken !== token) {
        throw new Error("Invalid refresh token");
    }

    const activeStore = await Store.findOne({
        userId: user._id,
        isActive: true
    });

    if (!activeStore) {
        throw new Error("No active store found");
    }

    const newAccessToken = jwt.sign(
        {
            userId: user._id,
            email: user.email,
        },
        ACCESS_SECRET,
        { expiresIn: "15m" }
    );

    const newRefreshToken = jwt.sign(
        { userId: user._id },
        REFRESH_SECRET,
        { expiresIn: "7d" }
    );

    user.refreshToken = newRefreshToken;
    await user.save();

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
    };
};

const googleAuth = async ({ name, email, googleId }) => {

    email = email.toLowerCase();

    let user = await User.findOne({ email });

    if (!user) {
        user = await User.create({
            name,
            email,
            googleId,
            authProvider: "google",
            isVerified: true
        });
    }

    const accessToken = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        ACCESS_SECRET,
        { expiresIn: "15m" }
    );

    return { token: accessToken };
};


/* =========================
   LOGOUT
========================= */
const logout = async (userId) => {

    await User.findByIdAndUpdate(userId, {
        refreshToken: null
    });

    return { message: "Logged out successfully" };
};


/* =========================
   EXPORT
========================= */
export {
    signup,
    login,
    refresh,
    logout,
    googleAuth
};