/**
 * reset-password.jsx
 * Location: client/src/components/settings/common-components/reset-password.jsx
 *
 * Two-step password change flow:
 *   Step 1 — User fills in new + confirm password, clicks "Update Password"
 *             → API sends OTP to their registered email
 *   Step 2 — OtpModal opens; user enters 6-digit code
 *             → API verifies OTP + changes password + invalidates all sessions
 *             → User is signed out (security) and redirected to /login
 */

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";
import { useAuth } from "../../../context/AuthContext";
import OtpModal from "../../../pages/auth/Otp";

// ─── Password strength rules ──────────────────────────────────────────────────

const RULES = [
    { key: "len",  label: "8+ characters",     test: p => p.length >= 8 },
    { key: "up",   label: "Uppercase letter",  test: p => /[A-Z]/.test(p) },
    { key: "num",  label: "Number",            test: p => /[0-9]/.test(p) },
    { key: "sym",  label: "Special character", test: p => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

const STRENGTH = [
    { label: "Weak",        bar: "bg-red-400",     text: "text-red-500" },
    { label: "Fair",        bar: "bg-orange-400",  text: "text-orange-500" },
    { label: "Good",        bar: "bg-amber-400",   text: "text-amber-600" },
    { label: "Strong",      bar: "bg-emerald-500", text: "text-emerald-600" },
    { label: "Very Strong", bar: "bg-emerald-600", text: "text-emerald-700" },
];

// ─── Shared styles ────────────────────────────────────────────────────────────

const fieldBase =
    "w-full pl-4 pr-11 py-3 rounded-xl text-sm outline-none transition-all bg-white " +
    "text-[#143109] placeholder:text-slate-300 border border-[rgba(20,49,9,0.12)] " +
    "focus:border-[#143109] focus:ring-3 focus:ring-[rgba(20,49,9,0.06)]";

// ─── Sub-components ───────────────────────────────────────────────────────────

const Card = ({ children }) => (
    <div
        className="rounded-2xl bg-white overflow-hidden"
        style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
    >
        {children}
    </div>
);

const PwField = ({ label, name, value, show, onChange, onToggle }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-semibold" style={{ color: "rgba(20,49,9,0.5)" }}>
            {label}
        </label>
        <div className="relative">
            <input
                type={show ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder="••••••••"
                className={fieldBase}
            />
            <button
                type="button"
                onClick={onToggle}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
                style={{ color: "rgba(20,49,9,0.35)" }}
            >
                <span className="material-symbols-outlined text-[18px]">
                    {show ? "visibility_off" : "visibility"}
                </span>
            </button>
        </div>
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ResetPassword() {
    const navigate  = useNavigate();
    const { logout } = useAuth();

    // ── Form state ─────────────────────────────────────────────────────────────
    const [form, setForm] = useState({ next: "", confirm: "" });
    const [show, setShow] = useState({ next: false, confirm: false });

    // ── UI state ───────────────────────────────────────────────────────────────
    const [isSending,   setIsSending]   = useState(false); // "Update Password" button
    const [isVerifying, setIsVerifying] = useState(false); // OTP submit button
    const [feedback,    setFeedback]    = useState(null);  // page-level success/error

    // ── OTP modal state ────────────────────────────────────────────────────────
    const [otpModal, setOtpModal] = useState({
        open:        false,
        maskedEmail: "",
        error:       null,
    });

    // ── Derived strength values ────────────────────────────────────────────────
    const score     = RULES.filter(r => r.test(form.next)).length;
    const strength  = form.next.length ? STRENGTH[score] : null;
    const allPassed = score === RULES.length;
    const matches   = form.next === form.confirm;

    // ─── Handlers ─────────────────────────────────────────────────────────────

    const handleChange = useCallback(({ target: { name, value } }) => {
        setForm(p => ({ ...p, [name]: value }));
        setFeedback(null);
    }, []);

    const toggleShow = useCallback(key => {
        setShow(p => ({ ...p, [key]: !p[key] }));
    }, []);

    // ── Step 1: Validate → send OTP ───────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedback(null);

        if (!matches) {
            setFeedback({ type: "error", msg: "Passwords do not match." });
            return;
        }
        if (!allPassed) {
            setFeedback({ type: "error", msg: "Password must meet all requirements." });
            return;
        }

        try {
            setIsSending(true);
            // Protected endpoint — no body needed; server reads userId from JWT
            const { data } = await api.post("/auth/send-change-password-otp");
            setOtpModal({ open: true, maskedEmail: data.maskedEmail, error: null });
        } catch (err) {
            setFeedback({
                type: "error",
                msg:  err.response?.data?.message ?? "Failed to send verification code. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    // ── Step 2: Verify OTP → change password ──────────────────────────────────
    const handleVerifyOtp = useCallback(async (otp) => {
        setIsVerifying(true);
        setOtpModal(p => ({ ...p, error: null }));

        try {
            await api.post("/auth/change-password", {
                otp,
                newPassword: form.next,
            });

            // Close modal + show success on the page
            setOtpModal({ open: false, maskedEmail: "", error: null });
            setForm({ next: "", confirm: "" });
            setFeedback({
                type: "success",
                msg:  "Password changed! Signing you out for security…",
            });

            // After 2.5 s, revoke local auth and redirect to login
            setTimeout(async () => {
                await logout();
                navigate("/login");
            }, 2500);

        } catch (err) {
            setOtpModal(p => ({
                ...p,
                error: err.response?.data?.message ?? "Verification failed. Please try again.",
            }));
        } finally {
            setIsVerifying(false);
        }
    }, [form.next, logout, navigate]);

    // ── Resend OTP (called from inside OtpModal) ──────────────────────────────
    const handleResendOtp = useCallback(async () => {
        try {
            const { data } = await api.post("/auth/send-change-password-otp");
            // Update maskedEmail in case it changed (shouldn't, but defensive)
            setOtpModal(p => ({ ...p, maskedEmail: data.maskedEmail, error: null }));
        } catch (err) {
            // Surface resend error inside the modal via `error` prop
            setOtpModal(p => ({
                ...p,
                error: err.response?.data?.message ?? "Failed to resend code.",
            }));
            throw err; // Re-throw so OtpModal knows not to reset its timer
        }
    }, []);

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <div className="max-w-lg">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>
                    Change Password
                </h1>
                <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>
                    A one-time verification code will be sent to your registered email.
                </p>
            </div>

            {/* Page-level feedback */}
            {feedback && <Feedback type={feedback.type} msg={feedback.msg} />}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">

                <Card>
                    <div className="p-5 space-y-4">

                        {/* New password field */}
                        <PwField
                            label="New Password"
                            name="next"
                            value={form.next}
                            show={show.next}
                            onChange={handleChange}
                            onToggle={() => toggleShow("next")}
                        />

                        {/* Strength meter (only shown when user is typing) */}
                        {form.next && (
                            <div className="space-y-2.5">
                                {/* Bar */}
                                <div className="flex gap-1">
                                    {[0, 1, 2, 3].map(i => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < score ? strength.bar : "bg-slate-100"}`}
                                        />
                                    ))}
                                </div>
                                <p className={`text-xs font-semibold ${strength.text}`}>
                                    {strength.label}
                                </p>

                                {/* Rule checklist */}
                                <div className="grid grid-cols-2 gap-y-1.5">
                                    {RULES.map(({ key, label, test }) => {
                                        const ok = test(form.next);
                                        return (
                                            <div
                                                key={key}
                                                className={`flex items-center gap-1.5 text-[11px] font-medium ${ok ? "text-emerald-600" : "text-slate-400"}`}
                                            >
                                                <span className="material-symbols-outlined text-[13px]">
                                                    {ok ? "check_circle" : "radio_button_unchecked"}
                                                </span>
                                                {label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Confirm password field */}
                        <PwField
                            label="Confirm New Password"
                            name="confirm"
                            value={form.confirm}
                            show={show.confirm}
                            onChange={handleChange}
                            onToggle={() => toggleShow("confirm")}
                        />

                        {/* Mismatch warning */}
                        {form.confirm && form.next && !matches && (
                            <p className="flex items-center gap-1 text-xs text-red-500">
                                <span className="material-symbols-outlined text-[12px]">error</span>
                                Passwords do not match.
                            </p>
                        )}

                    </div>
                </Card>

                {/* Submit — triggers OTP send */}
                <button
                    type="submit"
                    disabled={isSending || !form.next || !form.confirm}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: "#143109" }}
                >
                    {isSending && (
                        <span className="material-symbols-outlined text-[15px] animate-spin">
                            progress_activity
                        </span>
                    )}
                    {isSending ? "Sending OTP…" : "Update Password"}
                </button>

            </form>

            {/* ── OTP Verification Modal ─────────────────────────────────────── */}
            <OtpModal
                isOpen={otpModal.open}
                onClose={() => !isVerifying && setOtpModal(p => ({ ...p, open: false }))}
                onVerify={handleVerifyOtp}
                onResend={handleResendOtp}
                email={otpModal.maskedEmail}
                isVerifying={isVerifying}
                error={otpModal.error}
            />

        </div>
    );
}