import User from "../auth/auth.model.js";
import UserDetails from "./userDetails.model.js";


export const getUserProfile = async (userId) => {
    const user = await User.findById(userId).select("name email role");

    if (!user) throw new Error("User not found");

    const details = await UserDetails.findOne({ userId }).select("phone dob addresses");

    return {
        name:      user.name,
        email:     user.email,
        role:      user.role,
        phone:     details?.phone     ?? null,
        dob:       details?.dob       ?? null,
        addresses: details?.addresses ?? []
    };
};


export const updateUserProfile = async (userId, data) => {
    const { name, email, phone, dob, addresses } = data;

    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    if (email && email.toLowerCase() !== user.email) {
        const conflict = await User.findOne({
            email: email.toLowerCase(),
            _id: { $ne: userId }
        });
        if (conflict) throw new Error("Email is already in use by another account");
    }

    const userUpdates = {};
    if (name)  userUpdates.name  = name.trim();
    if (email) userUpdates.email = email.toLowerCase().trim();

    let updatedUser = user;
    if (Object.keys(userUpdates).length > 0) {
        updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: userUpdates },
            { new: true, runValidators: true }
        ).select("name email role");
    }

    const detailsUpdates = {};
    if (phone     !== undefined) detailsUpdates.phone     = phone;
    if (dob       !== undefined) detailsUpdates.dob       = dob || null;
    if (addresses !== undefined) detailsUpdates.addresses = addresses;

    let updatedDetails = null;

    if (Object.keys(detailsUpdates).length > 0) {
        updatedDetails = await UserDetails.findOneAndUpdate(
            { userId },
            { $set: detailsUpdates },
            { new: true, upsert: true, runValidators: true }
        ).select("phone dob addresses");
    } else {
        updatedDetails = await UserDetails.findOne({ userId }).select("phone dob addresses");
    }

    return {
        name:      updatedUser.name,
        email:     updatedUser.email,
        role:      updatedUser.role,
        phone:     updatedDetails?.phone     ?? null,
        dob:       updatedDetails?.dob       ?? null,
        addresses: updatedDetails?.addresses ?? []
    };
};