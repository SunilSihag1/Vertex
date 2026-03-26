/* CreateShop.jsx  (/create-shop)
 *
 * Route: /create-shop?plan=basic | pro | enterprise
 *
 * Flow:
 *  1. Page mounts → isRevealed = false → entire setup is blurred
 *  2. ShopOwnerWelcomeModal is shown on top
 *  3. User clicks "Create My Shop" in modal
 *     → modal closes + isRevealed = true → blur removed
 *  4. User fills the form and submits → navigated to /settings/shop-profile
 */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShopOwnerWelcomeModal from "../../components/shop/ShopOwnerWelcomeModal";
import ShopSetup from "./shopSetup";

/* Map URL ?plan= value → { component, label } */
const PLAN_MAP = {
    basic: { Component: ShopSetup, label: "Basic" }
    // pro: { Component: ProShopSetup, label: "Pro" },
    // enterprise: { Component: EnterpriseShopSetup, label: "Enterprise" },
};

const CreateShop = () => {
    const [searchParams] = useSearchParams();
    const [isRevealed, setRevealed] = useState(false);
    const [showModal, setModal] = useState(true);

    // Optional: still read plan (for display only)
    const planKey = searchParams.get("plan")?.toLowerCase() ?? "basic";

    const handleConfirm = () => {
        setModal(false);
        setRevealed(true);
    };

    return (
        <div
            className="min-h-screen"
            style={{ background: "#f7f6f2" }}
        >
            {/* ✅ Always same component */}
            <ShopSetup isRevealed={isRevealed} plan={planKey} />

            {showModal && (
                <ShopOwnerWelcomeModal
                    planName={planKey}
                    onConfirm={handleConfirm}
                />
            )}
        </div>
    );
};

export default CreateShop;