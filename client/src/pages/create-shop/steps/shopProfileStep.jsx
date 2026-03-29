/**
 * ShopProfileStep.jsx
 * Location: client/src/pages/create-shop/steps/ShopProfileStep.jsx
 *
 * Step 1 of shop setup.
 * Collects: shop identity, owner details, contact info, hours, address, socials.
 * On submit → POST /api/shop-setup/profile → calls onComplete() to advance.
 */

import { useState, useRef, useEffect } from "react";
import api from "../../../service/api";

// ─── DAYS ─────────────────────────────────────────────────────────────────────

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const BUSINESS_TYPES = [
    "Grocery & Food",
    "Fashion & Apparel",
    "Electronics",
    "Health & Pharmacy",
    "Beauty & Cosmetics",
    "Home & Furniture",
    "Books & Stationery",
    "Sports & Fitness",
    "Jewellery & Accessories",
    "Toys & Kids",
    "Pet Supplies",
    "Other",
];

// ─── Initial State ─────────────────────────────────────────────────────────────

const INIT = {
    // Identity
    name: "",
    tagline: "",
    businessType: "",
    // Owner
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    aadhaarPan: "",
    // Contact
    businessEmail: "",
    receptionistPhone: "",
    whatsappPhone: "",
    // Hours
    openTime: "09:00",
    closeTime: "21:00",
    fromDay: "Monday",
    toDay: "Sunday",
    // Address
    street: "",
    city: "",
    state: "",
    pincode: "",
    // Socials
    website: "",
    instagram: "",
};

// ─── Component ─────────────────────────────────────────────────────────────────

const ShopProfileStep = ({ onComplete }) => {
    const [form, setForm] = useState(INIT);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [isFixed, setIsFixed] = useState(true);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsFixed(!entry.isIntersecting),
            { threshold: 0 }
        );
        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        setErrors((p) => ({ ...p, [name]: undefined }));
        setApiError(null);
    };

    // ── Validation ──────────────────────────────────────────────────────────────
    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Shop name is required.";
        if (!form.businessType) e.businessType = "Business type is required.";
        if (!form.ownerName.trim()) e.ownerName = "Owner name is required.";
        if (!form.ownerPhone.trim()) e.ownerPhone = "Owner phone is required.";
        if (!form.businessEmail.trim()) e.businessEmail = "Business email is required.";
        if (!form.receptionistPhone.trim()) e.receptionistPhone = "Receptionist number is required.";
        if (!form.street.trim()) e.street = "Street address is required.";
        if (!form.city.trim()) e.city = "City is required.";
        if (!form.state.trim()) e.state = "State is required.";
        if (form.pincode && !/^[1-9][0-9]{5}$/.test(form.pincode.trim()))
            e.pincode = "Enter a valid 6-digit pincode.";
        return e;
    };

    // ── Submit ──────────────────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        try {
            setSaving(true);

            await api.post("/shop-setup/profile", {
                name: form.name.trim(),
                tagline: form.tagline.trim(),
                businessType: form.businessType,
                ownerDetails: {
                    name: form.ownerName.trim(),
                    phone: form.ownerPhone.trim(),
                    email: form.ownerEmail.trim(),
                    aadhaarPan: form.aadhaarPan.trim(),
                },
                contactInfo: {
                    businessEmail: form.businessEmail.trim(),
                    receptionistPhone: form.receptionistPhone.trim(),
                    whatsappPhone: form.whatsappPhone.trim(),
                },
                operatingHours: {
                    openTime: form.openTime,
                    closeTime: form.closeTime,
                    fromDay: form.fromDay,
                    toDay: form.toDay,
                },
                address: {
                    street: form.street.trim(),
                    city: form.city.trim(),
                    state: form.state.trim(),
                    pincode: form.pincode.trim(),
                },
                socials: {
                    website: form.website.trim(),
                    instagram: form.instagram.trim(),
                },
            });

            onComplete();

        } catch (err) {
            setApiError(err.response?.data?.message ?? "Failed to save. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="flex-1 overflow-y-auto px-8 lg:px-16 py-12 justify-items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <form onSubmit={handleSubmit} noValidate className="max-w-3xl space-y-16 pb-32">

                {/* ── Section 1: Shop Identity ───────────────────────────────────── */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Shop Identity</h2>
                        <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Make your store stand out to customers.</p>
                    </div>
                    <div className="relative">
                        <div className="w-full h-48 rounded-2xl bg-primary/10 dark:bg-sage/10 border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center cursor-pointer hover:bg-sage/50 dark:hover:bg-primary/50 transition-colors group">
                            <span className="material-symbols-outlined text-4xl text-primary/50 group-hover:text-primary dark:text-sage/50 dark:group-hover:text-sage transition-colors">add_photo_alternate</span>
                            <p className="mt-2 text-xs font-medium text-primary/50 group-hover:text-primary dark:text-sage/50 dark:group-hover:text-sage ">Upload Cover Photo (16:9)</p>
                        </div>
                        <div className="absolute -bottom-10 left-8">
                            <div className="w-24 h-24 rounded-full  bg-background-light dark:bg-background-dark border-4 border-primary/50 dark:border-sage/50 shadow-sm flex items-center justify-center cursor-pointer transition-transform group overflow-hidden">
                                <div className=" bg-primary/10 dark:bg-sage/10  h-full w-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary dark:text-sage">storefront</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Shop Name <span className="text-error">*</span></label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50 border-none rounded-xl p-4 text-sm focus:ring-2 transition-all shadow-sm text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage"
                                placeholder="e.g. Green Leaf Organics"
                                type="text"
                            />
                            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Business Type <span className="text-error">*</span></label>
                            <select
                                name="businessType"
                                value={form.businessType}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-[#112b08] border-none rounded-xl p-4 text-sm focus:ring-2 transition-all shadow-sm appearance-none text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage"
                            >
                                <option value="">Select Industry</option>
                                {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            {errors.businessType && <p className="text-xs text-red-500">{errors.businessType}</p>}
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Shop Tagline</label>
                            <textarea
                                name="tagline"
                                value={form.tagline}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                placeholder="Tell customers what makes you special..."
                                rows="2"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Owner Details ───────────────────────────────────── */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Owner Details</h2>
                        <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Verification details for account security.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Full Name <span className="text-error">*</span></label>
                            <input
                                name="ownerName"
                                value={form.ownerName}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                type="text"
                                placeholder="Full Name"
                            />
                            {errors.ownerName && <p className="text-xs text-red-500">{errors.ownerName}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Mobile Number <span className="text-error">*</span></label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary dark:text-sage">+91</span>
                                <input
                                    name="ownerPhone"
                                    value={form.ownerPhone}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-primary/50 border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                    type="tel"
                                    placeholder="9016XXXXXX"
                                />
                            </div>
                            {errors.ownerPhone && <p className="text-xs text-red-500">{errors.ownerPhone}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Personal Email <span className="text-error">*</span></label>
                            <input
                                name="ownerEmail"
                                value={form.ownerEmail}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                type="email"
                                placeholder="email@domain.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Aadhaar/PAN (Optional)</label>
                            <input
                                name="aadhaarPan"
                                value={form.aadhaarPan}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                type="text"
                                placeholder="180012XXXXXX"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Section 3: Shop Contact ────────────────────────────────────── */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Shop Contact</h2>
                        <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Where customers can reach your business.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-3 space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Official Business Email <span className="text-error">*</span></label>
                            <input
                                name="businessEmail"
                                value={form.businessEmail}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                type="email"
                                placeholder="email@domain.com"
                            />
                            {errors.businessEmail && <p className="text-xs text-red-500">{errors.businessEmail}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Receptionist No. <span className="text-error">*</span></label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-on-surface-variant">+91</span>
                                <input
                                    name="receptionistPhone"
                                    value={form.receptionistPhone}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                    type="tel"
                                    placeholder="9327XXXXXX"
                                />
                            </div>
                            {errors.receptionistPhone && <p className="text-xs text-red-500">{errors.receptionistPhone}</p>}
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">WhatsApp Business (Optional)</label>
                            <input
                                name="whatsappPhone"
                                value={form.whatsappPhone}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                placeholder="Same as receptionist?"
                                type="tel"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Operating Hours ─────────────────────────────────── */}
                <section className="space-y-8 p-8 bg-sage/10 dark:bg-primary/50 rounded-2xl border border-primary/10 dark-border-sage/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-primary dark:text-sage">Operating Hours</h2>
                            <p className="text-primary/70 dark:text-sage/70 text-xs mt-0.5">Define your store's availability.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-primary dark:text-sage">HOLIDAY TODAY</span>
                            <button className="w-12 h-6 bg-primary dark:bg-sage/50 rounded-full relative p-1 transition-colors hover:bg-primary/50 dark:hover:bg-sage hover:cursor-pointer" type="button">
                                <div className="w-4 h-4 bg-sage dark:bg-primary rounded-full shadow-sm"></div>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-sage">Open Time</label>
                                <input
                                    name="openTime"
                                    value={form.openTime}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-primary/50 border-none rounded-lg p-3 text-sm focus:ring-2 text-primary dark:text-sage"
                                    type="time"
                                />
                            </div>
                            <span className="mt-6 text-on-surface-variant">to</span>
                            <div className="flex-1 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Close Time</label>
                                <input
                                    name="closeTime"
                                    value={form.closeTime}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-primary/50 border-none rounded-lg p-3 text-sm focus:ring-2 text-primary dark:text-sage"
                                    type="time"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">From Day</label>
                                <select
                                    name="fromDay"
                                    value={form.fromDay}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-[#112b08]  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 text-primary dark:text-sage"
                                >
                                    {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                            <span className="mt-6 text-on-surface-variant">to</span>
                            <div className="flex-1 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">To Day</label>
                                <select
                                    name="toDay"
                                    value={form.toDay}
                                    onChange={handleChange}
                                    className="w-full bg-background-light dark:bg-[#112b08]  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 text-primary dark:text-sage"
                                >
                                    {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Address ─────────────────────────────────────────── */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Shop Address</h2>
                        <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Where is your physical storefront located?</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="col-span-2 md:col-span-3 space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Street Address</label>
                            <input
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm"
                                placeholder="Building No, Street Name, Landmark"
                                type="text"
                            />
                            {errors.street && <p className="text-xs text-red-500">{errors.street}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">City</label>
                            <input
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage"
                                type="text"
                                placeholder="City"
                            />
                            {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">State</label>
                            <input
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage"
                                type="text"
                                placeholder="State"
                            />
                            {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Pincode</label>
                            <input
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage"
                                type="text"
                                placeholder="360XXX"
                                maxLength={6}
                                inputMode="numeric"
                            />
                            {errors.pincode && <p className="text-xs text-red-500">{errors.pincode}</p>}
                        </div>
                        <div className="col-span-2 md:col-span-3">
                            <div className="w-full h-48 rounded-2xl bg-sage/10 dark:bg-primary relative overflow-hidden group">
                                <div className="absolute inset-0 bg-sage/10 dark:bg-primary flex items-center justify-center">
                                    <img className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Stylized map showing shop location pin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRvAT4DCp4G86sfDsi59NxXUrLZQSlaakgzNW86Cct22wOXgG3TYXmSl2aFD3oqgAw1d_9Au65FAyYsTFC-qgeB3g0ym7Frr0wAjVVCAFeq5oBCSTG742V4YMJCbNa7RjFRIfriWCUaeOms-lJOwkEdyVQJ_LG7gzvKQwQACrGsO7xSh4Dj-Yls8yjV8AFsmPCdRRFGpUXTxrNNaqnwB5-_ZMT7EFBywP8APi-65j1HuZDa9eMXai_bPfMJV0eibWj-BUvbqpASU" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/90 dark:bg-sage backdrop-blur px-6 py-3 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                                            <span className="material-symbols-outlined text-primary">location_on</span>
                                            <span className="text-sm font-bold text-primary">Pin on Google Maps</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 6: Socials ─────────────────────────────────────────── */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Socials</h2>
                        <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Help customers find your online presence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 dark:text-sage/50 material-symbols-outlined text-lg">public</span>
                            <input
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 ftext-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage shadow-sm"
                                placeholder="Website URL"
                                type="url"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 dark:text-sage/50 material-symbols-outlined text-lg">photo_camera</span>
                            <input
                                name="instagram"
                                value={form.instagram}
                                onChange={handleChange}
                                className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage shadow-sm"
                                placeholder="Instagram Handle"
                                type="text"
                            />
                        </div>
                    </div>
                </section>

                {/* ── API Error ──────────────────────────────────────────────────── */}
                {apiError && (
                    <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
                        {apiError}
                    </div>
                )}

                {/* ── Sentinel: bar yahan aake ruk jayega ──────────────────── */}
                <div ref={sentinelRef} />

                {/* ── Submit ─────────────────────────────────────────────────────── */}
                <div
                    className={`${isFixed ? "fixed bottom-0 left-0 right-0 z-30" : "relative mt-4 rounded-2xl"} flex items-center justify-between px-6 lg:px-16 py-5`}
                    style={{ background: "#143109", borderTop: "1px solid rgba(181,191,161,0.15)" }}
                >
                    <div className="flex items-center gap-2 text-[rgba(181,191,161,0.5)]">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                        <span className="text-xs font-medium italic">Progress is auto-saved</span>
                    </div>

                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-primary bg-sage shimmer-btn hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {saving && <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>}
                        {saving ? "Saving…" : "Save & Continue"}
                        {!saving && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ShopProfileStep;