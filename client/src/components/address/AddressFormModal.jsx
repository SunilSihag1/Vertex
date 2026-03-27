import { useState, useEffect } from "react";
import api from "../../service/api";

const INITIAL_FORM = {
  type: "home",
  line1: "",
  line2: "",
  city: "",
  state: "",
  pincode: "",
};

const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

/**
 * AddressFormModal
 *
 * Props:
 *  - isOpen       {boolean}         controls visibility
 *  - onClose      {() => void}      called on cancel / backdrop click
 *  - onSuccess    {(addresses) => void}  called after successful save with updated addresses array
 *  - editAddress  {object | null}   when set, form is in "edit" mode pre-filled with this address
 *  - editIndex    {number | null}   index of the address being edited inside the addresses array
 *  - existingAddresses {array}      full current addresses array needed for PATCH logic
 */
const AddressFormModal = ({
  isOpen,
  onClose,
  onSuccess,
  editAddress = null,
  editIndex = null,
  existingAddresses = [],
}) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [apiError, setApiError] = useState(null);

  const isEditMode = editAddress !== null && editIndex !== null;

  /* ── Sync form when editAddress changes ─────────────────── */
  useEffect(() => {
    if (isOpen) {
      setForm(
        isEditMode
          ? {
            type: editAddress.type ?? "home",
            line1: editAddress.line1 ?? "",
            line2: editAddress.line2 ?? "",
            city: editAddress.city ?? "",
            state: editAddress.state ?? "",
            pincode: editAddress.pincode ?? "",
          }
          : INITIAL_FORM
      );
      setErrors({});
      setApiError(null);
    }
  }, [isOpen, isEditMode, editAddress]);

  /* ── Validation ─────────────────────────────────────────── */
  const validate = () => {
    const e = {};
    if (!form.line1.trim()) e.line1 = "Address line 1 is required.";
    else if (form.line1.trim().length > 150)
      e.line1 = "Must not exceed 150 characters.";
    if (form.line2.trim().length > 150)
      e.line2 = "Must not exceed 150 characters.";
    if (!form.city.trim()) e.city = "City is required.";
    if (!form.state.trim()) e.state = "State is required.";
    if (!form.pincode.trim()) e.pincode = "Pincode is required.";
    else if (!PINCODE_REGEX.test(form.pincode.trim()))
      e.pincode = "Enter a valid 6-digit pincode.";
    return e;
  };

  /* ── Handlers ───────────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSaving(true);
      setApiError(null);

      const newEntry = {
        type: form.type,
        line1: form.line1.trim(),
        line2: form.line2.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        pincode: form.pincode.trim(),
        // first address added becomes default; editing preserves existing default flag
        isDefault: isEditMode
          ? existingAddresses[editIndex]?.isDefault ?? false
          : existingAddresses.length === 0,
      };

      let updatedAddresses;

      if (isEditMode) {
        updatedAddresses = existingAddresses.map((addr, i) =>
          i === editIndex ? newEntry : addr
        );
      } else {
        updatedAddresses = [...existingAddresses, newEntry];
      }

      await api.put(
        "/profile",
        { addresses: updatedAddresses },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      onSuccess(updatedAddresses);
      onClose();
    } catch (err) {
      setApiError(
        err.response?.data?.message ?? "Failed to save address. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-lg bg-white dark:bg-[#0f1f0c] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-[#143109] dark:text-sage">
              {isEditMode ? "Edit Address" : "Add Delivery Address"}
            </h2>
            {!isEditMode && (
              <p className="text-xs text-slate-400 mt-0.5">
                Add an address to get started with deliveries.
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="px-6 py-5 space-y-4">
          {/* API error */}
          {apiError && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 text-sm">
              <span className="material-symbols-outlined text-base mt-0.5 shrink-0">
                error
              </span>
              {apiError}
            </div>
          )}

          {/* Address Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Address Type
            </label>
            <div className="flex gap-2">
              {["home", "office", "other"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({ ...prev, type: t }))
                  }
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-sm font-semibold capitalize transition-all ${form.type === t
                    ? "bg-[#143109] text-white border-[#143109]"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 hover:border-[#143109]/40"
                    }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {t === "home" ? "home" : t === "office" ? "work" : "location_on"}
                  </span>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Line 1 */}
          <FormField
            label="Address Line 1"
            required
            error={errors.line1}
          >
            <input
              type="text"
              name="line1"
              value={form.line1}
              onChange={handleChange}
              placeholder="House / Flat no., Building, Street"
              maxLength={150}
              className={inputClass(errors.line1)}
            />
          </FormField>

          {/* Line 2 */}
          <FormField label="Address Line 2" hint="Optional" error={errors.line2}>
            <input
              type="text"
              name="line2"
              value={form.line2}
              onChange={handleChange}
              placeholder="Landmark, Area (optional)"
              maxLength={150}
              className={inputClass(errors.line2)}
            />
          </FormField>

          {/* City + State */}
          <div className="grid grid-cols-2 gap-3">
            <FormField label="City" required error={errors.city}>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Mumbai"
                className={inputClass(errors.city)}
              />
            </FormField>

            <FormField label="State" required error={errors.state}>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="Maharashtra"
                className={inputClass(errors.state)}
              />
            </FormField>
          </div>

          {/* Pincode */}
          <FormField label="Pincode" required error={errors.pincode}>
            <input
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="400001"
              maxLength={6}
              inputMode="numeric"
              className={inputClass(errors.pincode)}
            />
          </FormField>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-[#143109]/20 text-[#143109] font-semibold text-sm hover:bg-[#143109]/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 py-3 rounded-xl bg-[#143109] text-white font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {saving && (
                <span className="material-symbols-outlined text-sm animate-spin">
                  progress_activity
                </span>
              )}
              {saving
                ? "Saving…"
                : isEditMode
                  ? "Update Address"
                  : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ── Helpers ──────────────────────────────────────────────── */
const inputClass = (hasError) =>
  `w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none transition-all text-[#143109] dark:text-white bg-white dark:bg-[#143109]/30 placeholder:text-slate-300 ${hasError
    ? "border-red-400 focus:ring-2 focus:ring-red-200"
    : "border-slate-200 dark:border-slate-700 focus:border-[#143109] focus:ring-2 focus:ring-[#143109]/20"
  }`;

const FormField = ({ label, required, hint, error, children }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
      {label}
      {required && <span className="text-red-400">*</span>}
      {hint && <span className="normal-case tracking-normal font-normal text-slate-400 ml-1">— {hint}</span>}
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

export default AddressFormModal;