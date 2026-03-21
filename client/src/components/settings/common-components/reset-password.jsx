import { useState } from "react";

const RULES = [
  { key: "len",  label: "8+ characters",     test: p => p.length >= 8                         },
  { key: "up",   label: "Uppercase letter",  test: p => /[A-Z]/.test(p)                       },
  { key: "num",  label: "Number",            test: p => /[0-9]/.test(p)                       },
  { key: "sym",  label: "Special character", test: p => /[!@#$%^&*(),.?":{}|<>]/.test(p)     },
];

const STRENGTH = [
  { label: "Weak",       bar: "bg-red-400",     text: "text-red-500"      },
  { label: "Fair",       bar: "bg-orange-400",  text: "text-orange-500"   },
  { label: "Good",       bar: "bg-amber-400",   text: "text-amber-600"    },
  { label: "Strong",     bar: "bg-emerald-500", text: "text-emerald-600"  },
  { label: "Very Strong",bar: "bg-emerald-600", text: "text-emerald-700"  },
];

const fieldBase =
  "w-full pl-4 pr-11 py-3 rounded-xl text-sm outline-none transition-all bg-white " +
  "text-[#143109] placeholder:text-slate-300 border border-[rgba(20,49,9,0.12)] " +
  "focus:border-[#143109] focus:ring-3 focus:ring-[rgba(20,49,9,0.06)]";

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
    <label className="text-xs font-semibold" style={{ color: "rgba(20,49,9,0.5)" }}>{label}</label>
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        name={name} value={value} onChange={onChange}
        placeholder="••••••••"
        className={fieldBase}
      />
      <button
        type="button" onClick={onToggle}
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

export default function ResetPassword() {
  const [form,     setForm]     = useState({ next: "", confirm: "" });
  const [show,     setShow]     = useState({ next: false, confirm: false });
  const [saving,   setSaving]   = useState(false);
  const [feedback, setFeedback] = useState(null);

  const score = RULES.filter(r => r.test(form.next)).length;
  const sm    = form.next.length ? STRENGTH[score] : null;

  const onChange   = ({ target: { name, value } }) => { setForm(p => ({ ...p, [name]: value })); setFeedback(null); };
  const onToggle   = (k) => setShow(p => ({ ...p, [k]: !p[k] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.next !== form.confirm) { setFeedback({ type: "error", msg: "Passwords do not match." }); return; }
    if (score < 4) { setFeedback({ type: "error", msg: "Password must meet all requirements." }); return; }
    try {
      setSaving(true);
      await new Promise(r => setTimeout(r, 900)); // TODO: real API
      setFeedback({ type: "success", msg: "Password updated successfully." });
      setForm({ next: "", confirm: "" });
    } catch {
      setFeedback({ type: "error", msg: "Failed to update password. Please try again." });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-lg">

      <div className="mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Change Password</h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>Use a strong, unique password.</p>
      </div>

      {feedback && (
        <div
          className="mb-6 flex items-start gap-3 p-4 rounded-xl text-sm font-medium"
          style={
            feedback.type === "success"
              ? { background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)", color: "#059669" }
              : { background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", color: "#dc2626" }
          }
        >
          <span className="material-symbols-outlined text-[17px] mt-0.5 shrink-0">
            {feedback.type === "success" ? "check_circle" : "error"}
          </span>
          {feedback.msg}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* New password + strength */}
        <Card>
          <div className="p-5 space-y-4">
            <PwField
              label="New Password" name="next"
              value={form.next} show={show.next}
              onChange={onChange} onToggle={() => onToggle("next")}
            />

            {form.next && (
              <div className="space-y-2.5">
                {/* Strength bar */}
                <div className="flex gap-1">
                  {[0,1,2,3].map(i => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < score ? sm.bar : "bg-slate-100"}`}
                    />
                  ))}
                </div>
                <p className={`text-xs font-semibold ${sm.text}`}>{sm.label}</p>

                {/* Rule checklist */}
                <div className="grid grid-cols-2 gap-y-1.5">
                  {RULES.map(({ key, label, test }) => {
                    const ok = test(form.next);
                    return (
                      <div key={key} className={`flex items-center gap-1.5 text-[11px] font-medium ${ok ? "text-emerald-600" : "text-slate-400"}`}>
                        <span className="material-symbols-outlined text-[13px]">{ok ? "check_circle" : "radio_button_unchecked"}</span>
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <PwField
              label="Confirm New Password" name="confirm"
              value={form.confirm} show={show.confirm}
              onChange={onChange} onToggle={() => onToggle("confirm")}
            />

            {form.confirm && form.next && form.confirm !== form.next && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <span className="material-symbols-outlined text-[12px]">error</span>
                Passwords do not match.
              </p>
            )}
          </div>
        </Card>

        <button
          type="submit" disabled={saving}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: "#143109" }}
        >
          {saving && <span className="material-symbols-outlined text-[15px] animate-spin">progress_activity</span>}
          {saving ? "Updating…" : "Update Password"}
        </button>

      </form>
    </div>
  );
}