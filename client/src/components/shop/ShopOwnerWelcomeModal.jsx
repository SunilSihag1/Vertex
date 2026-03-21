/* ShopOwnerWelcomeModal.jsx
 *
 * Props:
 *   planName  {string}   — "Basic" | "Pro" | "Enterprise"
 *   onConfirm {function} — called when user clicks "Create My Shop"
 */

const PLAN_META = {
    Basic: { color: "#143109", badge: "bg-[#143109]/10 text-[#143109]", emoji: "🌱" },
    Pro: { color: "#143109", badge: "bg-amber-50 text-amber-700", emoji: "⚡" },
    Enterprise: { color: "#143109", badge: "bg-purple-50 text-purple-700", emoji: "🏢" },
};

const ShopOwnerWelcomeModal = ({ planName = "Basic", onConfirm }) => {
    const meta = PLAN_META[planName] ?? PLAN_META.Basic;

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
        >
            {/* Card */}
            <div
                className="w-full max-w-md rounded-3xl bg-white overflow-hidden"
                style={{ boxShadow: "0 24px 80px rgba(20,49,9,0.22)" }}
            >
                {/* Top green strip */}
                <div
                    className="relative overflow-hidden px-8 pt-10 pb-8 text-center"
                    style={{ background: "#143109" }}
                >
                    {/* Grain overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                            backgroundSize: "180px",
                        }}
                    />

                    {/* Icon */}
                    <div
                        className="relative inline-flex w-20 h-20 rounded-3xl items-center justify-center mb-5 mx-auto"
                        style={{ background: "rgba(181,191,161,0.15)", border: "1.5px solid rgba(181,191,161,0.2)" }}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 40, color: "#b5bfa1", fontVariationSettings: "'FILL' 1" }}
                        >
                            storefront
                        </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                        You&apos;re now a<br />Shop Owner! {meta.emoji}
                    </h2>
                    <p className="mt-2 text-sm" style={{ color: "rgba(181,191,161,0.7)" }}>
                        Payment successful · Your trial has started
                    </p>

                    {/* Plan badge */}
                    <span
                        className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: "rgba(181,191,161,0.15)", color: "#b5bfa1", border: "1px solid rgba(181,191,161,0.2)" }}
                    >
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                        </span>
                        {planName} Plan Activated
                    </span>
                </div>

                {/* Bottom content */}
                <div className="px-8 py-7">
                    <p className="text-sm text-center leading-relaxed" style={{ color: "rgba(31,41,55,0.6)" }}>
                        Set up your branded storefront in minutes. Add your shop name, category, and start selling.
                    </p>

                    {/* Feature bullets */}
                    <div className="mt-5 space-y-2.5">
                        {[
                            "Personalized shop URL",
                            "Inventory management dashboard",
                            "Sales analytics & reporting",
                        ].map(f => (
                            <div key={f} className="flex items-center gap-2.5">
                                <span
                                    className="material-symbols-outlined text-[15px] shrink-0"
                                    style={{ color: "#143109", fontVariationSettings: "'FILL' 1" }}
                                >
                                    check_circle
                                </span>
                                <span className="text-xs font-medium" style={{ color: "rgba(31,41,55,0.65)" }}>{f}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={onConfirm}
                        className="w-full mt-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all active:scale-[0.98] hover:opacity-90"
                        style={{ background: "#143109" }}
                    >
                        Create My Shop →
                    </button>

                    <p className="text-center text-[10px] mt-3 font-medium" style={{ color: "rgba(31,41,55,0.3)" }}>
                        You can update these details anytime in Settings
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShopOwnerWelcomeModal;