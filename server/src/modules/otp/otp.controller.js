import * as otpService from "./otp.service.js";
import User from "../auth/auth.model.js";

/* =========================
   VERIFY OTP
========================= */
const verifyOtp = async (req, res) => {
    try {

        const { email, otp, type } = req.body;

        if (!email || !otp || !type) {
            return res.status(400).json({
                message: "Email, OTP and type are required"
            });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const result = await otpService.verifyOtp({
            userId: user._id,
            otp,
            type
        });

        return res.status(200).json(result);

    } catch (err) {

        if (err.message === "OTP expired")
            return res.status(410).json({ message: err.message });

        if (err.message === "Too many attempts")
            return res.status(429).json({ message: err.message });

        return res.status(400).json({ message: err.message });
    }
};


/* =========================
   RESEND OTP
========================= */
const resendOtp = async (req, res) => {
    try {

        const { email, type } = req.body;

        if (!email || !type) {
            return res.status(400).json({
                message: "Email and type are required"
            });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (type === "email_verification" && user.isVerified) {
            return res.status(400).json({
                message: "User already verified"
            });
        }

        await otpService.generateOtp(user._id, type);

        return res.status(200).json({
            message: "OTP resent successfully"
        });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};


/* =========================
   EXPORT
========================= */
export default {
    verifyOtp,
    resendOtp
};