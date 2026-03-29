import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../service/api";

import ShopOwnerWelcomeModal from "../../components/shop/ShopOwnerWelcomeModal";
import ShopProfileStep from "./steps/shopProfileStep";
import StaffStep from "./steps/StaffStep";
import CompleteStep from "./steps/Completestep";

// ─── Step metadata (3 steps only, Products removed) ───────────────────────────
const STEPS = [
    { id: 1, label: "Shop Profile" },
    { id: 2, label: "Team" },
    { id: 3, label: "Complete" },   // ✅ Bug 1 Fix: id was 4, now 3
];

const welcomeModalKey = (userId) => `vertex_welcome_shown_${userId}`;

const CreateShop = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { user } = useAuth();

    const planKey = searchParams.get("plan")?.toLowerCase() ?? "basic";
    const planName = planKey.charAt(0).toUpperCase() + planKey.slice(1);

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentStep, setStep] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [storeId, setStoreId] = useState(null);

    const fetchStatus = useCallback(async () => {
        try {
            const res = await api.get("/shop-setup/status");
            const data = res.data.data;

            setStatus(data);
            setStoreId(data.storeId);

            if (data.isSetupComplete) {
                navigate("/", { replace: true });
                return;
            }

            // ✅ Bug 3 Fix: server step 3 (Products) aur 4 (Complete) dono → UI step 3
            const serverStep = data.setupStep ?? 1;
            const uiStep = serverStep >= 3 ? 3 : serverStep;
            setStep(uiStep);

            if (user?.userId) {
                const key = welcomeModalKey(user.userId);
                const alreadyShown = localStorage.getItem(key);
                if (!alreadyShown) {
                    setShowModal(true);
                    localStorage.setItem(key, "1");
                }
            }
        } catch (err) {
            console.error("[CreateShop] status fetch failed:", err.message);
        } finally {
            setLoading(false);
        }
    }, [navigate, user]);

    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    const onStepComplete = (nextStep) => {
        setStep(nextStep);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: "#f7f6f2" }}>
                <div className="flex flex-col items-center gap-4">
                    <div className="size-10 rounded-full border-4 border-[#143109]/20 border-t-[#143109] animate-spin" />
                    <p className="text-sm font-medium text-[#143109]/50">Loading your setup…</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* ── Progress bar ─────────────────────────────────────────────────── */}
            <div className="sticky top-20 z-20 w-full px-6 lg:px-16 py-4 pt-10 space-y-8 bg-primary dark:bg-sage">
                <div className="max-w-3xl mx-auto space-y-3">
                    <div className="flex items-center justify-between">
                        {/* ✅ Bug 3 Fix: Step count correctly shows X / 3 always */}
                        <span className="text-label-sm font-bold tracking-widest uppercase text-sage dark:text-primary opacity-60">
                            Step {currentStep} / {STEPS.length}
                        </span>
                        <span className="text-label-sm font-semibold text-sage dark:text-primary underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity">
                            Need Help?
                        </span>
                    </div>

                    {/* ✅ Bug 2 Fix: grid-cols-4 → grid-cols-3 (3 steps hain) */}
                    <div className="grid grid-cols-3 gap-4">
                        {STEPS.map((step) => {
                            const done = currentStep > step.id;
                            const active = currentStep === step.id;
                            return (
                                <div key={step.id} className="space-y-3">
                                    <div
                                        className={`h-1.5 rounded-full ${
                                            done
                                                ? "bg-sage dark:bg-primary"
                                                : active
                                                // ✅ Bug 4 Fix: bg-linear-to-r → bg-gradient-to-r
                                                ? "bg-linear-to-r from-sage to-sage/40 dark:from-primary/40 dark:to-primary"
                                                : "bg-background-light/70"
                                        }`}
                                    />
                                    {/* ✅ Bug (original): hardcoded "Shop Profile" → step.label */}
                                    <p className={`text-[11px] font-bold uppercase tracking-wider ${
                                        done || active
                                            ? "text-sage dark:text-primary"
                                            : "text-sage/30 dark:text-primary/30"
                                    }`}>
                                        {step.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Step content ─────────────────────────────────────────────────── */}
            <main className="flex-1 px-6 lg:px-16 py-10">
                <div className="max-w-3xl mx-auto">

                    {currentStep === 1 && (
                        <ShopProfileStep
                            storeId={storeId}
                            onComplete={() => onStepComplete(2)}
                        />
                    )}

                    {currentStep === 2 && (
                        <StaffStep
                            storeId={storeId}
                            // ✅ Bug 1 Fix: onStepComplete(3) tha lekin step 3 render
                            // nahi hota tha (sirf 4 tha). Ab id=3 → CompleteStep
                            onComplete={() => onStepComplete(3)}
                            onSkip={() => onStepComplete(3)}
                        />
                    )}

                    {currentStep === 3 && (
                        <CompleteStep storeId={storeId} />
                    )}

                </div>
            </main>

            {/* ── Welcome modal (shows once) ────────────────────────────────────── */}
            {showModal && (
                <ShopOwnerWelcomeModal
                    planName={planName}
                    onConfirm={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default CreateShop;