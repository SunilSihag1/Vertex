import { useState } from "react";

const field =
  "w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all bg-white text-[#143109] " +
  "placeholder:text-slate-300 border border-[rgba(20,49,9,0.12)] " +
  "focus:border-[#143109] focus:ring-3 focus:ring-[rgba(20,49,9,0.06)]";

const Card = ({ title, icon, children }) => (
  <div
    className="rounded-2xl bg-white overflow-hidden"
    style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
  >
    <div
      className="flex items-center gap-2.5 px-5 py-3"
      style={{ borderBottom: "1px solid rgba(20,49,9,0.06)", background: "rgba(20,49,9,0.02)" }}
    >
      <span className="material-symbols-outlined text-[16px]" style={{ color: "rgba(20,49,9,0.4)" }}>{icon}</span>
      <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "rgba(20,49,9,0.35)" }}>{title}</p>
    </div>
    <div className="p-5 space-y-4">{children}</div>
  </div>
);

const F = ({ label, children }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-semibold" style={{ color: "rgba(20,49,9,0.45)" }}>{label}</label>
    {children}
  </div>
);

export default function ShopProfile() {
  const [saving, setSaving] = useState(false);
  const [saved,  setSaved]  = useState(false);

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-lg">

      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Shop Profile</h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>Manage your shop identity and contact info.</p>
      </div>

      {saved && (
        <div
          className="mb-5 flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium"
          style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)", color: "#059669" }}
        >
          <span className="material-symbols-outlined text-[17px]">check_circle</span>
          Saved successfully.
        </div>
      )}

      <form onSubmit={save} className="space-y-4">

        {/* Brand header */}
        <Card title="Brand" icon="storefront">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div
                className="w-16 h-16 rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(20,49,9,0.1)" }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwBROJ6bU6Ob3tK-Z19W8YxMoZZcUujhRRZJS5dgwKGeLwWx3bK8Ag2iT3Z-tbuLgL5AP28w41fGjKACGpNP1EgZ8krygz8GZUf1IKBDilily9_oSezaeTkDypZU5XNq2ssVcAOJM7E_MrCRKAFN1ziGn7Sr-mZez2YP-3D_Q88qjmlMvMwjaK7QjYuFb1t42SgcTtJShWUJ6j8PH7HGqHwYOOSPzRkj5Iwx1hAoRkqxB_dnQcwHYCT_x8v4TNB0xwWac9mcc5YWm-"
                  alt="Logo" className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                style={{ background: "#143109" }}
              >
                <span className="material-symbols-outlined text-white text-[12px]">edit</span>
              </button>
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#143109" }}>Custom Wear Studio</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined text-amber-400 text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-semibold" style={{ color: "rgba(20,49,9,0.6)" }}>4.6</span>
                <span className="text-xs" style={{ color: "rgba(31,41,55,0.3)" }}>· 48 products · 120 orders</span>
              </div>
              <button type="button" className="text-xs font-semibold mt-1 transition-opacity hover:opacity-70" style={{ color: "#143109" }}>
                Upload new logo →
              </button>
            </div>
          </div>
        </Card>

        {/* Shop info */}
        <Card title="Shop Information" icon="info">
          <F label="Shop Name">
            <input type="text" defaultValue="Custom Wear Studio" className={field} />
          </F>
          <F label="Description">
            <textarea rows={3} className={`${field} resize-none`}
              defaultValue="At Custom Wear Studio, we believe every piece of clothing should tell a unique story."
            />
          </F>
          <div className="grid grid-cols-2 gap-3">
            <F label="Contact Email">
              <input type="email" defaultValue="hello@customwear.studio" className={field} />
            </F>
            <F label="Phone">
              <input type="tel" defaultValue="+1 (555) 234-8890" className={field} />
            </F>
          </div>
        </Card>

        {/* Address */}
        <Card title="Business Address" icon="location_on">
          <F label="Street Address">
            <input type="text" defaultValue="128 Fashion Way, Design District" className={field} />
          </F>
          <div className="grid grid-cols-3 gap-3">
            <F label="City"><input type="text" defaultValue="New York" className={field} /></F>
            <F label="State"><input type="text" defaultValue="NY" className={field} /></F>
            <F label="Country"><input type="text" defaultValue="United States" className={field} /></F>
          </div>
        </Card>

        {/* Social */}
        <Card title="Social Links" icon="share">
          {[
            { label: "Instagram", icon: "photo_camera", color: "#db2777", ph: "instagram.com/yourshop" },
            { label: "Facebook",  icon: "social_leaderboard", color: "#3b82f6", ph: "facebook.com/yourshop" },
            { label: "Website",   icon: "language", color: "rgba(20,49,9,0.4)", ph: "www.yourwebsite.com" },
          ].map(({ label, icon, color, ph }) => (
            <F key={label} label={label}>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[16px]" style={{ color }}>{icon}</span>
                <input type="text" placeholder={ph} className={`${field} pl-10`} />
              </div>
            </F>
          ))}
        </Card>

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ border: "1px solid rgba(20,49,9,0.15)", color: "#143109", background: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(20,49,9,0.04)"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            Cancel
          </button>
          <button
            type="submit" disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-50"
            style={{ background: "#143109" }}
          >
            {saving && <span className="material-symbols-outlined text-[15px] animate-spin">progress_activity</span>}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>

      </form>
    </div>
  );
}