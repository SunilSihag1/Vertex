import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name: String,

    ownerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        index: true
    },

    status: {
        type: String,
        enum: ["trial", "active", "expired", "suspended"],
        default: "trial"
    },

    currency: { type: String, default: "INR" },
    timezone: String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model("Store", storeSchema);