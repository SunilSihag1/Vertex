import mongoose from "mongoose";

const legalAudit = new mongoose.Schema({
    _id: ObjectId,

    documentId: ObjectId,
    versionId: ObjectId,

    action: {
        type: String,
        enum: ["created", "updated", "published", "deactivated"]
    },

    performedBy: {
        type: ObjectId,
        ref: "User"
    },

    timestamp: Date
})

export default mongoose.model("legalAudit", legalAudit);