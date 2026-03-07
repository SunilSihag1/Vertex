import jwt from "jsonwebtoken";
import User from "../modules/auth/auth.model.js";

const ACCESS_SECRET = process.env.ACCESS_SECRET;

if (!ACCESS_SECRET) {
    throw new Error("ACCESS_SECRET missing in environment variables");
}

const authMiddleware = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        let decoded;

        try {
            decoded = jwt.verify(token, ACCESS_SECRET);
        } catch {
            return res.status(401).json({
                message: "Invalid or expired token"
            });
        }

        //  Fetch user from DB (never trust JWT blindly)
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                message: "Account disabled"
            });
        }

        if (user.lockUntil && user.lockUntil > Date.now()) {
            return res.status(423).json({
                message: "Account locked"
            });
        }

        // Attach safe data
        req.user = {
            userId: user._id,
            email: user.email,
            storeId: decoded.storeId
        };

        next();

    } catch (err) {
        return res.status(500).json({
            message: "Authentication error"
        });
    }
};

export default authMiddleware;