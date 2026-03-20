import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },

        password: {
            type: String,
            minlength: 8,
            required: function () {
                return this.authProvider === "local";
            },
            select: false
        },

        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local"
        },

        googleId: {
            type: String
        },

        isVerified: {
            type: Boolean,
            default: false
        },

        isActive: {
            type: Boolean,
            default: true
        },

        loginAttempts: {
            type: Number,
            default: 0
        },

        lockUntil: {
            type: Date
        },

        lastLogin: {
            type: Date
        },

        lastLoginIP: {
            type: String
        },

        refreshToken: {
            type: String,
            select: false
        }
    } // ✅ yaha object close hoga
);   // ✅ fir schema close hoga

const User = mongoose.model("User", userSchema);
export default User;