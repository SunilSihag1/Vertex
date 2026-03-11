import mongoose from "mongoose";

const legalDocument = new mongoose.Schema({
    _id: ObjectId,

    type: {
        type: String,
        enum: [
            "privacy_policy",
            "terms_and_conditions",
            "refund_policy",
            "cookie_policy",
            "data_processing_agreement",
            "acceptable_use_policy"
        ],
        required: true,
        index: true
    },

    title: String, // e.g., "Privacy Policy"

    currentVersionId: {
        type: ObjectId,
        ref: "LegalVersion"
    },

    isActive: {
        type: Boolean,
        default: true
    },

    requiresAcceptance: {
        type: Boolean,
        default: true
    },

    createdAt,
    updatedAt
})

export default mongoose.model("legalDocument", legalDocument);