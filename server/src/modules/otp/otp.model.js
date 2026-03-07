import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        otpHash: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: ["email_verification", "password_reset"],
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        },

        attempts: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false }
    }
);

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
otpSchema.index(
    { userId: 1, type: 1 },
    { unique: true }
);

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;