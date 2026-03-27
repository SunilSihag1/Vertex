import mongoose from "mongoose";



const addressSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["home", "office", "other"],
            required: true
        },

        line1: {
            type: String,
            trim: true,
            required: true,
            maxlength: [150, "Line 1 must not exceed 150 characters"]
        },

        line2: {
            type: String,
            trim: true,
            maxlength: [150, "Line 2 must not exceed 150 characters"],
            default: ""
        },

        city: {
            type: String,
            trim: true,
            required: true
        },

        state: {
            type: String,
            trim: true,
            required: true
        },

        pincode: {
            type: String,
            trim: true,
            match: [/^[1-9][0-9]{5}$/, "Enter a valid 6-digit pincode"],
            required: true
        },

        isDefault: {
            type: Boolean,
            default: false
        }
    },
    { _id: false }
);


const userDetailsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
            index: true
        },

        phone: {
            type: String,
            trim: true,
            match: [
                /^\+?[1-9]\d{6,14}$/,
                "Phone number must be in a valid international format (e.g. +919876543210)"
            ],
            default: null
        },

        dob: {
            type: Date,
            default: null
        },

        addresses: {
            type: [addressSchema],
            validate: {
                validator: function (val) {
                    return val.length <= 10;
                },
                message: "Maximum 10 addresses allowed"
            },
            default: []
        }
    },
    {
        timestamps: true
    }
);

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);
export default UserDetails;