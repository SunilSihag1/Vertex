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
import BasicShopSetup from "./BasicShopSetup";
import ProShopSetup from "./ProShopSetup";
import EnterpriseShopSetup from "./EnterpriseShopSetup";

/* Map URL ?plan= value → { component, label } */
const PLAN_MAP = {
    basic: { Component: BasicShopSetup, label: "Basic" },
    pro: { Component: ProShopSetup, label: "Pro" },
    enterprise: { Component: EnterpriseShopSetup, label: "Enterprise" },
};

const CreateShop = () => {
    const [searchParams] = useSearchParams();
    const [isRevealed, setRevealed] = useState(false);
    const [showModal, setModal] = useState(true);

    /* Resolve plan — default to "basic" if missing or unknown */
    const planKey = searchParams.get("plan")?.toLowerCase() ?? "basic";
    const planEntry = PLAN_MAP[planKey] ?? PLAN_MAP.basic;
    const { Component, label } = planEntry;

    const handleConfirm = () => {
        setModal(false);
        setRevealed(true);
    };

    return (
        <div
            className="min-h-screen px-5 sm:px-8 lg:px-16 py-12"
            style={{ background: "#f7f6f2" }}
        >
            {/* Blurred setup form — always rendered, blur controlled by isRevealed */}
            <Component isRevealed={isRevealed} />

            {/* Welcome modal — rendered on top while showModal is true */}
            {showModal && (
                <ShopOwnerWelcomeModal
                    planName={label}
                    onConfirm={handleConfirm}
                />
            )}
        </div>
    );
};

export default CreateShop;