import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shreyapopat120861_db_user:24IITqRcUxN7EX7o@cluster0.grvbhko.mongodb.net/SMS?retryWrites=true&w=majority");
        console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.log("Database connection error ❌", error);
    }
};

export default connectDB;



