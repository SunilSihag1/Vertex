/* CreateShop.jsx  (/create-shop)
 *
 * Route: /create-shop?plan=basic | pro | enterprise
 */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShopOwnerWelcomeModal from "../../components/shop/ShopOwnerWelcomeModal";
// BUG FIX: was `./shopSetup` — wrong casing, fails on Linux (case-sensitive FS)
import ShopSetup from "./shopSetup";

const CreateShop = () => {
    const [searchParams] = useSearchParams();
    const [isRevealed, setRevealed] = useState(false);
    const [showModal, setModal]     = useState(true);

    const planKey = searchParams.get("plan")?.toLowerCase() ?? "basic";

    const handleConfirm = () => {
        setModal(false);
        setRevealed(true);
    };

    return (
        <div className="min-h-screen" style={{ background: "#f7f6f2" }}>
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