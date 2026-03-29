const Dashboard = () => {
    return (

        // colors: {
        //     "on-secondary-fixed-variant": "#3e4c16",
        //     "primary": "#041b00",
        //     "tertiary-fixed": "#ffd8eb",
        //     "inverse-on-surface": "#f0f1f2",
        //     "primary-container": "#143109",
        //     "outline-variant": "#c3c8bb",
        //     "on-primary-fixed": "#052100",
        //     "on-primary": "#ffffff",
        //     "surface-container-high": "#e7e8e9",
        //     "on-tertiary-fixed-variant": "#673754",
        //     "surface-container-highest": "#e1e3e4",
        //     "on-primary-fixed-variant": "#304e23",
        //     "surface": "#f8f9fa",
        //     "error-container": "#ffdad6",
        //     "error": "#ba1a1a",
        //     "on-tertiary-fixed": "#340b27",
        //     "outline": "#73796e",
        //     "inverse-primary": "#add199",
        //     "surface-container": "#edeeef",
        //     "surface-dim": "#d9dadb",
        //     "on-secondary-fixed": "#161f00",
        //     "on-background": "#191c1d",
        //     "tertiary-container": "#461b37",
        //     "surface-container-lowest": "#ffffff",
        //     "surface-bright": "#f8f9fa",
        //     "secondary-container": "#d6e7a1",
        //     "tertiary": "#2d0622",
        //     "surface-variant": "#e1e3e4",
        //     "primary-fixed": "#c8edb3",
        //     "inverse-surface": "#2e3132",
        //     "on-tertiary-container": "#ba80a1",
        //     "on-error-container": "#93000a",
        //     "on-secondary-container": "#5a682f",
        //     "primary-fixed-dim": "#add199",
        //     "on-error": "#ffffff",
        //     "on-secondary": "#ffffff",
        //     "on-surface-variant": "#43483f",
        //     "surface-container-low": "#f3f4f5",
        //     "secondary-fixed-dim": "#bdce89",
        //     "secondary-fixed": "#d9eaa3",
        //     "tertiary-fixed-dim": "#f4b4d7",
        //     "surface-tint": "#476739",
        //     "on-tertiary": "#ffffff",
        //     "on-primary-container": "#799b68",
        //     "background": "#f8f9fa",
        //     "secondary": "#56642b",
        //     "on-surface": "#191c1d"
        // },
        // fontFamily: {
        //     "headline": ["Inter"],
        //     "body": ["Inter"],
        //     "label": ["Inter"]
        // },

        <main className="ml-64 min-h-screen pb-20">
            <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto z-40 bg-emerald-950 dark:bg-black font-inter text-sm tracking-wide font-medium shadow-[24px_0_48px_rgba(4,27,0,0.08)] flex flex-col p-6 space-y-8 no-line">
                <div className="grainy-bg absolute inset-0"></div>
                <div className="relative z-10 flex items-center space-x-3">
                    <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tighter text-white">Vertex</h1>
                        <p className="text-[10px] text-emerald-400/70 font-bold uppercase tracking-widest">Retail Management</p>
                    </div>
                </div>

                <div className="relative z-10 bg-emerald-900/40 p-3 rounded-2xl flex items-center space-x-3 border border-white/5">
                    <img alt="Sunil Sihag" className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/20" data-alt="Professional headshot of a middle-aged Indian man with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6TQxFiNC94mPVQTwZX0dOivchUkEcRDWkJwTJxELGh0ud5Jm6H1PoBiimqtwg2LMAY1BRW9TQctRi3uau9VRbCnnn2h8LmYi3aLyrW60gL-uocufuYzYpdi_czDB8Hclzk5oDGJeNzrDcGCmk8nG05hZp7XXoPurcCUU5yBACgvgI2PgjJehpf0m18jwdg-5sPutU4KjAyt7pmUyDVShXhR-zYuoP41zdrgPU-7ISaEoj4A6ocwZ2u6Tf2QSXqFqMIAZNqjEatuk" />
                    <div className="overflow-hidden">
                        <p className="text-white font-semibold truncate">Sunil Sihag</p>
                        <p className="text-emerald-300/60 text-xs truncate">Owner • Premium</p>
                    </div>
                </div>
                <nav className="relative z-10 flex flex-col space-y-1">
                    <a className="flex items-center space-x-3 px-4 py-3 bg-emerald-800/50 text-white rounded-xl shadow-inner transition-all duration-200" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                        <span>Overview</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">storefront</span>
                        <span>Store</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">payments</span>
                        <span>Sales</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span>Purchase</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">group</span>
                        <span>Customers</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">account_balance</span>
                        <span>Accounting</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">badge</span>
                        <span>Team</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">assessment</span>
                        <span>Reports</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </a>
                </nav>
                <div className="mt-auto relative z-10 pt-6 border-t border-white/5 space-y-1">
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">help_outline</span>
                        <span>Support</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-emerald-300/70 hover:text-emerald-50 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">contact_support</span>
                        <span>Help Center</span>
                    </a>
                </div>
            </aside>
            <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md flex items-center justify-between px-8 py-4 no-line">
                <div className="flex items-center space-x-6">
                    <div>
                        <h2 className="text-xl font-bold text-primary tracking-tight">Good morning, Sunil 👋</h2>
                        <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Dashboard Overview • Today, 24 May 2024</p>
                    </div>
                    <div className="relative w-90">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-secondary-fixed" placeholder="Search orders, products, or customers..." type="text" />
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex bg-surface-container-low p-1 rounded-xl">
                        <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white shadow-sm text-primary">Date Range</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary">Locations</button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary">Channels</button>
                    </div>
                    <button className="bg-primary-container text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-lg shadow-primary-container/20">
                        <span className="material-symbols-outlined text-sm">add</span>
                        <span>Quick Action</span>
                    </button>
                    <div className="flex items-center space-x-2 border-l pl-4 ml-2 border-outline-variant/30">
                        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="px-8 space-y-8 mt-4">
                <section className="bg-primary-container rounded-2xl p-6 text-white relative overflow-hidden flex items-center justify-between no-line">
                    <div className="grainy-bg absolute inset-0 opacity-10"></div>
                    <div className="relative z-10 flex items-center space-x-6">
                        <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-primary-container">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Your Free Trial is 85% Complete</h3>
                            <p className="text-on-primary-container/80 text-sm">Upgrade to Premium to unlock unlimited inventory and advanced accounting.</p>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center space-x-8">
                        <div className="w-48 space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-primary-container">
                                <span>26 Days Left</span>
                                <span>85%</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-secondary-fixed w-[85%] rounded-full shadow-[0_0_12px_rgba(217,234,163,0.5)]"></div>
                            </div>
                        </div>
                        <button className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-tight hover:scale-105 transition-transform">
                            Upgrade Now
                        </button>
                    </div>
                </section>

                <section className="grid grid-cols-6 gap-4">
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Sales</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight">₹30,172</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">+12%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Sold Qty</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight">504</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">+8%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Stock Value</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-primary-container">₹60.78 L</h4>
                            <span className="material-symbols-outlined text-outline text-sm">inventory_2</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Purchase Cost</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight">₹12,450</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-bold">+2%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Gross Profit</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-secondary">₹19,198</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">+15%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Expenses</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight">₹4,200</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">-5%</span>
                        </div>
                    </div>
                    <div className="col-span-6 grid grid-cols-6 gap-4">
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">Avg Order Value</p>
                            <p className="font-bold text-on-surface">₹598.65</p>
                        </div>
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">New Customers</p>
                            <p className="font-bold text-on-surface">24</p>
                        </div>
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">Tax Payable</p>
                            <p className="font-bold text-on-surface">₹1,245</p>
                        </div>
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">Out of Stock</p>
                            <p className="font-bold text-error">12 Items</p>
                        </div>
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">Low Stock</p>
                            <p className="font-bold text-on-secondary-container">32 Items</p>
                        </div>
                        <div className="bg-surface-container-low p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[9px] font-bold text-outline uppercase tracking-tighter">Active Coupons</p>
                            <p className="font-bold text-on-surface">04</p>
                        </div>
                    </div>
                </section>
                <section className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="shrink-0 bg-primary-container text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        <span>New Sale</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">receipt_long</span>
                        <span>New Invoice</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">inventory</span>
                        <span>Add Product</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">person_add</span>
                        <span>New Customer</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        <span>Purchase Order</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        <span>Expense</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">swap_horiz</span>
                        <span>Stock Transfer</span>
                    </button>
                    <button className="shrink-0 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-outline-variant/30 hover:bg-surface-container-low transition-all flex items-center space-x-2">
                        <span className="material-symbols-outlined text-sm">label</span>
                        <span>Print Labels</span>
                    </button>
                </section>
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="font-bold text-primary">Sales vs Purchase</h3>
                                <p className="text-xs text-outline font-medium">Weekly comparison analysis</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                                    <span className="text-[10px] font-bold uppercase text-outline">Sales</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-secondary-fixed"></div>
                                    <span className="text-[10px] font-bold uppercase text-outline">Purchase</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 flex items-end justify-between px-2">
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[40%] rounded-t-sm transition-all group-hover:h-[45%]"></div>
                                <div className="w-4 bg-secondary-fixed h-[25%] rounded-t-sm transition-all group-hover:h-[30%]"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[60%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[40%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[85%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[15%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[55%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[45%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[90%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[20%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[70%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[35%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-primary-container h-[30%] rounded-t-sm"></div>
                                <div className="w-4 bg-secondary-fixed h-[50%] rounded-t-sm"></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-outline">
                            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                        </div>
                    </div>
                    <div className="col-span-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-bold text-primary mb-1">Transaction Breakdown</h3>
                        <p className="text-xs text-outline font-medium mb-6">Payment mode distribution</p>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-on-surface">UPI / G-Pay</span>
                                    <span className="text-secondary font-black">₹18,240 (60%)</span>
                                </div>
                                <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary-fixed w-[60%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-on-surface">Cash</span>
                                    <span className="text-primary-container font-black">₹9,120 (30%)</span>
                                </div>
                                <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-container w-[30%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-on-surface">Credit Cards</span>
                                    <span className="text-outline font-black">₹2,812 (10%)</span>
                                </div>
                                <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-outline w-[10%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 p-4 bg-secondary-container/20 rounded-xl flex items-center space-x-3">
                            <span className="material-symbols-outlined text-secondary">trending_up</span>
                            <p className="text-[11px] font-medium text-on-secondary-container leading-tight">Digital payments are up <span className="font-bold">22%</span> compared to last month. Consider promoting QR codes at checkout.</p>
                        </div>
                    </div>
                </section>
                <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
                    <div className="flex items-start justify-between relative z-10">
                        <div>
                            <h3 className="text-2xl font-black text-primary-container tracking-tighter">Revenue Pulse</h3>
                            <p className="text-sm text-outline font-medium">Real-time revenue monitoring vs previous period</p>
                        </div>
                        <div className="text-right">
                            <h4 className="text-3xl font-black text-primary-container">₹3,42,109.00</h4>
                            <p className="text-xs font-bold text-secondary flex items-center justify-end">
                                <span className="material-symbols-outlined text-sm">north_east</span>
                                <span>+4.2% Month-over-Month</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 h-48 relative w-full">
                        <svg className="w-full h-full preserve-3d" viewbox="0 0 1000 200">
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,110 T800,140 T1000,100 L1000,200 L0,200 Z" fill="url(#grad1)" fill-opacity="0.1"></path>
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,110 T800,140 T1000,100" fill="none" stroke="#143109" stroke-linecap="round" stroke-width="4"></path>
                            <defs>
                                <lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#143109", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
                                </lineargradient>
                            </defs>
                        </svg>
                        <div className="absolute top-[30%] left-[60%] group cursor-help">
                            <div className="w-3 h-3 bg-primary-container rounded-full ring-4 ring-primary-container/20 group-hover:scale-125 transition-transform"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-primary-container text-white text-[10px] p-2 rounded whitespace-nowrap font-bold shadow-xl">
                                Peak Sales: ₹42,000 (Fri, 12:40 PM)
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="p-5 border-b border-surface-container-low flex justify-between items-center">
                            <h3 className="font-bold text-primary">Recent Orders</h3>
                            <button className="text-xs font-bold text-secondary uppercase hover:underline">View All</button>
                        </div>
                        <table className="w-full text-xs text-left">
                            <thead className="bg-surface-container-low text-outline font-bold uppercase tracking-widest">
                                <tr>
                                    <th className="p-3">Order ID</th>
                                    <th className="p-3">Customer</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-low">
                                <tr className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3 font-semibold">#VTX-9821</td>
                                    <td className="p-3">Rahul Sharma</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹2,450</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3 font-semibold">#VTX-9820</td>
                                    <td className="p-3">Priya Kapur</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹899</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3 font-semibold">#VTX-9819</td>
                                    <td className="p-3">Aman V.</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold text-[9px]">PENDING</span></td>
                                    <td className="p-3 text-right font-black">₹4,200</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3 font-semibold">#VTX-9818</td>
                                    <td className="p-3">Anita Desai</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹1,120</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3 font-semibold">#VTX-9817</td>
                                    <td className="p-3">Samar Singh</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold text-[9px]">VOID</span></td>
                                    <td className="p-3 text-right font-black">₹0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-3 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden flex flex-col">
                        <div className="p-5 border-b border-surface-container-low">
                            <h3 className="font-bold text-primary">Customer Loyalty</h3>
                        </div>
                        <div className="p-5 space-y-4 overflow-y-auto max-h-75">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">VK</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Vikram Khanna</p>
                                    <p className="text-[10px] text-outline">VIP • 42 Orders</p>
                                </div>
                                <p className="text-xs font-black text-primary">₹12.4K</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">SJ</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Saira Jahan</p>
                                    <p className="text-[10px] text-outline">Regular • 18 Orders</p>
                                </div>
                                <p className="text-xs font-black text-primary">₹5.2K</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface-variant">RK</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Rishi Kumar</p>
                                    <p className="text-[10px] text-outline">At Risk • 02 Orders</p>
                                </div>
                                <p className="text-xs font-black text-primary">₹1.1K</p>
                            </div>
                        </div>
                        <div className="mt-auto p-4 bg-surface-container-low flex justify-around">
                            <div className="text-center">
                                <p className="text-lg font-black text-primary">1.2K</p>
                                <p className="text-[9px] font-bold text-outline uppercase tracking-tight">Total Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-black text-secondary">88%</p>
                                <p className="text-[9px] font-bold text-outline uppercase tracking-tight">Retention Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 p-5">
                        <h3 className="font-bold text-primary mb-6">Category Sales</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-outline">apparel</span>
                                        <span className="text-xs font-bold text-on-surface">Apparel &amp; Textiles</span>
                                    </div>
                                    <span className="text-xs font-black text-primary">₹1,12,000</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                                    <div className="h-full bg-primary-container w-[70%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-outline">devices</span>
                                        <span className="text-xs font-bold text-on-surface">Electronics</span>
                                    </div>
                                    <span className="text-xs font-black text-primary">₹84,500</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                                    <div className="h-full bg-secondary w-[45%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-outline">home</span>
                                        <span className="text-xs font-bold text-on-surface">Home Decor</span>
                                    </div>
                                    <span className="text-xs font-black text-primary">₹32,100</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                                    <div className="h-full bg-secondary-fixed w-[20%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-outline">fastfood</span>
                                        <span className="text-xs font-bold text-on-surface">Food &amp; Groceries</span>
                                    </div>
                                    <span className="text-xs font-black text-primary">₹18,900</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-low rounded-full">
                                    <div className="h-full bg-outline w-[12%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-6">
                    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="p-5 flex items-center justify-between bg-secondary-container/10">
                            <h3 className="font-bold text-on-secondary-container flex items-center space-x-2">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span>Best Selling Products</span>
                            </h3>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-surface-container-low">
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Premium Cotton Kurta (Navy)</td>
                                    <td className="p-4 text-outline">88 Sales</td>
                                    <td className="p-4 text-right font-black">₹32,560</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Wireless Earbuds v2</td>
                                    <td className="p-4 text-outline">62 Sales</td>
                                    <td className="p-4 text-right font-black">₹18,600</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Ceramic Vase - Minimalist</td>
                                    <td className="p-4 text-outline">45 Sales</td>
                                    <td className="p-4 text-right font-black">₹9,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="p-5 flex items-center justify-between bg-error-container/10">
                            <h3 className="font-bold text-on-error-container flex items-center space-x-2">
                                <span className="material-symbols-outlined text-sm">trending_down</span>
                                <span>Least Selling Products</span>
                            </h3>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-surface-container-low">
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Silk Scarf (Orange)</td>
                                    <td className="p-4 text-outline">02 Sales</td>
                                    <td className="p-4 text-right font-black">₹1,200</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Metal Wall Clock</td>
                                    <td className="p-4 text-outline">03 Sales</td>
                                    <td className="p-4 text-right font-black">₹4,500</td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/50">
                                    <td className="p-4 font-bold">Leather Belt (Size S)</td>
                                    <td className="p-4 text-outline">05 Sales</td>
                                    <td className="p-4 text-right font-black">₹3,750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-6">
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-bold text-primary mb-4 flex items-center space-x-2">
                            <span className="material-symbols-outlined text-sm">receipt</span>
                            <span>Top Expenses</span>
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg bg-surface-container-low/30">
                                <span className="font-medium">Rent &amp; Maintenance</span>
                                <span className="font-black text-primary">₹25,000</span>
                            </li>
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg bg-surface-container-low/30">
                                <span className="font-medium">Electricity Bill</span>
                                <span className="font-black text-primary">₹4,200</span>
                            </li>
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg bg-surface-container-low/30">
                                <span className="font-medium">Packaging Material</span>
                                <span className="font-black text-primary">₹2,100</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-bold text-primary mb-4 flex items-center space-x-2">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            <span>Stock Alerts</span>
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 rounded-lg border border-error/20 bg-error-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-error"></span>
                                    <span className="text-xs font-bold">Red Label Tea</span>
                                </div>
                                <span className="text-[10px] font-black text-error">OUT OF STOCK</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg border border-secondary/20 bg-secondary-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    <span className="text-xs font-bold">Sunfeast Biscuits</span>
                                </div>
                                <span className="text-[10px] font-black text-on-secondary-container">LOW STOCK (5)</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg border border-secondary/20 bg-secondary-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    <span className="text-xs font-bold">Nescafe Gold</span>
                                </div>
                                <span className="text-[10px] font-black text-on-secondary-container">LOW STOCK (2)</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-outline">confirmation_number</span>
                        </div>
                        <h4 className="text-xs font-bold text-primary">No Active Coupons</h4>
                        <p className="text-[10px] text-outline mt-1 mb-4">Create a discount code to boost weekend sales.</p>
                        <button className="text-[10px] font-black uppercase text-secondary tracking-widest hover:underline">Create First Coupon</button>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-6">
                    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="p-5 border-b border-surface-container-low bg-primary-container/2">
                            <h3 className="font-bold text-primary">Receivables (Outstanding)</h3>
                        </div>
                        <div className="p-12 flex flex-col items-center justify-center text-center">
                            <span className="material-symbols-outlined text-4xl text-surface-container-high mb-2">account_balance_wallet</span>
                            <p className="text-xs font-medium text-outline">No pending payments today.</p>
                            <button className="mt-4 text-xs font-bold text-primary border border-outline-variant/30 px-4 py-2 rounded-lg hover:bg-surface-container-low">View All-time Pendings</button>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="p-5 border-b border-surface-container-low bg-error-container/[0.02] flex justify-between items-center">
                            <h3 className="font-bold text-primary">Payables (Suppliers)</h3>
                            <span className="text-xs font-black text-error">₹42,000 Due</span>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-surface-container-low">
                                <tr>
                                    <td className="p-4 font-bold">Loom &amp; Weave Textiles</td>
                                    <td className="p-4 text-outline">Inv: #SUP-882</td>
                                    <td className="p-4 text-right font-black text-error">₹28,500</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Creative Packaging Ltd.</td>
                                    <td className="p-4 text-outline">Inv: #SUP-901</td>
                                    <td className="p-4 text-right font-black text-error">₹13,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 grid grid-cols-3 divide-x divide-surface-container-low overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xs font-black text-outline uppercase tracking-widest mb-4">GST Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-on-surface-variant">Output GST (Sales)</span>
                                <span className="text-xs font-black text-primary">₹3,412.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-on-surface-variant">Input GST (Purchase)</span>
                                <span className="text-xs font-black text-secondary">₹1,120.00</span>
                            </div>
                            <div className="pt-4 border-t border-surface-container-low flex justify-between items-center">
                                <span className="text-xs font-bold text-primary">Net Tax Payable</span>
                                <span className="text-sm font-black text-error">₹2,292.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xs font-black text-outline uppercase tracking-widest mb-4">Cash Flow Insights</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-24 text-[10px] font-bold text-outline uppercase">Inflow</div>
                                <div className="flex-1 h-3 bg-surface-container-low rounded-full">
                                    <div className="h-full bg-secondary-fixed w-[80%] rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-24 text-[10px] font-bold text-outline uppercase">Outflow</div>
                                <div className="flex-1 h-3 bg-surface-container-low rounded-full">
                                    <div className="h-full bg-error-container w-[45%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-outline mt-4 font-medium italic">"Positive cash flow trend maintained for 4 consecutive weeks."</p>
                    </div>
                    <div className="p-6 bg-primary-container/2">
                        <h3 className="text-xs font-black text-outline uppercase tracking-widest mb-4">Liquidity Position</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs font-bold">HDFC Bank (...4210)</span>
                                </div>
                                <span className="text-xs font-black">₹4.82 L</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                    <span className="text-xs font-bold">Petty Cash Counter</span>
                                </div>
                                <span className="text-xs font-black">₹12,400</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-bold text-primary mb-6 flex items-center justify-between">
                            <span>Team Today</span>
                            <span className="text-[10px] font-black text-secondary px-2 py-0.5 rounded bg-secondary-container/20">08 ACTIVE</span>
                        </h3>
                        <div className="space-y-5">
                            <div className="flex items-center space-x-3">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Close-up portrait of a young professional smiling staff member in a business casual outfit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnFS8DmVHzfFB6nDRgBMCqQzOIGeJg59kF5KRM6WCGkM1hf7YiQukFhbtsC0m6U0Tz0hLEMPp11kC6vSJgtkaC47CGCRkTi5WquRJkKxs1ttMUb3VfM2gveSmReSfVMrw5OsSfRMuldQPH_tMC8fGixTN2xEFUdoI3nelW5KaC5G_5yJ5_Tria4pcyHf1XUztsOdHK6puwsc-3VYTO7MmuqRvpYRvG6KwJc1bnGFeIK8kgcOYLrP-1o3Pvz0ywqeI7S-Rox0MqV8w" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Arjun Varma</p>
                                    <p className="text-[10px] text-outline">Floor Manager • On Duty</p>
                                </div>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Portrait of a friendly young female employee with long dark hair, professional store uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ihoKjg7xluB35swTJhEXeqoB4z0xl-PIMFw-Ntf6D8PNXcsdAlkAwQ-wZfRBo01n4aiBdGJjA0lErN0OVKdG4rgJsQABy67gCCiNkeATjrsLhJPYVPe42QPaL9tVphRf6SAxABBKCvnb5WPels_5Twb1v2e4Zt7nmiiCtJ6oq6EeIRzb9SYIhlowvSINbAksmjcRHc_tKCEoSi4jDfWLr6yW6ljp_KamPzDjWj64SzypEY8WVzIJ5G9-vZE_Ec9EnGy38cwAFTM" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Suman Rao</p>
                                    <p className="text-[10px] text-outline">Inventory Head • Break</p>
                                </div>
                                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Close-up of a confident male shop assistant in a clean retail environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyAdLqRKQZ5LgtCk8OoIxhdzeFLdrzZrNccp4HqVQ4RuGMMKKIJiY-VaJ6S_rSDqQvUEb8ir59wEn6HEZk9xJJosvPGUkE7jioNMlAByLc5HJhpKv_g2C8SBt0WSq0M5WEzUzq0At757kRgq8iim0IBYOXI_QfNnwGEp2uEMv4ioLp_qFp3ggiof3OpbmKPwYcHHTIXIRCNsY2SN96TrnonGC-_4zlKRlhGfEhgUho1j21nqBe2gv4mOnBkrSq8YhC5WSg6ay8h0" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold">Dev Singh</p>
                                    <p className="text-[10px] text-outline">Cashier • On Duty</p>
                                </div>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-bold text-primary mb-6">Live Activity Feed</h3>
                        <div className="space-y-6 max-h-62.5 overflow-y-auto pr-2">
                            <div className="flex space-x-4">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                                    <div className="w-0.5 h-full bg-surface-container-low mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs"><span className="font-bold">New Sale</span> recorded by <span className="font-bold">Dev Singh</span> for ₹2,450</p>
                                    <p className="text-[10px] text-outline mt-1 font-medium">Just now • Order #VTX-9821</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary-container ring-4 ring-primary-container/20"></div>
                                    <div className="w-0.5 h-full bg-surface-container-low mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs"><span className="font-bold">Inventory Updated:</span> 50 units of "White Silk Shirt" added</p>
                                    <p className="text-[10px] text-outline mt-1 font-medium">14 minutes ago • Warehouse #01</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-outline ring-4 ring-outline/20"></div>
                                    <div className="w-0.5 h-full bg-surface-container-low mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs"><span className="font-bold">Sunil Sihag</span> logged in from a new device (MacBook Pro)</p>
                                    <p className="text-[10px] text-outline mt-1 font-medium">1 hour ago • Gurugram, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden no-line">
                    <div className="p-5 border-b border-surface-container-low">
                        <h3 className="font-bold text-primary">Access Security Logs</h3>
                    </div>
                    <table className="w-full text-xs text-left">
                        <thead className="bg-surface-container-low text-outline font-bold uppercase tracking-widest">
                            <tr>
                                <th className="p-4">User</th>
                                <th className="p-4">Device / Browser</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">IP Address</th>
                                <th className="p-4 text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-low">
                            <tr className="hover:bg-surface-container-low/30">
                                <td className="p-4 flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-primary-container text-[8px] flex items-center justify-center text-white">SS</div>
                                    <span className="font-bold">Sunil Sihag</span>
                                </td>
                                <td className="p-4 text-outline font-medium">Chrome / MacOS Catalina</td>
                                <td className="p-4 text-outline font-medium">Gurugram, IN</td>
                                <td className="p-4 text-outline font-mono">192.168.1.45</td>
                                <td className="p-4 text-right font-medium">Today, 08:30 AM</td>
                            </tr>
                            <tr className="hover:bg-surface-container-low/30">
                                <td className="p-4 flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-secondary text-[8px] flex items-center justify-center text-white">AV</div>
                                    <span className="font-bold">Arjun Varma</span>
                                </td>
                                <td className="p-4 text-outline font-medium">Vertex App / Android</td>
                                <td className="p-4 text-outline font-medium">Gurugram, IN</td>
                                <td className="p-4 text-outline font-mono">192.168.1.52</td>
                                <td className="p-4 text-right font-medium">Today, 08:15 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="grid grid-cols-12 gap-6 pb-12">
                    <div className="col-span-4 bg-primary-container rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="grainy-bg absolute inset-0 opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-xs font-black text-on-primary-container uppercase tracking-widest mb-6">Customer Sentiment</h3>
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-5xl font-black">4.7</span>
                                <div className="flex flex-col">
                                    <div className="flex text-secondary-fixed">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0.5" }}>star_half</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-on-primary-container">Based on 1.2k reviews</span>
                                </div>
                            </div>
                            <p className="text-xs text-on-primary-container/80 leading-relaxed font-medium">"High quality cotton used in kurtas. Delivery was super fast!" - Recent Feedback</p>
                        </div>
                    </div>
                    <div className="col-span-8 grid grid-cols-2 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                            <h3 className="font-bold text-primary mb-4">Business Health Index</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-outline">Inventory Turnover</span>
                                    <span className="font-black text-secondary">Excellent (4.2x)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-outline">Gross Margin</span>
                                    <span className="font-black text-primary">Healthy (32%)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-outline">Debt-to-Equity</span>
                                    <span className="font-black text-on-secondary-container">Low (0.1)</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                            <h3 className="font-bold text-primary mb-4">Announcements</h3>
                            <div className="bg-surface p-3 rounded-xl border border-outline-variant/20 mb-3">
                                <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Update v2.4</p>
                                <p className="text-[11px] font-medium leading-tight">GST e-invoicing is now mandatory for orders above ₹50k. <a className="text-primary-container underline font-bold" href="#">Learn more</a></p>
                            </div>
                            <div className="bg-surface p-3 rounded-xl border border-outline-variant/20">
                                <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">Warehouse Alert</p>
                                <p className="text-[11px] font-medium leading-tight">Stock verification scheduled for Sunday, 26 May.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="px-8 py-6 border-t border-surface-container-low flex items-center justify-between text-[10px] font-bold text-outline uppercase tracking-widest">
                <div>
                    Vertex Retail OS v4.12.0 • Build ID: 88219-X
                </div>
                <div className="flex space-x-6">
                    <a className="hover:text-primary transition-colors" href="#">Documentation</a>
                    <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    <a className="text-secondary font-black" href="#">Help Desk (24/7)</a>
                </div>
            </footer>
        </main>
    )
}

export default Dashboard;