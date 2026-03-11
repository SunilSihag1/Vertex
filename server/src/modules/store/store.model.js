import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    _id: ObjectId,

    name: String,
    ownerId: { type: ObjectId, ref: "User", index: true },

    status: {
        type: String,
        enum: ["trial", "active", "expired", "suspended"],
        default: "trial"
    },

    currency: { type: String, default: "INR" },
    timezone: String,

    createdAt,
    updatedAt
})

export default mongoose.model("store", storeSchema);