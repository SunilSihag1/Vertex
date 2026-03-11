import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        monthlyPrice: {
            type: Number,
            required: true,
            min: 0
        },

        yearlyPrice: {
            type: Number,
            required: true,
            min: 0
        },

        trialDays: {
            type: Number,
            default: 14
        },

        isPopular: {
            type: Boolean,
            default: false
        },

        isActive: {
            type: Boolean,
            default: true
        },

        features: [
            {
                type: String
            }
        ],

        limits: {
            stores: { type: Number, default: 1 },
            employees: { type: Number, default: 1 },
            products: { type: Number, default: 100 },
            invoicesPerMonth: { type: Number, default: 100 }
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Plan", planSchema);