import * as profileService from "./profile.service.js";

/* =========================
   GET PROFILE
========================= */
export const getProfile = async (req, res) => {
    try {
        const profile = await profileService.getUserProfile(req.user.userId);

        return res.status(200).json({
            success: true,
            data: profile
        });
    } catch (err) {
        if (err.message === "User not found") {
            return res.status(404).json({ success: false, message: err.message });
        }
        return res.status(500).json({ success: false, message: "Failed to fetch profile" });
    }
};


/* =========================
   UPDATE PROFILE
========================= */
export const updateProfile = async (req, res) => {
    try {
        const { name, email, phone, dob, addresses } = req.body;

        const updated = await profileService.updateUserProfile(req.user.userId, {
            name,
            email,
            phone,
            dob,
            addresses
        });

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: updated
        });

    } catch (err) {
        if (err.message === "User not found") {
            return res.status(404).json({ success: false, message: err.message });
        }
        if (err.message === "Email is already in use by another account") {
            return res.status(409).json({ success: false, message: err.message });
        }
        return res.status(500).json({ success: false, message: "Failed to update profile" });
    }
};