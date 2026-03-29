/**
 * shopSetup.controller.js
 * Location: server/src/modules/shop/shopSetup.controller.js
 */

import mongoose from "mongoose";
import storeModel from "../store/store.model.js";
import ShopProfile from "./shopProfile.model.js";
import StaffInvitation from "./staffInvitation.model.js";
import User from "../auth/auth.model.js";
import sendEmail from "../../utils/sendEmail.js";

// ─── GET SETUP STATUS ─────────────────────────────────────────────────────────
/**
 * Returns the owner's current setup state.
 * Used by the frontend on every /create-shop load to decide:
 *  - Show welcome modal? (first time)
 *  - Resume from which step?
 *  - Redirect to dashboard? (already complete)
 */
export const getSetupStatus = async (req, res) => {
    try {
        const userId = req.user.userId;

        const store = await storeModel.findOne({ ownerId: userId });

        console.log(store);

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "No store found. Please purchase a plan first.",
            });
        }

        const profile = await ShopProfile.findOne({ storeId: store._id });

        console.log(profile)

        return res.status(200).json({
            success: true,
            data: {
                storeId: store._id,
                storeName: store.name,
                isSetupComplete: profile?.isSetupComplete ?? false,
                setupStep: profile?.setupStep ?? 1,
                hasProfile: !!profile,
            },
        });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// ─── SAVE SHOP PROFILE (Step 1) ───────────────────────────────────────────────
export const saveShopProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const store = await storeModel.findOne({ ownerId: userId });
        if (!store) {
            return res.status(404).json({ success: false, message: "Store not found" });
        }

        const {
            coverImageUrl,
            logoImageUrl,
            businessType,
            ownerDetails,
            contactInfo,
            operatingHours,
            address,
            socials,
        } = req.body;

        // Update the store's name/tagline/category too (they came from the same form)
        if (req.body.name) store.name = req.body.name.trim();
        if (req.body.tagline) store.tagline = req.body.tagline.trim();
        if (businessType) store.category = businessType;
        await store.save();

        // Upsert ShopProfile
        const profile = await ShopProfile.findOneAndUpdate(
            { storeId: store._id },
            {
                $set: {
                    storeId: store._id,
                    ownerId: userId,
                    coverImageUrl: coverImageUrl ?? null,
                    logoImageUrl: logoImageUrl ?? null,
                    businessType: businessType ?? "",
                    ownerDetails: ownerDetails ?? {},
                    contactInfo: contactInfo ?? {},
                    operatingHours: operatingHours ?? {},
                    address: address ?? {},
                    socials: socials ?? {},
                    setupStep: 2,   // advance to step 2
                },
            },
            { new: true, upsert: true, runValidators: true }
        );

        return res.status(200).json({ success: true, data: profile });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// ─── SAVE STAFF INVITATIONS (Step 2) ─────────────────────────────────────────
/**
 * Stores staff invitation records.
 * Emails are NOT sent here — they are sent when the owner
 * completes setup (Step 4 / completeSetup).
 * This way emails only go out for real, fully-created shops.
 */
export const saveStaffInvitations = async (req, res) => {
    try {
        const userId = req.user.userId;

        const store = await storeModel.findOne({ ownerId: userId });
        if (!store) {
            return res.status(404).json({ success: false, message: "Store not found" });
        }

        const { staffList = [], skip = false } = req.body;

        if (!skip && staffList.length > 0) {
            // Validate: max 20 invitations at once
            if (staffList.length > 20) {
                return res.status(400).json({
                    success: false,
                    message: "Maximum 20 staff members can be invited at once.",
                });
            }

            // Prepare invitation records (no emails yet)
            const invitations = staffList.map((s) => ({
                storeId: store._id,
                invitedBy: userId,
                name: s.name.trim(),
                email: s.email.trim().toLowerCase(),
                phone: s.phone?.trim() ?? "",
                jobTitle: s.jobTitle.trim(),
                address: s.address?.trim() ?? "",
                role: s.role ?? "staff",
                status: "pending",
                inviteToken: StaffInvitation.generateToken(),
                tokenExpiresAt: StaffInvitation.defaultExpiry(),
            }));

            // Use upsert-per-email to avoid duplicates if user saves twice
            for (const inv of invitations) {
                await StaffInvitation.findOneAndUpdate(
                    { storeId: store._id, email: inv.email },
                    { $set: inv },
                    { upsert: true, new: true }
                );
            }
        }

        // Advance setup step to 3
        await ShopProfile.findOneAndUpdate(
            { storeId: store._id },
            { $set: { setupStep: 3 } }
        );

        return res.status(200).json({ success: true, message: "Staff saved. Invitations will be sent after setup completes." });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// ─── SAVE FIRST PRODUCT (Step 3) — SKIPPABLE ─────────────────────────────────
export const advanceToComplete = async (req, res) => {
    try {
        const userId = req.user.userId;

        const store = await storeModel.findOne({ ownerId: userId });
        if (!store) {
            return res.status(404).json({ success: false, message: "Store not found" });
        }

        await ShopProfile.findOneAndUpdate(
            { storeId: store._id },
            { $set: { setupStep: 4 } }
        );

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// ─── COMPLETE SETUP (Step 4) ──────────────────────────────────────────────────
/**
 * Marks setup as complete.
 * Dispatches all pending staff invitation emails.
 * Updates the store's status to "active" (if was "trial", keep trial).
 * Updates user's role to "shop-owner".
 */
export const completeSetup = async (req, res) => {
    try {
        const userId = req.user.userId;

        const store = await storeModel.findOne({ ownerId: userId });
        if (!store) {
            return res.status(404).json({ success: false, message: "Store not found" });
        }

        // Mark setup complete
        await ShopProfile.findOneAndUpdate(
            { storeId: store._id },
            { $set: { setupStep: 4, isSetupComplete: true } }
        );

        // Promote user role to shop-owner
        await User.findByIdAndUpdate(userId, { $set: { role: "shop-owner" } });

        // Dispatch pending invitations (best-effort — don't fail the request if email fails)
        const pending = await StaffInvitation.find({
            storeId: store._id,
            status: "pending",
        });

        const baseUrl = process.env.CLIENT_URL ?? "http://localhost:5173";
        const ownerUser = await User.findById(userId).select("name");
        const ownerName = ownerUser?.name ?? "A shop owner";

        for (const inv of pending) {
            try {
                const acceptUrl = `${baseUrl}/accept-invite?token=${inv.inviteToken}`;

                await sendEmail(
                    inv.email,
                    `${ownerName} invited you to join ${store.name} on Vertex`,
                    `Hi ${inv.name},\n\n` +
                    `${ownerName} has invited you to join their store "${store.name}" on Vertex as a ${inv.jobTitle}.\n\n` +
                    `Click the link below to create your account:\n${acceptUrl}\n\n` +
                    `This invitation expires in 7 days.\n\n` +
                    `If you did not expect this invitation, you can safely ignore this email.\n\n` +
                    `— The Vertex Team`
                );

                inv.status = "sent";
                inv.emailSentAt = new Date();
                await inv.save();

            } catch (emailErr) {
                inv.emailError = emailErr.message;
                await inv.save();
                // Non-fatal — continue with other invitations
            }
        }

        return res.status(200).json({
            success: true,
            message: "Setup complete. Invitation emails dispatched.",
        });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};