import { useState, useEffect } from "react";
import api from "../../../service/api";

const PHONE_RE = /^\+?[1-9]\d{6,14}$/;

/* ── Design tokens ────────────────────────────────────────── */
const fieldBase =
  "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 " +
  "bg-white text-[#143109] placeholder:text-slate-300 " +
  "dark:bg-[#143109]/20 dark:text-[#b5bfa1] dark:placeholder:text-slate-600";

const fieldNormal = `${fieldBase} border border-[rgba(20,49,9,0.12)] focus:border-[#143109] focus:ring-3 focus:ring-[rgba(20,49,9,0.06)]`;
const fieldErr    = `${fieldBase} border border-red-300 focus:border-red-400 focus:ring-3 focus:ring-red-50`;

/* ── Sub-components ───────────────────────────────────────── */
const PageHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>{title}</h1>
    <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>{subtitle}</p>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl bg-white overflow-hidden ${className}`}
    style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
  >
    {children}
  </div>
);

const CardSection = ({ title, children }) => (
  <div>
    <div
      className="px-5 py-3 flex items-center gap-2"
      style={{ borderBottom: "1px solid rgba(20,49,9,0.06)", background: "rgba(20,49,9,0.02)" }}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "rgba(20,49,9,0.35)" }}>
        {title}
      </p>
    </div>
    <div className="p-5 space-y-4">{children}</div>
  </div>
);

const Field = ({ label, icon, error, children }) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "rgba(20,49,9,0.5)" }}>
      <span className="material-symbols-outlined text-[13px]">{icon}</span>
      {label}
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

const Feedback = ({ type, msg }) => (
  <div
    className="mb-6 flex items-start gap-3 p-4 rounded-xl text-sm font-medium"
    style={
      type === "success"
        ? { background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)", color: "#059669" }
        : { background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", color: "#dc2626" }
    }
  >
    <span className="material-symbols-outlined text-[17px] mt-0.5 shrink-0">
      {type === "success" ? "check_circle" : "error"}
    </span>
    {msg}
  </div>
);

/* ── Main ─────────────────────────────────────────────────── */
export default function EditProfile() {
  const [form,     setForm]     = useState({ name: "", email: "", phone: "", dob: "" });
  const [loading,  setLoading]  = useState(true);
  const [saving,   setSaving]   = useState(false);
  const [errors,   setErrors]   = useState({});
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        });
        const { name, email, phone, dob } = res.data.data;
        setForm({
          name:  name  ?? "",
          email: email ?? "",
          phone: phone ?? "",
          dob:   dob ? new Date(dob).toISOString().split("T")[0] : "",
        });
      } catch {
        setFeedback({ type: "error", msg: "Could not load profile. Please refresh." });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm(p => ({ ...p, [name]: value }));
    setErrors(p => ({ ...p, [name]: undefined }));
    setFeedback(null);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())                            e.name  = "Name is required.";
    if (form.phone && !PHONE_RE.test(form.phone))     e.phone = "Use international format e.g. +919876543210.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    try {
      setSaving(true);
      await api.put("/profile",
        { name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim() || null, dob: form.dob || null },
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
      );
      setFeedback({ type: "success", msg: "Profile updated successfully." });
    } catch (err) {
      setFeedback({ type: "error", msg: err.response?.data?.message ?? "Failed to update profile." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-lg space-y-5 animate-pulse">
        <div className="h-7 rounded-xl w-40" style={{ background: "rgba(20,49,9,0.07)" }} />
        <div className="h-4 rounded-lg w-64" style={{ background: "rgba(20,49,9,0.05)" }} />
        {[1,2,3,4].map(n => <div key={n} className="h-12 rounded-xl" style={{ background: "rgba(20,49,9,0.05)" }} />)}
      </div>
    );
  }

  return (
    <div className="max-w-lg">
      <PageHeader title="Edit Profile" subtitle="Keep your personal information current." />
      {feedback && <Feedback type={feedback.type} msg={feedback.msg} />}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* Avatar */}
        <Card>
          <div className="p-5 flex items-center gap-5">
            <div
              className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(20,49,9,0.08)", border: "2px solid rgba(20,49,9,0.1)" }}
            >
              <span
                className="material-symbols-outlined text-3xl"
                style={{ color: "#143109", fontVariationSettings: "'FILL' 1" }}
              >
                storefront
              </span>
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#143109" }}>
                {form.name || "Your Name"}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(31,41,55,0.4)" }}>
                {form.email || "your@email.com"}
              </p>
            </div>
          </div>
        </Card>

        {/* Personal info */}
        <Card>
          <CardSection title="Personal Information">
            <Field label="Full Name" icon="person" error={errors.name}>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Jane Doe" maxLength={80} required
                className={errors.name ? fieldErr : fieldNormal}
              />
            </Field>
            <Field label="Email Address" icon="mail" error={errors.email}>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="jane@company.com"
                className={errors.email ? fieldErr : fieldNormal}
              />
            </Field>
          </CardSection>
          <CardSection title="Additional Details">
            <Field label="Phone Number" icon="phone" error={errors.phone}>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="+91 98765 43210"
                className={errors.phone ? fieldErr : fieldNormal}
              />
            </Field>
            <Field label="Date of Birth" icon="cake" error={errors.dob}>
              <input type="date" name="dob" value={form.dob} onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className={errors.dob ? fieldErr : fieldNormal}
              />
            </Field>
          </CardSection>
        </Card>

        {/* Actions */}
        <div className="pt-1">
          <button
            type="submit" disabled={saving}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-sm font-bold text-white shadow-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
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