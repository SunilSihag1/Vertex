import bcrypt from "bcrypt";
import crypto from "crypto";
import Otp from "./otp.model.js";
import User from "../auth/auth.model.js";
import sendEmail from "../../utils/sendEmail.js";

/* =========================
   GENERATE OTP
========================= */
const generateOtp = async (userId, type) => {

    const otp = crypto.randomInt(100000, 999999).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);

    await Otp.findOneAndUpdate(
        { userId, type },
        {
            otpHash: hashedOtp,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000),
            attempts: 0
        },
        { upsert: true, new: true }
    );

    const user = await User.findById(userId);

    if (!user) {
    throw new Error("User not found");
}

    await sendEmail(
        user.email,
        "Email Verification OTP",
        `Your OTP is ${otp}. It expires in 60 seconds`
    );

    return otp;
};


/* =========================
   VERIFY OTP
========================= */
const verifyOtp = async ({ userId, otp, type }) => {

    const record = await Otp.findOne({ userId, type });

    if (!record) throw new Error("OTP not found");

    if (record.expiresAt < Date.now())
        throw new Error("OTP expired");

    const isMatch = await bcrypt.compare(otp, record.otpHash);

    console.log("Entered OTP:", otp);
    console.log("Stored Hash:", record.otpHash);

    if (!isMatch) {

        record.attempts += 1;

        if (record.attempts >= 5) {
            await Otp.deleteOne({ _id: record._id });
            throw new Error("Too many attempts");
        }

        await record.save();
        throw new Error("Invalid OTP");
    }

    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    if (type === "email_verification") {
        user.isVerified = true;
    }

    await user.save();

    await Otp.deleteOne({ _id: record._id });

    return { message: "Verified successfully" };
};


/* =========================
   EXPORT
========================= */
export {
    generateOtp,
    verifyOtp,

};