import { useState, useEffect } from "react";
import api from "../../../service/api";

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
const PHONE_REGEX = /^\+?[1-9]\d{6,14}$/;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  dob: ""
};

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
function EditProfile() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);   // page-load fetch
  const [saving, setSaving] = useState(false);  // PUT in-flight
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  /* ── 1. Pre-fill on mount ──────────────────────────────── */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get("/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
        });

        const { name, email, phone, dob } = res.data.data;

        setForm({
          name: name ?? "",
          email: email ?? "",
          phone: phone ?? "",
          // Convert ISO date to "yyyy-MM-dd" for <input type="date">
          dob: dob ? new Date(dob).toISOString().split("T")[0] : "",
        });

      } catch (err) {
        setError(err.response?.data?.message ?? "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  /* ── 2. Controlled input handler ───────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear stale feedback when the user starts editing
    setError(null);
    setSuccess(null);
  };

  /* ── 3. Client-side validation ─────────────────────────── */
  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (form.phone && !PHONE_REGEX.test(form.phone))
      return "Phone must be in a valid format (e.g. +919876543210).";
    return null;
  };

  /* ── 4. Submit ─────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setSaving(true);
      setError(null);
      setSuccess(null);

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        dob: form.dob || null
      };

      const res = await api.put("/profile", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
      });

      setSuccess(res.data.message ?? "Profile updated successfully.");
    } catch (err) {
      setError(err.response?.data?.message ?? "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  /* ── 5. Render ─────────────────────────────────────────── */
  if (loading) {
    return (
      <main className="flex-grow flex items-center justify-center p-6">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary">
          progress_activity
        </span>
      </main>
    );
  }

  return (
    <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-2xl bg-white dark:bg-primary/30 rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-primary px-8 py-6">
          <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
          <p className="text-sage/70 text-sm mt-1">
            Update your personal information below.
          </p>
        </div>

        {/* Form */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit} noValidate>

          {/* Feedback banners */}
          {error && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 text-sm">
              <span className="material-symbols-outlined text-xl flex-shrink-0">error</span>
              {error}
            </div>
          )}

          {success && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 text-sm">
              <span className="material-symbols-outlined text-xl flex-shrink-0">check_circle</span>
              {success}
            </div>
          )}

          {/* Name */}
          <Field label="Full Name" icon="person" required>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              className={inputClass}
            />
          </Field>

          {/* Email */}
          <Field label="Email Address" icon="mail">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={inputClass}
            />
          </Field>

          {/* Phone */}
          <Field label="Phone Number" icon="phone">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+919876543210"
              className={inputClass}
            />
          </Field>

          {/* Date of Birth */}
          <Field label="Date of Birth" icon="cake">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className={inputClass}
            />
          </Field>

          

          {/* Submit */}
          <button
            type="submit"
            disabled={saving}
            className="w-full shimmer-btn bg-primary text-white py-3.5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>

        </form>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */
const inputClass =
  "w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-primary/50 border-none rounded-lg " +
  "ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary " +
  "dark:focus:ring-slate-500 transition-all outline-none text-primary dark:text-sage " +
  "placeholder:text-primary/40 dark:placeholder:text-sage/40";

function Field({ label, icon, required = false, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-primary dark:text-slate-300 ml-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative group">
        <span className="material-symbols-outlined absolute left-4 top-3.5 text-primary/60 dark:text-sage/50 group-focus-within:text-primary dark:group-focus-within:text-sage transition-colors">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

export default EditProfile;