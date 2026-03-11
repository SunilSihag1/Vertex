import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        plan_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plan"
        },

        billing_cycle: {
            type: String,
            enum: ["monthly", "yearly"]
        },

        amount: {
            type: Number,
            required: true,
            min: 0
        },

        razorpay_payment_id: {
            type: String,
            index: true
        },

        razorpay_order_id: {
            type: String,
            required: true,
            index: true
        },

        razorpay_signature: {
            type: String
        },

        status: {
            type: String,
            enum: ["success", "fail", "pending"],
            default: "pending",
            index: true
        },

        error_code: {
            type: String
        },

        error_reason: {
            type: String
        }

    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: false
        }
    }
);

export default mongoose.model("Payment", paymentSchema);