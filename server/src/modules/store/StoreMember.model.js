import mongoose from "mongoose";

const StoreMember = new mongoose.Schema({
    _id: ObjectId,

    storeId: { type: ObjectId, ref: "Store", index: true },
    userId: { type: ObjectId, ref: "User", index: true },

    role: {
        type: String,
        enum: ["owner", "admin", "manager", "staff", "accountant"]
    },

    permissions: [String], // override support

    isActive: { type: Boolean, default: true },

    joinedAt: Date
})

export default mongoose.model("storeMember", StoreMember);