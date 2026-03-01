import bcrypt from "bcryptjs";
import User from "./auth.model.js";

export const registerUser = async (data) => {
    const { name, email, password, phone } = data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 🔥 Hash OTP
    const hashedOtp = await bcrypt.hash(otp, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        otp: hashedOtp,
        otpExpires: Date.now() + 5 * 60 * 1000,
        isVerified: false
    });

    console.log("OTP:", otp);
console.log("Hashed OTP:", hashedOtp);

    return user;
};