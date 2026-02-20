import express from "express";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/modules/auth/auth.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);    

const PORT = 5000;

app.listen(PORT, () => {
    
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`📌 Signup API: http://localhost:${PORT}/api/signup`);
    console.log(`📌 Login API:  http://localhost:${PORT}/api/login`);
});

