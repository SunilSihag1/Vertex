import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: function () {
            return !this.googleId; // password only required if NOT google user
        }
    },

    phone: {
        type: String
    },

    address: {
        type: String
    },

    role: {
        type: String,
        enum: ["customer", "admin", "superadmin"],
        default: "customer"
    },

    isActive: {
        type: Boolean,
        default: true
    },

    otp: {
        type: String
    },

    otpExpires: {
        type: Date
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    googleId: {
        type: String
    }
},
    { timestamps: true });

export default mongoose.model("User", userSchema);
