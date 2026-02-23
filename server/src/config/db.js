import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.log("Database connection error ❌", error);
    }
};

export default connectDB;