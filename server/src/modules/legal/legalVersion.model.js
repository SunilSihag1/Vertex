import mongoose from "mongoose";

const legalVersion = new mongoose.Schema({
    _id: ObjectId,

    documentId: {
        type: ObjectId,
        ref: "LegalDocument",
        index: true
    },

    version: String, // "1.0.0", "1.1.0"

    content: String, // Markdown / HTML

    effectiveDate: Date,

    publishedBy: {
        type: ObjectId,
        ref: "User"
    },

    changeLog: String, // What changed in this version

    isPublished: {
        type: Boolean,
        default: false
    },

    createdAt,
    updatedAt
})

export default mongoose.model("legalVersion", legalVersion);