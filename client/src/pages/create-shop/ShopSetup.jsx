/* BasicShopSetup.jsx
 *
 * Create-shop form rendered for BASIC plan owners.
 * All three plan pages share the same structure right now,
 * but are kept separate so each can diverge independently.
 *
 * Props:
 *   isRevealed {boolean} — controls blur filter on the form
 */
import { useCreateShop, CATEGORIES, CURRENCIES } from "./useCreateShop";

/* ── Shared field styling ───────────────────────────────────── */
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

/* ── Component ──────────────────────────────────────────────── */
const ShopSetup = ({ isRevealed }) => {
    const { form, errors, saving, apiError, handleChange, handleSubmit } = useCreateShop();

    return (
        <>
            <div className="flex h-screen w-full">
                <aside className="hidden md:flex flex-col w-[35%] bg-primary-container p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-16">
                            <div className="w-10 h-10 bg-secondary-fixed rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                            </div>
                            <span className="text-2xl font-black text-white italic tracking-tighter">Vertex</span>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
                                Let's build your store
                            </h1>
                            <p className="text-on-primary-container text-lg max-w-sm">
                                Configure your retail presence with our enterprise-grade commerce engine.
                            </p>
                            <ul className="space-y-4 pt-8">
                                <li className="flex items-center gap-4 text-emerald-50/90">
                                    <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-medium">Branded store</span>
                                </li>
                                <li className="flex items-center gap-4 text-emerald-50/90">
                                    <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-medium">Inventory dashboard</span>
                                </li>
                                <li className="flex items-center gap-4 text-emerald-50/90">
                                    <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-medium">GST-ready invoices</span>
                                </li>
                                <li className="flex items-center gap-4 text-emerald-50/90">
                                    <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-medium">Team access control</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-auto relative z-10">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <div className="flex -space-x-3 mb-4">
                                <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="Female user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUJptdir0LV_BG9NYDbmsQDYDWqwbJRgLumlg-feSNo-6axqH19yRFn_jt2MEWWlmov8h_k5FVhUrCbh7GHPYyFonR8Y7nzq8sei2V7p7vQ3FjrS0hj-6DYlGt_wAmMWGMQEpyNpfigG3cJGLmmgqwotmv3_i2koAVmTyvIqk-BUklVsbV7J6fbJsUcjb2M-q9FC2uLL3MmC4zRU2MjpkXHJItgt617Oe0RqtiBegpJI5cChtZxSJaiJy1iLxFxj_J84sdEBu6h8" />
                                <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="Male user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4glwOvsMzl7SRHuwj1Jt5rSY4J5KcWrocWXDCLUzzHARihu8jkXlZ41wem79WWIeDnIReBy9GxWiD2yjF_gkCxqlU5bjAsHeDrv4Am4xdLEWLIUUBYy1GQF0c3-DbfgjU2vUpuaAjkAFsbrPLbWvnbD3LXz_FkKLjVYDJoDhyY4F3DFm_QlC5nsJcuBTIbz6YTs-cm2SFlMJDSOGXL_Y5_GkRMGaVTORd5S77u1IiNwJHwyZE3uamlFI9nlStaPr7_dLatY3d9qQ" />
                                <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="Customer user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnTfkd92eoB7Gov4jMXQKKSYHyTrFa4emeG7iTg_QaujdeW7gBMJEIHNSC4yj5bqqzhO9Jc-9MLCO5G0m6CpNeCVmfgzp5XYhtheJpGLitBeG_TPez_MbvwW0M9SAnZuh-edfeoiZuk6rDIk4NJEkChKPHIdYHBqZIVP0zbgZ1RJv17NP4cN3puHVKKibKLPid9fuaeiKCupDXMfZZKSZA_c-kM3AOvmsYx4BjetqhXvY3b5UYNDjuUQVnwK8UQh294IP5f63JQQ" />
                                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary-container text-xs font-bold border-2 border-primary-container">+5k</div>
                            </div>
                            <p className="text-white font-semibold">Trusted by 5,000+ merchants</p>
                            <p className="text-emerald-400/60 text-sm">Join the leading retail ecosystem.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-fixed rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-0 -left-24 w-64 h-64 bg-emerald-400 rounded-full blur-[100px]"></div>
                    </div>
                </aside>
                <main className="flex-1 bg-background-light dark:bg-background-dark flex flex-col relative">
                    <header className="w-full pt-10 px-8 lg:px-16 space-y-8 sticky bg-primary dark:bg-sage top-0 z-20 p-8">
                        <div className="flex items-center justify-between">
                            <span className="text-label-sm font-bold tracking-widest uppercase text-sage dark:text-primary opacity-60">Step 01 / 04</span>
                            <span className="text-label-sm font-semibold text-sage dark:text-primary underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity">Need Help?</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="space-y-3">
                                <div className="h-1.5 rounded-full bg-linear-to-r from-sage to-sage/40 dark:from-primary/40 dark:to-primary"></div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-sage dark:text-primary">Shop Profile</p>
                            </div>
                            <div className="space-y-3">
                                <div className="h-1.5 rounded-full bg-background-light/70"></div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-sage/50 dark:text-primary/50">Team</p>
                            </div>
                            <div className="space-y-3">
                                <div className="h-1.5 rounded-full bg-background-light/70"></div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-sage/50 dark:text-primary/50">Products</p>
                            </div>
                            <div className="space-y-3">
                                <div className="h-1.5 rounded-full bg-background-light/70"></div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-sage/50 dark:text-primary/50">Complete</p>
                            </div>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto px-8 lg:px-16 py-12 justify-items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <form className="max-w-3xl space-y-16 pb-32">
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
                                            {/* <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <span className="material-symbols-outlined text-white text-sm">edit</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Shop Name <span className="text-error">*</span></label>
                                        <input className="w-full bg-background-light dark:bg-primary/50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" placeholder="e.g. Green Leaf Organics" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Business Type</label>
                                        <select className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm appearance-none">
                                            <option>Select Industry</option>
                                            <option>Grocery</option>
                                            <option>Pharmacy</option>
                                            <option>Fashion</option>
                                            <option>Electronics</option>
                                            <option>Pet Supplies</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Shop Tagline</label>
                                        <textarea className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" placeholder="Tell customers what makes you special..." rows="2"></textarea>
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-on-surface tracking-tight">Owner Details</h2>
                                    <p className="text-on-surface-variant text-sm mt-1">Verification details for account security.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Mobile Number</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-on-surface-variant">+91</span>
                                            <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="tel" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Personal Email</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Aadhaar/PAN (Optional)</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="text" />
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-on-surface tracking-tight">Shop Contact</h2>
                                    <p className="text-on-surface-variant text-sm mt-1">Where customers can reach your business.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="md:col-span-3 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Official Business Email</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Receptionist No.</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-on-surface-variant">+91</span>
                                            <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" type="tel" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">WhatsApp Business (Optional)</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" placeholder="Same as receptionist?" type="tel" />
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8 p-8 bg-surface-container-low rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-on-surface">Operating Hours</h2>
                                        <p className="text-on-surface-variant text-xs mt-0.5">Define your store's availability.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-on-surface-variant">HOLIDAY TODAY</span>
                                        <button className="w-12 h-6 bg-surface-container-highest rounded-full relative p-1 transition-colors hover:bg-outline-variant" type="button">
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Open Time</label>
                                            <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary-fixed-dim" type="time" />
                                        </div>
                                        <span className="mt-6 text-on-surface-variant">to</span>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Close Time</label>
                                            <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary-fixed-dim" type="time" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">From Day</label>
                                            <select className="w-full bg-background-light dark:bg-primary/50  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 focus:ring-secondary-fixed-dim">
                                                <option>Monday</option>
                                            </select>
                                        </div>
                                        <span className="mt-6 text-on-surface-variant">to</span>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">To Day</label>
                                            <select className="w-full bg-background-light dark:bg-primary/50  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 focus:ring-secondary-fixed-dim">
                                                <option>Saturday</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-on-surface tracking-tight">Shop Address</h2>
                                    <p className="text-on-surface-variant text-sm mt-1">Where is your physical storefront located?</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="col-span-2 md:col-span-3 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Street Address</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim transition-all shadow-sm" placeholder="Building No, Street Name, Landmark" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">City</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim shadow-sm" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">State</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim shadow-sm" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Pincode</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary-fixed-dim shadow-sm" type="text" />
                                    </div>
                                    <div className="col-span-2 md:col-span-3">
                                        <div className="w-full h-48 rounded-2xl bg-surface-container-highest relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
                                                <img className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Stylized map showing shop location pin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRvAT4DCp4G86sfDsi59NxXUrLZQSlaakgzNW86Cct22wOXgG3TYXmSl2aFD3oqgAw1d_9Au65FAyYsTFC-qgeB3g0ym7Frr0wAjVVCAFeq5oBCSTG742V4YMJCbNa7RjFRIfriWCUaeOms-lJOwkEdyVQJ_LG7gzvKQwQACrGsO7xSh4Dj-Yls8yjV8AFsmPCdRRFGpUXTxrNNaqnwB5-_ZMT7EFBywP8APi-65j1HuZDa9eMXai_bPfMJV0eibWj-BUvbqpASU" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                                        <span className="text-sm font-bold text-primary">Pin on Google Maps</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-on-surface tracking-tight">Socials</h2>
                                    <p className="text-on-surface-variant text-sm mt-1">Help customers find your online presence.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 material-symbols-outlined text-lg">public</span>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 focus:ring-secondary-fixed-dim shadow-sm" placeholder="Website URL" type="url" />
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 material-symbols-outlined text-lg">photo_camera</span>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 focus:ring-secondary-fixed-dim shadow-sm" placeholder="Instagram Handle" type="text" />
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                    <footer className="w-full p-8 lg:px-16 bg-white/70 backdrop-blur-xl border-t border-surface-container-highest absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <span className="material-symbols-outlined text-sm text-secondary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                            <span className="text-xs font-medium italic">Your progress is auto-saved</span>
                        </div>
                        <button className="bg-primary shimmer-btn text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 group cursor-pointer" type="submit">
                            Save &amp; Continue
                            <span className="material-symbols-outlined text-secondary-fixed group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default ShopSetup;