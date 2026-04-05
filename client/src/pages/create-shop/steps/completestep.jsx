/**
 * CompleteStep.jsx
 * Location: client/src/pages/create-shop/steps/CompleteStep.jsx
 *
 * Step 4 — Final step.
 * Calls POST /api/shop-setup/complete which:
 *   - Marks setup as complete in DB
 *   - Updates user role to "shop-owner"
 *   - Dispatches all pending staff invitation emails
 * Then redirects to the dashboard (/settings/shop-profile or /).
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";

const CHECKLIST = [
    { icon: "storefront", text: "Shop profile created" },
    { icon: "group", text: "Team invitations queued" },
    { icon: "inventory_2", text: "First product added (or skipped)" },
    { icon: "bar_chart_4_bars", text: "Analytics dashboard ready" },
    { icon: "receipt_long", text: "GST-ready invoice engine active" },
];

const CompleteStep = () => {
    const navigate = useNavigate();

    const [completing, setCompleting] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(null);

    // ── Auto-call complete on mount ────────────────────────────────────────────
    useEffect(() => {
        const finish = async () => {
            try {
                setCompleting(true);
                await api.post("/shop-setup/complete");
                setDone(true);
            } catch (err) {
                setError(err.response?.data?.message ?? "Something went wrong. Please try again.");
            } finally {
                setCompleting(false);
            }
        };
        finish();
    }, []);

    const goToDashboard = () => {
        // Force a full reload so AuthContext refreshes the user's new role
        window.location.href = "/dashboard";
    };

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 text-center">

            {/* ── Completing spinner ─────────────────────────────────────────── */}
            {completing && (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-4 border-[#143109]/15 border-t-[#143109] animate-spin" />
                    <p className="text-sm font-medium text-[rgba(20,49,9,0.5)]">Finalising your shop…</p>
                </div>
            )}

            {/* ── Error state ────────────────────────────────────────────────── */}
            {error && !completing && (
                <div className="max-w-md w-full">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm mb-6 text-left">
                        <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
                        {error}
                    </div>
                    <button
                        onClick={() => { setError(null); window.location.reload(); }}
                        className="px-8 py-3.5 rounded-xl font-bold text-sm text-white"
                        style={{ background: "#143109" }}
                    >
                        Try Again
                    </button>
                </div>
            )}

            {/* ── Success state ──────────────────────────────────────────────── */}
            {done && !error && (
                <div className="max-w-md w-full">

                    {/* Checkmark animation */}
                    <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                        style={{ background: "#143109" }}
                    >
                        <span
                            className="material-symbols-outlined text-4xl text-sage"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            check_circle
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold text-[#143109] tracking-tight mb-3">
                        Your Shop is Ready! 🎉
                    </h2>
                    <p className="text-[rgba(31,41,55,0.5)] text-base leading-relaxed mb-10">
                        Everything's been saved. You can update any of these details
                        anytime from your Settings dashboard.
                    </p>

                    {/* Checklist */}
                    <div
                        className="rounded-2xl bg-white p-5 mb-8 text-left"
                        style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.03)" }}
                    >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[rgba(20,49,9,0.35)] mb-4">
                            What's been set up
                        </p>
                        <div className="space-y-3">
                            {CHECKLIST.map((item) => (
                                <div key={item.text} className="flex items-center gap-3">
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                        style={{ background: "rgba(20,49,9,0.07)" }}
                                    >
                                        <span className="material-symbols-outlined text-[14px] text-[#143109]">{item.icon}</span>
                                    </div>
                                    <p className="text-sm text-[rgba(31,41,55,0.7)]">{item.text}</p>
                                    <span
                                        className="ml-auto material-symbols-outlined text-sm text-emerald-500"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        check_circle
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-[rgba(31,41,55,0.35)] mb-8 leading-relaxed">
                        Don't worry about the details you've filled in — you can edit them anytime from
                        <strong className="text-[#143109]"> Settings → Shop Profile</strong>.
                    </p>

                    {/* CTA */}
                    <button
                        onClick={goToDashboard}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-lg"
                        style={{ background: "#143109", boxShadow: "0 8px 24px rgba(20,49,9,0.25)" }}
                    >
                        Go to Dashboard
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CompleteStep;