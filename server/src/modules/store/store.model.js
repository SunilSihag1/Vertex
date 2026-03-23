import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        tagline: {
            type: String,
            trim: true,
            default: "",
        },

        category: {
            type: String,
            trim: true,
            default: "",
        },

        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            index: true,
        },

        status: {
            type: String,
            enum: ["trial", "active", "expired", "suspended"],
            default: "trial",
        },

        currency: {
            type: String,
            default: "INR",
        },

        timezone: {
            type: String,
            default: "Asia/Kolkata",
        },
    },
    { timestamps: true } // automatically adds createdAt & updatedAt
);

export default mongoose.model("Store", storeSchema);