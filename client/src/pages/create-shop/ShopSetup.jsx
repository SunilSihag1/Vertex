const ShopSetup = ({ isRevealed }) => {
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
                    <div className="w-full pt-10 px-8 lg:px-16 space-y-8 sticky bg-primary dark:bg-sage/50 top-0 z-20 p-8">
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
                    </div>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Shop Name <span className="text-error">*</span></label>
                                        <input className="w-full bg-background-light dark:bg-primary/50 border-none rounded-xl p-4 text-sm focus:ring-2 transition-all shadow-sm text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage" placeholder="e.g. Green Leaf Organics" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Business Type <span className="text-error">*</span></label>
                                        <select className="w-full bg-background-light dark:bg-[#112b08] border-none rounded-xl p-4 text-sm focus:ring-2 transition-all shadow-sm appearance-none text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage">
                                            <option>Select Industry</option>
                                            <option>Grocery</option>
                                            <option>Pharmacy</option>
                                            <option>Fashion</option>
                                            <option>Electronics</option>
                                            <option>Pet Supplies</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Shop Tagline</label>
                                        <textarea className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" placeholder="Tell customers what makes you special..." rows="2"></textarea>
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Owner Details</h2>
                                    <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Verification details for account security.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Full Name <span className="text-error">*</span></label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Mobile Number <span className="text-error">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary dark:text-sage">+91</span>
                                            <input className="w-full bg-background-light dark:bg-primary/50 border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="tel" placeholder="9016XXXXXX" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Personal Email <span className="text-error">*</span></label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="email" placeholder="email@domain.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Aadhaar/PAN (Optional)</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="text" placeholder="180012XXXXXX" />
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Shop Contact</h2>
                                    <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Where customers can reach your business.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="md:col-span-3 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Official Business Email <span className="text-error">*</span></label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="email" placeholder="email@domain.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Receptionist No. <span className="text-error">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-on-surface-variant">+91</span>
                                            <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-14 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" type="tel" placeholder="9327XXXXXX" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">WhatsApp Business (Optional)</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" placeholder="Same as receptionist?" type="tel" />
                                    </div>
                                </div>
                            </section>
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
                                            <input className="w-full bg-background-light dark:bg-primary/50 border-none rounded-lg p-3 text-sm focus:ring-2 text-primary dark:text-sage" type="time" />
                                        </div>
                                        <span className="mt-6 text-on-surface-variant">to</span>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Close Time</label>
                                            <input className="w-full bg-background-light dark:bg-primary/50 border-none rounded-lg p-3 text-sm focus:ring-2 text-primary dark:text-sage" type="time" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">From Day</label>
                                            <select className="w-full bg-background-light dark:bg-[#112b08]  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 text-primary dark:text-sage">
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                                <option>Sunday</option>
                                            </select>
                                        </div>
                                        <span className="mt-6 text-on-surface-variant">to</span>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">To Day</label>
                                            <select className="w-full bg-background-light dark:bg-[#112b08]  border-none rounded-lg p-3 text-sm appearance-none focus:ring-2 text-primary dark:text-sage">
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                                <option>Sunday</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Shop Address</h2>
                                    <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Where is your physical storefront located?</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="col-span-2 md:col-span-3 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Street Address</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage transition-all shadow-sm" placeholder="Building No, Street Name, Landmark" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">City</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage" type="text" placeholder="City" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">State</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage" type="text" placeholder="State" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary dark:text-sage">Pincode</label>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage" type="text" placeholder="360XXX" />
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
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary dark:text-sage tracking-tight">Socials</h2>
                                    <p className="text-primary/70 dark:text-sage/70 text-sm mt-1">Help customers find your online presence.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 dark:text-sage/50 material-symbols-outlined text-lg">public</span>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 ftext-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage shadow-sm" placeholder="Website URL" type="url" />
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 dark:text-sage/50 material-symbols-outlined text-lg">photo_camera</span>
                                        <input className="w-full bg-background-light dark:bg-primary/50  border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 text-primary/50 focus:text-primary dark:text-sage/50 dark:focus:text-sage shadow-sm" placeholder="Instagram Handle" type="text" />
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                    <div className="w-full p-8 lg:px-16 bg-primary dark:bg-sage/50 backdrop-blur-xl absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sage dark:text-primary">
                            <span className="material-symbols-outlined text-sm text-sage dark:text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                            <span className="text-xs font-medium italic">Your progress is auto-saved</span>
                        </div>
                        <button className="bg-primary shimmer-btn text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 group cursor-pointer" type="submit">
                            Save &amp; Continue
                            <span className="material-symbols-outlined text-secondary-fixed group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ShopSetup;