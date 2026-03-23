/* EnterpriseShopSetup.jsx
 *
 * Create-shop form rendered for ENTERPRISE plan owners.
 * Currently mirrors BasicShopSetup — kept separate so Enterprise-specific
 * fields (e.g. multi-branch config, account manager, custom SLA, API keys)
 * can be added without touching Basic or Pro pages.
 *
 * Props:
 *   isRevealed {boolean}
 */
import { useCreateShop, CATEGORIES, CURRENCIES } from "./useCreateShop";

const base =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all bg-white text-[#143109] " +
    "placeholder:text-slate-300 border border-[rgba(20,49,9,0.12)] " +
    "focus:border-[#143109] focus:ring-2 focus:ring-[rgba(20,49,9,0.07)]";
const errBase =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all bg-white text-[#143109] " +
    "placeholder:text-slate-300 border border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-50";

const Card = ({ children }) => (
    <div
        className="rounded-2xl bg-white overflow-hidden"
        style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
    >
        {children}
    </div>
);

const Section = ({ title, icon, children }) => (
    <div>
        <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ borderBottom: "1px solid rgba(20,49,9,0.06)", background: "rgba(20,49,9,0.02)" }}
        >
            <span className="material-symbols-outlined text-[15px]" style={{ color: "rgba(20,49,9,0.4)" }}>{icon}</span>
            <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "rgba(20,49,9,0.35)" }}>
                {title}
            </p>
        </div>
        <div className="p-5 space-y-4">{children}</div>
    </div>
);

const Field = ({ label, error, required, children }) => (
    <div className="space-y-1.5">
        <label className="flex items-center gap-1 text-xs font-semibold" style={{ color: "rgba(20,49,9,0.5)" }}>
            {label}
            {required && <span className="text-red-400">*</span>}
        </label>
        {children}
        {error && (
            <p className="flex items-center gap-1 text-xs text-red-500">
                <span className="material-symbols-outlined text-[12px]">error</span>
                {error}
            </p>
        )}
    </div>
);

const EnterpriseShopSetup = ({ isRevealed }) => {
    const { form, errors, saving, apiError, handleChange, handleSubmit } = useCreateShop();

    return (
        <div
            className="transition-all duration-700"
            style={{
                filter: isRevealed ? "none" : "blur(6px)",
                pointerEvents: isRevealed ? "auto" : "none",
                userSelect: isRevealed ? "auto" : "none",
            }}
        >
            {/* Plan badge */}
            <div className="mb-2">
                <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold"
                    style={{ background: "rgba(139,92,246,0.1)", color: "#7c3aed" }}
                >
                    <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        corporate_fare
                    </span>
                    Enterprise Plan
                </span>
            </div>

            <div className="mb-7">
                <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>
                    Create Your Shop
                </h1>
                <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>
                    Set up your storefront — you can always edit this later.
                </p>
            </div>

            {apiError && (
                <div
                    className="mb-5 flex items-start gap-3 p-4 rounded-xl text-sm font-medium"
                    style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", color: "#dc2626" }}
                >
                    <span className="material-symbols-outlined text-[17px] mt-0.5 shrink-0">error</span>
                    {apiError}
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-lg">

                <Card>
                    <Section title="Shop Identity" icon="storefront">
                        <Field label="Shop Name" required error={errors.name}>
                            <input
                                type="text" name="name" value={form.name} onChange={handleChange}
                                placeholder="e.g. Custom Wear Studio" maxLength={80}
                                className={errors.name ? errBase : base}
                            />
                        </Field>
                        <Field label="Tagline" error={errors.tagline}>
                            <input
                                type="text" name="tagline" value={form.tagline} onChange={handleChange}
                                placeholder="A short line that describes your shop (optional)"
                                maxLength={120}
                                className={base}
                            />
                        </Field>
                        <Field label="Category" required error={errors.category}>
                            <select
                                name="category" value={form.category} onChange={handleChange}
                                className={`${errors.category ? errBase : base} appearance-none cursor-pointer`}
                            >
                                <option value="">Select a category…</option>
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </Field>
                    </Section>
                </Card>

                <Card>
                    <Section title="Preferences" icon="settings">
                        <Field label="Currency">
                            <select
                                name="currency" value={form.currency} onChange={handleChange}
                                className={`${base} appearance-none cursor-pointer`}
                            >
                                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                            </select>
                        </Field>
                        <Field label="Timezone">
                            <input type="text" name="timezone" value={form.timezone} onChange={handleChange} className={base} />
                        </Field>
                    </Section>
                </Card>

                {/* TODO — Enterprise-only fields go here in a future iteration:
            e.g. multi-branch configuration, dedicated account manager details,
            custom domain setup, API key generation, SLA preferences */}

                <button
                    type="submit" disabled={saving}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: "#143109" }}
                >
                    {saving && <span className="material-symbols-outlined text-[15px] animate-spin">progress_activity</span>}
                    {saving ? "Creating shop…" : "Launch My Shop →"}
                </button>

                <p className="text-center text-[10px]" style={{ color: "rgba(31,41,55,0.3)" }}>
                    By creating your shop you agree to our Terms of Service
                </p>

            </form>
        </div>
    );
};

export default EnterpriseShopSetup;