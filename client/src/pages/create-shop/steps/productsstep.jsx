// /**
//  * ProductsStep.jsx
//  * Location: client/src/pages/create-shop/steps/ProductsStep.jsx
//  *
//  * Step 3 — Skippable. Owner can add their first product or skip.
//  * Product creation itself can be a full feature later; here we keep it simple.
//  */

// import { useState } from "react";
// import api from "../../../service/api";

// const fieldCls =
//     "w-full bg-white border border-[rgba(20,49,9,0.12)] rounded-xl p-3.5 text-sm " +
//     "outline-none text-[#143109] placeholder:text-slate-300 " +
//     "focus:border-[#143109] focus:ring-2 focus:ring-[rgba(20,49,9,0.06)] transition-all";

// const F = ({ label, required, error, hint, children }) => (
//     <div className="space-y-1.5">
//         <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(20,49,9,0.45)" }}>
//             {label}{required && <span className="text-red-400 ml-0.5">*</span>}
//             {hint && <span className="ml-2 normal-case tracking-normal font-normal text-slate-400">({hint})</span>}
//         </label>
//         {children}
//         {error && (
//             <p className="text-xs text-red-500 flex items-center gap-1">
//                 <span className="material-symbols-outlined text-xs">error</span>
//                 {error}
//             </p>
//         )}
//     </div>
// );

// const INIT = {
//     name: "",
//     category: "",
//     price: "",
//     stock: "",
//     description: "",
// };

// const ProductsStep = ({ onComplete, onSkip }) => {
//     const [form, setForm] = useState(INIT);
//     const [errors, setErrors] = useState({});
//     const [saving, setSaving] = useState(false);
//     const [apiError, setApiError] = useState(null);

//     const handleChange = ({ target: { name, value } }) => {
//         setForm((p) => ({ ...p, [name]: value }));
//         setErrors((p) => ({ ...p, [name]: undefined }));
//         setApiError(null);
//     };

//     const validate = () => {
//         const e = {};
//         if (!form.name.trim()) e.name = "Product name is required.";
//         if (!form.price || isNaN(Number(form.price)) || Number(form.price) < 0)
//             e.price = "Enter a valid price.";
//         return e;
//     };

//     const handleSave = async (e) => {
//         e.preventDefault();
//         const errs = validate();
//         if (Object.keys(errs).length) { setErrors(errs); return; }

//         try {
//             setSaving(true);
//             // POST to products API (implement separately)
//             // await api.post("/products", { ...form });

//             // Advance setup step
//             await api.post("/shop-setup/advance-product");
//             onComplete();
//         } catch (err) {
//             setApiError(err.response?.data?.message ?? "Failed to save product.");
//         } finally {
//             setSaving(false);
//         }
//     };

//     const handleSkip = async () => {
//         try {
//             await api.post("/shop-setup/advance-product");
//             onSkip();
//         } catch {
//             onSkip();
//         }
//     };

//     return (
//         <div className="pb-32">

//             {/* Header */}
//             <div className="mb-8">
//                 <div
//                     className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
//                     style={{ background: "rgba(20,49,9,0.07)", color: "#143109" }}
//                 >
//                     <span className="material-symbols-outlined text-sm">inventory_2</span>
//                     Optional step
//                 </div>
//                 <h2 className="text-2xl font-bold text-[#143109] tracking-tight">Add Your First Product</h2>
//                 <p className="mt-1 text-sm text-[rgba(31,41,55,0.5)]">
//                     Start with one product to see how your store looks, or skip this and add everything from the dashboard.
//                 </p>
//             </div>

//             {/* Illustration / preview card */}
//             <div
//                 className="rounded-2xl bg-white p-6 mb-6"
//                 style={{ border: "1px solid rgba(20,49,9,0.08)" }}
//             >
//                 <div className="flex items-center gap-4 mb-6">
//                     {/* Product image placeholder */}
//                     <div
//                         className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
//                         style={{ background: "rgba(20,49,9,0.05)", border: "2px dashed rgba(20,49,9,0.15)" }}
//                     >
//                         <span className="material-symbols-outlined text-[rgba(20,49,9,0.25)]">add_photo_alternate</span>
//                     </div>
//                     <div>
//                         <p className="text-sm font-bold text-[#143109]">
//                             {form.name || "Product Name"}
//                         </p>
//                         <p className="text-xs text-[rgba(31,41,55,0.4)] mt-0.5">
//                             {form.category || "Category"} · {form.stock ? `${form.stock} in stock` : "—"}
//                         </p>
//                         <p className="text-base font-extrabold text-[#143109] mt-1">
//                             {form.price ? `₹${Number(form.price).toLocaleString("en-IN")}` : "₹—"}
//                         </p>
//                     </div>
//                 </div>

//                 <form onSubmit={handleSave} noValidate className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <F label="Product Name" required error={errors.name}>
//                             <input name="name" value={form.name} onChange={handleChange}
//                                 placeholder="e.g. Basmati Rice 5kg" className={fieldCls} />
//                         </F>
//                         <F label="Category" hint="optional">
//                             <input name="category" value={form.category} onChange={handleChange}
//                                 placeholder="e.g. Groceries" className={fieldCls} />
//                         </F>
//                         <F label="Selling Price (₹)" required error={errors.price}>
//                             <input name="price" value={form.price} onChange={handleChange}
//                                 type="number" min="0" placeholder="0.00" className={fieldCls} />
//                         </F>
//                         <F label="Stock Quantity" hint="optional">
//                             <input name="stock" value={form.stock} onChange={handleChange}
//                                 type="number" min="0" placeholder="0" className={fieldCls} />
//                         </F>
//                     </div>
//                     <F label="Description" hint="optional">
//                         <textarea name="description" value={form.description} onChange={handleChange}
//                             rows={2} placeholder="Brief product description…"
//                             className={`${fieldCls} resize-none`} />
//                     </F>

//                     {apiError && (
//                         <div className="flex items-start gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
//                             <span className="material-symbols-outlined text-sm mt-0.5 shrink-0">error</span>
//                             {apiError}
//                         </div>
//                     )}
//                 </form>
//             </div>

//             {/* ── Fixed bottom bar ────────────────────────────────────────────── */}
//             <div
//                 className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 lg:px-16 py-5"
//                 style={{ background: "#143109", borderTop: "1px solid rgba(181,191,161,0.15)" }}
//             >
//                 <button
//                     onClick={handleSkip}
//                     className="text-sm font-semibold transition-opacity hover:opacity-70"
//                     style={{ color: "rgba(181,191,161,0.55)" }}
//                 >
//                     Skip for now
//                 </button>

//                 <button
//                     onClick={handleSave}
//                     disabled={saving}
//                     className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-[#143109] transition-all active:scale-95 disabled:opacity-50"
//                     style={{ background: "#b5bfa1" }}
//                 >
//                     {saving && <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>}
//                     {saving ? "Saving…" : "Add Product & Continue"}
//                     {!saving && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
//                 </button>
//             </div>
//         </div>
//     );
// };