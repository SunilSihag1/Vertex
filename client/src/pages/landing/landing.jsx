import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

const Landing = () => {
    return (
        <>
            <Navbar />
            <main>

                <section className="relative pt-32 pb-32 md:pt-48 md:pb-52 overflow-hidden bg-background-light dark:bg-background-dark">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sage/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col gap-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-primary dark:text-sage text-[10px] font-black uppercase tracking-[0.2em]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-sage opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-red-500"></span>
                                </span>
                                Smart Inventory 1.0 Is Live
                            </div>
                            <h1 className="text-6xl md:text-8xl font-extrabold text-primary dark:text-white leading-[0.95] tracking-tight font-display">
                                Evolve Your <br /><span className="text-sage italic">Storefront.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
                                The intelligence layer for high-growth retail. Unified commerce, smart logistics, and AI insights.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <button className="shimmer-btn bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105">
                                    Get Started Free
                                </button>
                                <button className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-charcoal dark:text-white px-10 py-5 rounded-full font-bold text-lg hover:border-sage transition-all flex items-center gap-2">
                                    Watch Demo
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative lg:h-[600px] flex items-center justify-center">
                            <div className="absolute top-10 -right-4 z-20 float-1">
                                <div className="glass-card p-4 rounded-2xl shadow-2xl w-48 border-l-4 border-l-primary">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-sm">notifications</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Notification</span>
                                    </div>
                                    <p className="text-xs font-bold text-primary">New Order: #8824</p>
                                    <p className="text-[10px] text-slate-500">$249.00 processed</p>
                                </div>
                            </div>
                            <div className="absolute bottom-12 -left-8 z-20 float-2">
                                <div className="glass-card p-4 rounded-2xl shadow-2xl w-56 border-l-4 border-l-sage">
                                    <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Inventory Health</p>
                                    <div className="flex gap-2">
                                        <div className="h-1 flex-1 bg-primary rounded-full"></div>
                                        <div className="h-1 flex-1 bg-primary rounded-full"></div>
                                        <div className="h-1 flex-1 bg-sage rounded-full"></div>
                                    </div>
                                    <p className="text-[10px] font-bold text-primary mt-2">Stock Optimization: 92%</p>
                                </div>
                            </div>
                            <div className="relative z-10 w-full group">
                                <div className="absolute -inset-4 bg-sage/10 rounded-[3rem] blur-2xl group-hover:bg-sage/20 transition-all"></div>
                                <div className="relative rounded-2xl border border-white/50 bg-white shadow-[0_30px_60px_-15px_rgba(20,49,9,0.2)] overflow-hidden">
                                    <div className="flex items-center justify-between px-5 py-4 bg-slate-50/80 border-b border-slate-200/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="p-4 bg-white" data-alt="Dashboard Hero Image"
                                        style={{
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgikHaY7hFTfMEKgLF5fdS5G0XJFwoiCVSimYibdYfT4XkCPL2bTz2-ssvgCLwp_4tv-N5owRBzGY3-T5Dgax96IKIxOTw9Jt1MNMX0QOkiVTuTRVDE3F8xrszjphivu64rFj6yeYLqZiGeVDkFX3tqDZ2033L5eQ_R7mEIh0sMbEzh6KJWa1nkidVkbz2zLx5FqGLEs3f6fh0OzI94O4klE4ORZMocUkSsDVKlgqaG7SMGuZqkn4LDkXwxoEUxd6nJWAYRuHgHjk')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        <div className="aspect-[4/3] flex items-center justify-center bg-white/40 backdrop-blur-[2px] rounded-xl border border-white/40">
                                            <span className="material-symbols-outlined text-primary/10 text-8xl">data_exploration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tight font-display">
                                    Engineered for <br />Seamless Control</h2>
                                <p className="text-xl text-slate-500 font-medium">From warehousing to customer experience, we
                                    synchronize every touchpoint of your commerce ecosystem.</p>
                            </div>
                            <div className="pb-2">
                                <a className="group text-primary font-bold flex items-center gap-2 text-lg" href="#">
                                    View all modules
                                    <span
                                        className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div
                                className="group p-10 rounded-2xl bg-white border border-slate-100 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute -right-12 -top-12 w-32 h-32 bg-sage/5 rounded-full transition-all group-hover:scale-150">
                                </div>
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-sage to-sage/40 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-sage/10 relative z-10">
                                    <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Stock Intelligence</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">Predictive restocking and multi-channel
                                    synchronization powered by neural supply chains.</p>
                                <div
                                    className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore module <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                            <div
                                className="group p-10 rounded-2xl bg-white border border-slate-100 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full transition-all group-hover:scale-150">
                                </div>
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-primary/10 relative z-10">
                                    <span className="material-symbols-outlined text-sage text-3xl">storefront</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Store Experience</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">Next-gen storefront builder with headless
                                    capabilities and 0.2s load times for maximum conversion.</p>
                                <div
                                    className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore module <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                            <div
                                className="group p-10 rounded-2xl bg-white border border-slate-100 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div
                                    className="absolute -right-12 -top-12 w-32 h-32 bg-sage/5 rounded-full transition-all group-hover:scale-150">
                                </div>
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-sage to-sage/40 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-sage/10 relative z-10">
                                    <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Unified Analytics</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">A single source of truth for revenue,
                                    customer lifetime value, and operational overheads.</p>
                                <div
                                    className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore module <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="h-32 bg-primary organic-divider -mb-16 relative z-10">
                    <div className="grainy-bg absolute inset-0"></div>
                </div>


                <section className="bg-primary pt-40 pb-32 relative overflow-hidden">
                    <div className="grainy-bg absolute inset-0"></div>
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-sage/10 blur-[150px] rounded-full"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-sage font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">Deep
                                    Insights</span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight font-display">
                                    Retail clarity <br /><span className="text-sage">without the noise.</span></h2>
                                <p className="text-sage/70 text-lg leading-relaxed mb-12 font-medium">
                                    Replace spreadsheets with living data. Our dashboard aggregates every signal from your
                                    supply chain into actionable growth strategies.
                                </p>
                                <div className="grid gap-6">
                                    <div
                                        className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-colors">
                                        <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                                            <span className="material-symbols-outlined">analytics</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Predictive Forecasting</h4>
                                            <p className="text-sage/60 text-sm">Know your next month's sales today with 94%
                                                accuracy.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-colors">
                                        <div
                                            className="w-14 h-14 bg-red-400/10 rounded-xl flex items-center justify-center text-red-400">
                                            <span className="material-symbols-outlined">radar</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Real-time Anomaly Detection</h4>
                                            <p className="text-sage/60 text-sm">Instant alerts on shipping delays or inventory
                                                shrinkage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-sage/5 rounded-full blur-[80px]"></div>
                                <div
                                    className="glass-card rounded-[2rem] p-4 border-white/20 shadow-2xl relative z-10 overflow-hidden">
                                    <div className="absolute inset-0 grainy-bg opacity-10"></div>
                                    <div className="aspect-video bg-cover bg-center rounded-2xl"
                                        style={{
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDflMkxqgOld8VMuYqpqGww7UEbPFBwnWlNPlcHPY-5UQmZzgo6X79pNPZi_pjgYagbwnD0_PfRU-tybG4D7ZuB0Jr2Cs5JlIHLVxC-iIp_y6zOecqvFQnnElSX7eOprJJ9rDs4Zh8w41F5lyObHhcA03JxAZr6Ds14R8_M75a7FldAwmDS4iU4muxtq0JDXLawiEqMpHnGilmqO1bADP4P8Wvs_T1Bs4kzj9Gp7XNrZnj9NwJVzpjeonWCCvlojvZc8uym_7gF4Ps')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}>
                                        <div className="w-full h-full bg-primary/20 backdrop-blur-[2px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="py-32 bg-white relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight font-display">Scale
                                Your Vision</h2>
                            <p className="text-slate-500 font-medium text-lg">Flexible pricing architecture designed to grow from
                                boutique to enterprise.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div
                                className="bg-slate-50 border border-slate-100 p-10 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2">
                                <h3 className="text-xl font-bold mb-1 text-primary">Essentials</h3>
                                <p className="text-slate-400 text-sm mb-8 font-medium italic">For solo creators</p>
                                <div className="text-5xl font-extrabold mb-8 text-primary font-display">$0<span
                                    className="text-slate-400 text-lg font-normal">/mo</span></div>
                                <ul className="space-y-5 mb-10">
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span> 50
                                        Products
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span> Core
                                        Dashboard
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span> 1 Physical
                                        Store
                                    </li>
                                </ul>
                                <button
                                    className="w-full py-4 border-2 border-slate-200 rounded-full font-bold text-primary hover:bg-white transition-all">Get
                                    Started</button>
                            </div>
                            <div
                                className="bg-primary text-white p-10 rounded-[2.5rem] relative shadow-[0_30px_60px_-15px_rgba(20,49,9,0.3)] hover:-translate-y-2 transition-all">
                                <div className="grainy-bg absolute inset-0 opacity-10"></div>
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage text-primary text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                    Best Value</div>
                                <h3 className="text-xl font-bold mb-1 text-sage">Growth Pro</h3>
                                <p className="text-sage/60 text-sm mb-8 font-medium italic">For scaling teams</p>
                                <div className="text-5xl font-extrabold mb-8 font-display text-white">$49<span
                                    className="text-sage/50 text-lg font-normal">/mo</span></div>
                                <ul className="space-y-5 mb-10">
                                    <li className="flex items-center gap-3 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">verified</span> Unlimited
                                        Inventory
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">verified</span> Store
                                        Experience Builder
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">verified</span> AI Growth
                                        Assistant
                                    </li>
                                    <li className="flex items-center gap-3 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">verified</span> Multi-region
                                        Sync
                                    </li>
                                </ul>
                                <button
                                    className="shimmer-btn w-full py-4 bg-sage text-primary rounded-full font-bold text-lg shadow-xl shadow-black/20 hover:scale-[1.02] transition-transform">Start
                                    14-Day Trial</button>
                            </div>
                            <div
                                className="bg-slate-50 border border-slate-100 p-10 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2">
                                <h3 className="text-xl font-bold mb-1 text-primary">Enterprise</h3>
                                <p className="text-slate-400 text-sm mb-8 font-medium italic">For global operations</p>
                                <div className="text-5xl font-extrabold mb-8 text-primary font-display">$99<span
                                    className="text-slate-400 text-lg font-normal">/mo</span></div>
                                <ul className="space-y-5 mb-10">
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span> Unlimited
                                        Nodes
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span> 24/7
                                        Priority Support
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-sage text-xl">check_circle</span>
                                        White-label API
                                    </li>
                                </ul>
                                <button
                                    className="w-full py-4 border-2 border-slate-200 rounded-full font-bold text-primary hover:bg-white transition-all">Talk
                                    to Sales</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="px-6 pb-32">
                    <div
                        className="max-w-6xl mx-auto rounded-[3.5rem] p-16 md:p-32 text-center relative overflow-hidden bg-primary shadow-3xl">
                        <div className="grainy-bg absolute inset-0 opacity-10"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[80px] rounded-full"></div>
                        <div className="relative z-10 flex flex-col items-center gap-10">
                            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight font-display max-w-4xl">
                                Ready to redefine your retail engine?</h2>
                            <p className="text-sage/70 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
                                Join the 5,000+ merchants who transitioned from manual chaos to automated growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                                <button
                                    className="shimmer-btn bg-white text-primary px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                                    Build My Store
                                </button>
                                <button
                                    className="bg-primary border border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/5 transition-colors">
                                    Request Pricing
                                </button>
                            </div>
                            <p className="text-sage/40 text-sm font-bold uppercase tracking-widest">No credit card required •
                                Instant setup</p>
                        </div>
                    </div>
                </section>
            </main >

            <Footer />

        </>
    );
};

export default Landing;