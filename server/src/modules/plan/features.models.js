import mongoose from "mongoose";

const features = new mongoose.Schema({
    _id: ObjectId,
    key: "advanced_dashboard",
    name: "Advanced Dashboard",
    description: String,
    category: "analytics"
})

export default mongoose.model("features", features);