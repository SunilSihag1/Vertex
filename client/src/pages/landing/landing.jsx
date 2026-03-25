import { useEffect, useState } from "react";
import api from "../../service/api"
import useRazorpay from "../../hooks/useRazorpay";

const Landing = () => {
    const [plans, setPlans] = useState([]);
    const [billing, setBilling] = useState("monthly");

    // ── All payment logic lives in this hook ──────────────────────────────────
    const {
        initiatePurchase,
        isLoading: isPaymentLoading,
        error: paymentError,
        isSuccess: paymentSuccess,
        subscription,
        reset: resetPayment,
    } = useRazorpay();

    // ── Fetch plans on mount ──────────────────────────────────────────────────
    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await api.get("/plans");
                setPlans(res.data.data);
            } catch (err) {
                console.error("Failed to fetch plans:", err);
            }
        };
        fetchPlans();
    }, []);

    return (
        <>
            <main>
                {/* {
                    paymentError && (
                        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 text-sm text-center">
                            {paymentError}
                            <button onClick={resetPayment} className="ml-3 underline">Dismiss</button>
                        </div>
                    )
                }

                SUCCESS BANNER — show after subscription activates:

                {
                    paymentSuccess && subscription && (
                        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300 text-sm text-center">
                            ✓ Subscription activated! Your plan is active until {new Date(subscription.end_date).toLocaleDateString()}.
                        </div>
                    )
                }

                LOADING STATE on plan buttons — add`disabled` + spinner:

                <button
                    onClick={() => handleSelectPlan(plans[0]._id)}
                    disabled={isPaymentLoading}
                    className="... disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isPaymentLoading ? "Processing..." : "Start Free Trial"}
                </button> */}

                <section className="relative pt-20 pb-20 md:pt-14 md:pb-14 overflow-hidden bg-background-light dark:bg-background-dark">
                    <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sage/20 rounded-full blur-[120px]"></div>
                    <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col gap-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-primary dark:text-sage text-[10px] font-black uppercase tracking-[0.2em]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-sage opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-red-500"></span>
                                </span>
                                Smart Inventory 1.0 Is Live
                            </div>
                            <div className="m-auto">
                                <h1 className="text-6xl md:text-8xl font-extrabold text-primary dark:text-white leading-[0.95] tracking-tight font-display max-[426px]:text-5xl">
                                    Open Your <br /><span className="text-sage italic">Store.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium max-[426px]:text-lg">
                                    All-in-one platform for selling online, managing deliveries, and growing your business smarter.
                                </p>
                                <div className="flex flex-wrap gap-5 mt-8">
                                    <button className="shimmer-btn bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer">
                                        Get Started Free
                                    </button>
                                    <button className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-charcoal dark:text-white px-10 py-5 rounded-full font-bold text-lg hover:border-sage transition-all flex items-center gap-2 cursor-pointer">
                                        Watch Demo
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
                                    </button>
                                </div>
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
                                    <div className="p-4 bg-white"
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
                                <h2 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-sage mb-8 tracking-tight font-display">
                                    Engineered for <br />Seamless Control</h2>
                                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">From warehousing to customer experience, we
                                    synchronize every touchpoint of your commerce ecosystem.</p>
                            </div>
                            <div className="pb-2">
                                <a className="group text-primary dark:text-sage font-bold flex items-center gap-2 text-lg" href="#">
                                    View all modules
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="group p-10 rounded-2xl bg-white dark:bg-sage border border-slate-200 dark:border-slate-500 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 dark:bg-primary/70 rounded-full transition-all group-hover:scale-150"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-sage dark:from-primary to-sage/80 dark:to-primary-80 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-sage/10 relative z-10">
                                    <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Stock Intelligence</h3>
                                <p className="text-slate-500 dark:text-primary leading-relaxed font-medium">Predictive restocking and multi-channel synchronization powered by neural supply chains.</p>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 max-[768px]:opacity-100 group-hover:opacity-100 transition-opacity">
                                    <a href="#">Explore module</a> <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                            <div className="group p-10 rounded-2xl bg-white dark:bg-sage border border-slate-200 dark:border-slate-500 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 dark:bg-primary rounded-full transition-all group-hover:scale-150"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-primary/10 relative z-10">
                                    <span className="material-symbols-outlined text-sage text-3xl">storefront</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Store Experience</h3>
                                <p className="text-slate-500 dark:text-primary leading-relaxed font-medium">Next-gen storefront builder with headless capabilities and 0.2s load times for maximum conversion.</p>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 max-[768px]:opacity-100 group-hover:opacity-100 transition-opacity">
                                    <a href="#">Explore module</a> <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                            <div className="group p-10 rounded-2xl bg-white dark:bg-sage border border-slate-200 dark:border-slate-500 hover:border-sage/50 transition-all hover:shadow-[0_40px_80px_-15px_rgba(181,191,161,0.2)] hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 dark:bg-primary/70 rounded-full transition-all group-hover:scale-150"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-sage dark:from-primary to-sage/80 dark:to-primary-80 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-sage/10 relative z-10">
                                    <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display">Unified Analytics</h3>
                                <p className="text-slate-500 dark:text-primary leading-relaxed font-medium">A single source of truth for revenue, customer lifetime value, and operational overheads.</p>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 max-[768px]:opacity-100 group-hover:opacity-100 transition-opacity">
                                    <a href="#">Explore module</a> <span className="material-symbols-outlined text-base">chevron_right</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-primary pt-40 pb-32 relative overflow-hidden">
                    <div className="grainy-bg absolute inset-0"></div>
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-sage/10 blur-[150px] rounded-full"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-sage font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">Deep Insights</span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight font-display">
                                    Retail clarity <br /><span className="text-sage">without the noise.</span></h2>
                                <p className="text-sage/70 text-lg leading-relaxed mb-12 font-medium">
                                    Replace spreadsheets with living data. Our dashboard aggregates every signal from your supply chain into actionable growth strategies.
                                </p>
                                <div className="grid gap-6">
                                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-colors">
                                        <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center text-sage">
                                            <span className="material-symbols-outlined">analytics</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Predictive Forecasting</h4>
                                            <p className="text-sage/60 text-sm">Know your next month's sales today with 94% accuracy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:bg-white/10 transition-colors">
                                        <div className="w-14 h-14 bg-red-400/10 rounded-xl flex items-center justify-center text-red-400">
                                            <span className="material-symbols-outlined">radar</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Real-time Anomaly Detection</h4>
                                            <p className="text-sage/60 text-sm">Instant alerts on shipping delays or inventory shrinkage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-sage/5 rounded-full blur-[80px]"></div>
                                <div className="glass-card rounded-[2rem] p-4 border-white/20 shadow-2xl relative z-10 overflow-hidden">
                                    <div className="absolute inset-0 grainy-bg opacity-10"></div>
                                    <div className="aspect-video bg-cover bg-center rounded-2xl"
                                        style={{
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDflMkxqgOld8VMuYqpqGww7UEbPFBwnWlNPlcHPY-5UQmZzgo6X79pNPZi_pjgYagbwnD0_PfRU-tybG4D7ZuB0Jr2Cs5JlIHLVxC-iIp_y6zOecqvFQnnElSX7eOprJJ9rDs4Zh8w41F5lyObHhcA03JxAZr6Ds14R8_M75a7FldAwmDS4iU4muxtq0JDXLawiEqMpHnGilmqO1bADP4P8Wvs_T1Bs4kzj9Gp7XNrZnj9NwJVzpjeonWCCvlojvZc8uym_7gF4Ps')"
                                        }}>
                                        <div className="w-full h-full bg-primary/20 backdrop-blur-[2px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-sage mb-6 tracking-tight font-display">
                                Scale Your Vision
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
                                Flexible pricing architecture designed to grow from boutique to enterprise.
                            </p>
                        </div>

                        <div className="flex justify-center mb-14">
                            <div className="flex items-center bg-slate-100 dark:bg-primary border border-slate-200 dark:border-slate-500 rounded-full p-1">
                                <button
                                    onClick={() => setBilling("monthly")}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${billing === "monthly" ? "bg-white dark:bg-sage text-primary" : "text-slate-500 dark:text-slate-300"}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setBilling("yearly")}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 cursor-pointer ${billing === "yearly" ? "bg-white dark:bg-sage text-primary" : "text-slate-500 dark:text-slate-300"}`}
                                >
                                    Yearly
                                    <span className="bg-sage text-primary text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans[0] && (
                                <div className="bg-slate-50 dark:bg-primary border border-slate-100 dark:border-slate-500 p-10 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2">
                                    <h3 className="text-xl font-bold mb-1 text-primary dark:text-sage">{plans[0].name}</h3>
                                    <p className="text-slate-400 dark:text-slate-300 text-sm mb-8 font-medium italic">For solo creators</p>
                                    <div className="text-5xl font-extrabold mb-8 text-primary dark:text-sage font-display">
                                        ₹{billing === "monthly" ? plans[0].monthlyPrice : plans[0].yearlyPrice}
                                        <span className="text-slate-400 dark:text-slate-300 text-lg font-normal">/{billing === "monthly" ? "month" : "year"}</span>
                                    </div>
                                    <ul className="space-y-5 mb-10">
                                        {plans[0].features?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-500 dark:text-slate-300 font-medium">
                                                <span className="material-symbols-outlined text-sage text-xl">check_circle</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleSelectPlan(plans[0]._id)}
                                        className="w-full py-4 border-2 border-slate-200 dark:border-slate-400 dark:bg-sage rounded-full font-bold text-primary hover:bg-white dark:hover:bg-sage/80 transition-all cursor-pointer"
                                    >
                                        {plans[0].monthlyPrice === 0 ? "Get Started" : `Start ${plans[0].trialDays}-Day Trial`}
                                    </button>
                                </div>
                            )}

                            {plans[1] && (
                                <div className="bg-primary dark:bg-sage text-white dark:text-primary dark:border dark:border-slate-500 p-10 rounded-[2.5rem] relative shadow-[0_30px_60px_-15px_rgba(20,49,9,0.3)] hover:-translate-y-2 transition-all">
                                    <div className="grainy-bg absolute inset-0 opacity-10"></div>
                                    {plans[1].isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage dark:bg-primary dark:border dark:border-slate-500 text-primary dark:text-sage text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                            Best Value
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-1 text-sage dark:text-primary">{plans[1].name}</h3>
                                    <p className="text-sage/60 dark:text-primary/90 text-sm mb-8 font-medium italic">For scaling teams</p>
                                    <div className="text-5xl font-extrabold mb-8 font-display text-white dark:text-primary">
                                        ₹{billing === "monthly" ? plans[1].monthlyPrice : plans[1].yearlyPrice}
                                        <span className="text-sage/50 dark:text-primary/90 text-lg font-normal">/{billing === "monthly" ? "month" : "year"}</span>
                                    </div>
                                    <ul className="space-y-5 mb-10">
                                        {plans[1].features?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 font-medium">
                                                <span className="material-symbols-outlined text-sage dark:text-primary/90 text-xl">verified</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleSelectPlan(plans[1]._id)}
                                        className="shimmer-btn w-full py-4 bg-sage dark:bg-primary text-primary dark:text-sage rounded-full font-bold text-lg shadow-xl shadow-black/20 hover:scale-[1.02] transition-transform cursor-pointer"
                                    >
                                        {`Start ${plans[1].trialDays}-Day Trial`}
                                    </button>
                                </div>
                            )}

                            {plans[2] && (
                                <div className="bg-slate-50 dark:bg-primary border border-slate-100 dark:border-slate-500 p-10 rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2">
                                    <h3 className="text-xl font-bold mb-1 text-primary dark:text-sage">{plans[2].name}</h3>
                                    <p className="text-slate-400 dark:text-slate-300 text-sm mb-8 font-medium italic">For global operations</p>
                                    <div className="text-5xl font-extrabold mb-8 text-primary dark:text-sage font-display">
                                        ₹{billing === "monthly" ? plans[2].monthlyPrice : plans[2].yearlyPrice}
                                        <span className="text-slate-400 dark:text-slate-300 text-lg font-normal">/{billing === "monthly" ? "month" : "year"}</span>
                                    </div>
                                    <ul className="space-y-5 mb-10">
                                        {plans[2].features?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-500 dark:text-slate-300 font-medium">
                                                <span className="material-symbols-outlined text-sage text-xl">check_circle</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleSelectPlan(plans[2]._id)}
                                        className="w-full py-4 border-2 border-slate-200 dark:border-slate-400 dark:bg-sage rounded-full font-bold text-primary hover:bg-white dark:hover:bg-sage/80 transition-all cursor-pointer"
                                    >
                                        Talk to Sales
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="px-6 pb-32">
                    <div className="max-w-6xl mx-auto rounded-[3.5rem] p-16 md:p-32 text-center relative overflow-hidden bg-primary shadow-3xl">
                        <div className="grainy-bg absolute inset-0 opacity-10"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[80px] rounded-full"></div>
                        <div className="relative z-10 flex flex-col items-center gap-10">
                            <h2 className="text-5xl md:text-7xl max-[425px]:text-4xl font-extrabold text-white tracking-tight font-display max-w-4xl">
                                Ready to redefine your retail engine?</h2>
                            <p className="text-sage/70 text-xl md:text-xl max-[425px]:text-sm max-w-2xl leading-relaxed font-medium">
                                Join the 5,000+ merchants who transitioned from manual chaos to automated growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                                <button className="shimmer-btn bg-white text-primary px-12 py-6 rounded-full max-[426px]:rounded-3xl max-[426px]:px-6 font-black text-xl max-[426px]:text-sm hover:scale-105 transition-transform shadow-2xl cursor-pointer">
                                    Build My Store
                                </button>
                                <button className="bg-primary border border-white/20 text-white px-12 py-6 rounded-full max-[426px]:rounded-3xl max-[426px]:px-6 font-bold text-xl max-[426px]:text-sm hover:bg-white/5 transition-colors cursor-pointer">
                                    Request Pricing
                                </button>
                            </div>
                            <p className="text-sage/40 text-sm font-bold uppercase tracking-widest">No credit card required • Instant setup</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Landing;