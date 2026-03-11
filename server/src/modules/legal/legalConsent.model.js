import mongoose from "mongoose";

const legalConsent = new mongoose.Schema({
    _id: ObjectId,

    userId: {
        type: ObjectId,
        ref: "User",
        index: true
    },

    documentId: {
        type: ObjectId,
        ref: "LegalDocument"
    },

    versionId: {
        type: ObjectId,
        ref: "LegalVersion"
    },

    acceptedAt: Date,

    ipAddress: String,
    userAgent: String,

    acceptedVia: {
        type: String,
        enum: ["signup", "subscription", "manual_update"]
    },

    createdAt
})

export default mongoose.model("legalConsent", legalConsent);