/**
 * StaffStep.jsx
 * Location: client/src/pages/create-shop/steps/StaffStep.jsx
 *
 * Step 2 of shop setup.
 * - Shows owner card (pre-filled, non-editable here)
 * - "Add Staff Member" button opens a modal form
 * - Staff list builds up; can remove before saving
 * - "Skip for now" button advances without saving any staff
 * - On Save & Continue → POST /api/shop-setup/staff
 * - Invitation emails are only sent when completeSetup() is called in Step 4
 */

import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../service/api";

// ─── Job titles (common retail roles) ─────────────────────────────────────────

const JOB_TITLES = [
    "Store Manager",
    "Assistant Manager",
    "Cashier",
    "Sales Associate",
    "Inventory Staff",
    "Accountant",
    "Security",
    "Delivery Executive",
    "Customer Support",
    "Other",
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

const fieldCls =
    "w-full bg-background-light dark:bg-[#112b08] border border-[rgba(20,49,9,0.12)] rounded-xl p-3 text-sm " +
    "outline-none text-primary dark:text-sage placeholder:text-primary/50 dark:placeholder:text-sage/50 " +
    "focus:border-[#143109] focus:ring-2 focus:ring-[rgba(20,49,9,0.06)] transition-all";

const errCls =
    "w-full bg-background-light dark:bg-[#112b08] border border-red-300 rounded-xl p-3 text-sm " +
    "outline-none text-primary dark:text-sage placeholder:text-primary/50 dark:placeholder:text-sage/50 " +
    "focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all";

const F = ({ label, required, error, children }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-primary dark:text-sage">
            {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {children}
        {error && (
            <p className="text-xs text-red-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {error}
            </p>
        )}
    </div>
);

// ─── Empty staff form ─────────────────────────────────────────────────────────

const EMPTY_STAFF = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    address: "",
    role: "staff",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Staff Invitation Modal ────────────────────────────────────────────────────

const AddStaffModal = ({ onAdd, onClose }) => {
    const [form, setForm] = useState(EMPTY_STAFF);
    const [errors, setErrors] = useState({});

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        setErrors((p) => ({ ...p, [name]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required.";
        if (!form.email.trim()) e.email = "Email is required.";
        else if (!EMAIL_RE.test(form.email)) e.email = "Enter a valid email.";
        if (!form.jobTitle) e.jobTitle = "Job title is required.";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        onAdd({ ...form, email: form.email.toLowerCase().trim() });
    };

    const backdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
            onClick={backdropClick}
        >
            <div
                className="w-full max-w-md rounded-2xl bg-background-light dark:bg-background-dark overflow-hidden"
                style={{ boxShadow: "0 24px 60px rgba(20,49,9,0.18)" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(20,49,9,0.07)]">
                    <div>
                        <h3 className="text-base font-bold text-primary dark:text-sage">Add Staff Member</h3>
                        <p className="text-xs text-primary/50 dark:text-sage/50 mt-0.5">An invitation email will be sent when setup is complete.</p>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-200 transition-colors text-red-500 cursor-pointer">
                        <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <F label="Full Name" required error={errors.name}>
                            <input name="name" value={form.name} onChange={handleChange}
                                placeholder="Full Name" className={errors.name ? errCls : fieldCls} />
                        </F>
                        <F label="Job Title" required error={errors.jobTitle}>
                            <select name="jobTitle" value={form.jobTitle} onChange={handleChange}
                                className={errors.jobTitle ? `${errCls} appearance-none` : `${fieldCls} appearance-none`}>
                                <option value="">Select title</option>
                                {JOB_TITLES.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </F>
                    </div>

                    <F label="Email Address" required error={errors.email}>
                        <input name="email" value={form.email} onChange={handleChange}
                            type="email" placeholder="jane@email.com"
                            className={errors.email ? errCls : fieldCls} />
                    </F>

                    <F label="Phone Number" hint="optional">
                        <input name="phone" value={form.phone} onChange={handleChange}
                            type="tel" placeholder="+91 XXXXXXXXXX" className={fieldCls} />
                    </F>

                    <F label="Address" hint="optional">
                        <textarea name="address" value={form.address} onChange={handleChange}
                            rows={2} placeholder="Home address of the staff member"
                            className={`${fieldCls} resize-none`} />
                    </F>

                    {/* Role mapping info */}
                    <div
                        className="flex items-start gap-2 p-3 rounded-xl text-xs bg-primary/10 dark:bg-sage/10 border border-primary/50 dark:border-sage/50 "
                    >
                        <span className="material-symbols-outlined text-sm text-primary dark:text-sage shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                        <p className="text-primary/70 dark:text-sage/70">
                            This staff member will receive an email invitation to create their Vertex account.
                            Their access level will be based on their job title.
                        </p>
                    </div>

                    <div className="flex gap-3 pt-1">
                        <button type="button" onClick={onClose}
                            className="flex-1 py-3 rounded-xl border border-[rgba(20,49,9,0.15)] text-primary dark:text-sage text-sm font-semibold bg-primary/10 dark:bg-sage/10 hover:bg-primary/20 dark:hover:bg-sage/20 transition-colors cursor-pointer">
                            Cancel
                        </button>
                        <button type="submit"
                            className="flex-1 py-3 rounded-xl text-sm font-bold shimmer-btn text-white bg-primary transition-all shadow-primary/30 active:scale-[0.98] hover:scale-105 cursor-pointer">
                            Add to List
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// ─── Staff Card ────────────────────────────────────────────────────────────────

const StaffCard = ({ member, onRemove, isOwner = false }) => (
    <div
        className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 dark:bg-sage"
        style={{
            border: isOwner
                ? "2px solid rgba(20,49,9,0.2)"
                : "1px solid rgba(20,49,9,0.08)",
            boxShadow: "0 1px 6px rgba(20,49,9,0.03)",
        }}
    >
        {/* Avatar */}
        <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
            style={{
                background: isOwner ? "#143109" : "rgba(20,49,9,0.3)",
                color: isOwner ? "#b5bfa1" : "#143109",
            }}
        >
            {member.name.charAt(0).toUpperCase()}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
                <p className="text-sm font-extrabold text-primary truncate">{member.name}</p>
                {isOwner && (
                    <span
                        className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/80 text-background-light"
                    >
                        Owner
                    </span>
                )}
            </div>
            <p className="text-xs text-primary/50 truncate">{member.email}</p>
            {member.jobTitle && (
                <p className="text-[10px] font-semibold text-primary/70 mt-0.5">{member.jobTitle}</p>
            )}
        </div>

        {/* Remove (only for non-owner) */}
        {!isOwner && onRemove && (
            <button
                onClick={onRemove}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-red-400 hover:text-red-800 transition-colors shrink-0 cursor-pointer"
            >
                <span className="material-symbols-outlined text-sm">delete</span>
            </button>
        )}
    </div>
);

// ─── Main StaffStep ────────────────────────────────────────────────────────────

const StaffStep = ({ onComplete, onSkip }) => {
    const { user } = useAuth();

    const [staffList, setStaffList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [saving, setSaving] = useState(false);
    const [isFixed, setIsFixed] = useState(true);
    const [apiError, setApiError] = useState(null);
    const sentinelRef = useRef(null);

    const ownerCard = {
        name: user?.name ?? "You (Owner)",
        email: user?.email ?? "",
        jobTitle: "Store Owner",
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsFixed(!entry.isIntersecting),
            { threshold: 0 }
        );
        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    const handleAdd = (staff) => {
        setStaffList((p) => [...p, staff]);
        setShowModal(false);
    };

    const handleRemove = (index) => {
        setStaffList((p) => p.filter((_, i) => i !== index));
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            setApiError(null);

            await api.post("/shop-setup/staff", {
                staffList,
                skip: false,
            });

            onComplete();

        } catch (err) {
            setApiError(err.response?.data?.message ?? "Failed to save. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleSkip = async () => {
        try {
            await api.post("/shop-setup/staff", { skip: true });
            onSkip();
        } catch {
            onSkip(); // non-fatal skip
        }
    };

    return (
        <div className="pb-32">

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Your Team</h2>
                <p className="mt-1 text-sm text-primary/70 dark:text-sage/70">
                    Add your staff members now or skip and do it later from the dashboard.
                    They'll receive email invitations once your shop is set up.
                </p>
            </div>

            {/* Staff list */}
            <div className="space-y-3 mb-6">

                {/* Owner card — always first */}
                <StaffCard member={ownerCard} isOwner />

                {/* Added staff */}
                {staffList.map((s, i) => (
                    <StaffCard
                        key={`${s.email}-${i}`}
                        member={s}
                        onRemove={() => handleRemove(i)}
                    />
                ))}

                {/* Add button */}
                {staffList.length < 20 && (
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold transition-all  border-2 border-dashed border-sage dark:border-sage/20 text-sage dark:text-sage/20 cursor-pointer"
                        onMouseEnter={(e) => {
                            if (document.documentElement.classList.contains("dark")) {
                                e.currentTarget.style.borderColor = "#b5bfa1";
                                e.currentTarget.style.color = "#b5bfa1";
                            }
                            else {
                                e.currentTarget.style.borderColor = "#143109";
                                e.currentTarget.style.color = "#143109";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (document.documentElement.classList.contains("dark")) {
                                e.currentTarget.style.borderColor = "rgb(181, 191, 161, 0.2)";
                                e.currentTarget.style.color = "rgb(181, 191, 161, 0.2)";
                            }
                            else {
                                e.currentTarget.style.borderColor = "#b5bfa1";
                                e.currentTarget.style.color = "#b5bfa1";
                            }
                        }}
                    >
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                        Add Staff Member
                    </button>
                )}
            </div>

            {staffList.length > 0 && (
                <div
                    className="flex items-center gap-2 p-3.5 rounded-xl text-xs mb-6 border border-primary/20 dark:border-sage/20 bg-sage/10"
                >
                    <span className="material-symbols-outlined text-sm text-primary dark:text-sage shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    <p className="text-primary/50 dark:text-sage/50">
                        <span className="font-semibold text-primary dark:text-sage">{staffList.length} staff member{staffList.length > 1 ? "s" : ""}</span> will receive invitation emails when you complete setup.
                    </p>
                </div>
            )}

            {apiError && (
                <div className="mb-4 flex items-start gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                    <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
                    {apiError}
                </div>
            )}

            {/* ── Fixed bottom bar ────────────────────────────────────────────── */}
            <div
                className={`${isFixed ? "fixed bottom-0 left-0 right-0 z-30" : "relative mt-4 rounded-2xl"} flex items-center justify-between px-6 lg:px-16 py-5`}
                style={{ background: "#143109", borderTop: "1px solid rgba(181,191,161,0.15)" }}
            >
                <div className="flex items-center gap-2 text-[rgba(181,191,161,0.5)]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                    <span className="text-xs font-medium italic">Progress is auto-saved</span>
                </div>

                <div className="flex gap-5 align-middle">
                <button
                    onClick={handleSkip}
                    className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-primary bg-sage hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    Skip for now
                </button>

                <button
                    onClick={handleSave}
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-primary bg-sage shimmer-btn hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {saving && <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>}
                    {saving ? "Saving…" : "Save & Continue"}
                    {!saving && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                </button>
                </div>
            </div>


            {/* <div
                className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 lg:px-16 py-5"
                style={{ background: "#143109", borderTop: "1px solid rgba(181,191,161,0.15)" }}
            >
                <button
                    onClick={handleSkip}
                    className="text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "rgba(181,191,161,0.55)" }}
                >
                    Skip for now
                </button>

                <button
                    // onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-[#143109] transition-all active:scale-95 disabled:opacity-50"
                    style={{ background: "#b5bfa1" }}
                >
                    {saving && <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>}
                    {saving ? "Saving…" : staffList.length > 0 ? `Save ${staffList.length} Staff & Continue` : "Continue"}
                    {!saving && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                </button>
            </div> */}

            {/* ── Add Staff Modal ──────────────────────────────────────────────── */}
            {showModal && (
                <AddStaffModal
                    onAdd={handleAdd}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default StaffStep;