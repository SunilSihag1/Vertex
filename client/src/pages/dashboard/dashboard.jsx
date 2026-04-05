import { useEffect } from "react";
import { ThemeSwitcher } from "../../components/layout/navbar";

const Dashboard = () => {
    useEffect(() => {
        document.body.style.marginTop = "0px";

        return () => {
            document.body.style.marginTop = "20px";
        };
    }, []);

    return (
        // main tag which contains everything
        <main className="ml-64 min-h-screen">

            {/* sidebar */}
            <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto z-40 bg-background-dark font-inter text-sm tracking-wide font-medium flex flex-col p-6 space-y-8 no-line border-r border-sage/40">
                <div className="grainy-bg absolute inset-0"></div>
                <div className="relative z-10 flex items-center space-x-3">
                    <div className="bg-sage rounded-xl p-2 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black tracking-tighter text-white">My Bizz</h1>
                        <p className="text-[10px] text-sage font-bold uppercase tracking-widest">Retail Management</p>
                    </div>
                </div>

                <div className="relative z-10 bg-primary p-3 rounded-2xl flex items-center space-x-3 border border-sage/40">
                    <span className="material-symbols-outlined bg-background-light text-background-dark border-2 rounded-full p-0.5" style={{ fontVariationSettings: "'FILL' 1", fontSize: "35px" }}>person</span>
                    <div className="overflow-hidden">
                        <p className="text-background-light font-semibold truncate">Sunil Sihag</p>
                        <p className="text-sage text-xs truncate">Owner • Premium</p>
                    </div>
                </div>
                <nav className="relative z-10 flex flex-col space-y-2">
                    <a className="flex items-center space-x-3 px-4 py-3 bg-primary text-sage border rounded-xl shadow-inner transition-all duration-200" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                        <span>Overview</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">storefront</span>
                        <span>Store</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">payments</span>
                        <span>Sales</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span>Purchase</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">group</span>
                        <span>Customers</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">account_balance</span>
                        <span>Accounting</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">badge</span>
                        <span>Team</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">assessment</span>
                        <span>Reports</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage hover:bg-primary border border-transparent rounded-xl transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </a>
                </nav>
                <div className="mt-auto relative z-10 pt-6 border-t border-sage/50 space-y-1">
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">help_outline</span>
                        <span>Support</span>
                    </a>
                    <a className="flex items-center space-x-3 px-4 py-3 text-background-light hover:text-sage rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">contact_support</span>
                        <span>Help Center</span>
                    </a>
                </div>
            </aside>

            {/* main part starts here  */}
            {/* header of the dashboard */}
            <header className="sticky top-0 z-30 bg-background-light dark:bg-background-dark backdrop-blur-md flex items-center justify-between px-8 py-4 no-line border-b border-sage/40">
                <div className="flex items-center space-x-6">
                    <div>
                        <h1 className="text-xl font-bold text-primary dark:text-sage tracking-tight">Good morning, Sunil Sihag</h1>
                        <p className="text-xs text-primary/50 dark:text-sage/50 font-medium uppercase tracking-wider">Dashboard Overview • Today, 24 May 2024</p>
                    </div>
                    <div className="relative w-90">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary dark:text-sage">search</span>
                        <input className="w-full bg-sage/20 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2" placeholder="Search orders, products, or customers..." type="text" />
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex bg-sage/20 text-primary/50 dark:text-sage/50 p-1 rounded-xl">
                        <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-background-light dark:bg-background-dark shadow-sm text-primary dark:text-sage cursor-pointer">Date Range</button>
                        <button className="px-3 py-1.5 text-xs font-semibold hover:rounded-lg cursor-pointer hover:bg-background-light hover:text-primary dark:hover:bg-background-dark dark:hover:text-sage hover:shadow-sm">Locations</button>
                        <button className="px-3 py-1.5 text-xs font-semibold hover:rounded-lg cursor-pointer hover:bg-background-light hover:text-primary dark:hover:bg-background-dark dark:hover:text-sage hover:shadow-sm">Channels</button>
                    </div>
                    <button className="shimmer-btn bg-primary text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-lg shadow-primary-container/20 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">add</span>
                        <span>Quick Action</span>
                    </button>
                    <div className="flex items-center space-x-2 border-l pl-4 ml-2 border-primary/40 dark:border-sage/40">
                        <button className="p-2 text-primary dark:text-sage hover:scale-110 rounded-lg transition-transform cursor-pointer">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-primary dark:text-sage hover:scale-110 rounded-lg transition-transform cursor-pointer">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                    <ThemeSwitcher />
                </div>
            </header>

            {/* after header page is in this div */}
            <div className="px-8 space-y-8 mt-4">

                {/* renew subscription banner here */}
                <section className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden flex items-center justify-between no-line">
                    <div className="grainy-bg absolute inset-0 opacity-10"></div>
                    <div className="relative z-10 flex items-center space-x-6">
                        <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Your Free Trial is <span className="text-red-500">85%</span>Completed</h3>
                            <p className="text-sage/50 text-sm">Upgrade to Premium to unlock unlimited inventory and advanced accounting.</p>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center space-x-8">
                        <div className="w-48 space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-red-500">
                                <span>26 Days Left</span>
                                <span>85%</span>
                            </div>
                            <div className="h-2 w-full bg-sage/50 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[85%] rounded-full shadow-[0_0_12px_rgba(217,234,163,0.5)]"></div>
                            </div>
                        </div>
                        <button className="bg-sage/50 shimmer-btn text-background-light px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-tight animate-bounce cursor-pointer">
                            Upgrade Now
                        </button>
                    </div>
                </section>

                {/* Stats about the shop profit, sold, stock value, purchase cost, gross profit, expenses */}
                <section className="grid grid-cols-6 gap-4">
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Total Sales</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl text-emerald-700 dark:text-emerald-400 font-bold tracking-tight">₹30,172</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-emerald-700 dark:text-emerald-400 font-bold">+12%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Sold Qty</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 tracking-tight">504</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-emerald-700 dark:text-emerald-400 font-bold">+8%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Stock Value</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">₹60.78 L</h4>
                            <span className="material-symbols-outlined text-primary dark:text-sage text-sm">inventory_2</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Purchase Cost</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">₹12,450</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded text-emerald-700 dark:text-emerald-400 font-bold">+2%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Gross Profit</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">₹19,198</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded text-emerald-700 dark:text-emerald-400 font-bold">+15%</span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white dark:bg-primary p-4 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <p className="text-[11px] font-bold text-primary dark:text-sage uppercase tracking-widest mb-1">Expenses</p>
                        <div className="flex items-end justify-between">
                            <h4 className="text-xl font-bold tracking-tight text-red-500">₹4,200</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded text-emerald-700 dark:text-emerald-400 font-bold">-5%</span>
                        </div>
                    </div>

                    {/* Stats about the stock, tax payable, active coupon, new customers */}
                    <div className="col-span-6 grid grid-cols-6 gap-4">
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">Avg Order Value</p>
                            <p className="font-bold text-emerald-700 dark:text-emerald-400">₹598.65</p>
                        </div>
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">New Customers</p>
                            <p className="font-bold text-emerald-700 dark:text-emerald-400">24</p>
                        </div>
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">Tax Payable</p>
                            <p className="font-bold text-emerald-700 dark:text-emerald-400">₹1,245</p>
                        </div>
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">Out of Stock</p>
                            <p className="font-bold text-red-500">12 Items</p>
                        </div>
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">Low Stock</p>
                            <p className="font-bold text-red-500">32 Items</p>
                        </div>
                        <div className="bg-sage/20 p-3 rounded-xl border-none flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-primary dark:text-sage uppercase tracking-tighter">Active Coupons</p>
                            <p className="font-bold text-emerald-700 dark:text-emerald-400">04</p>
                        </div>
                    </div>
                </section>

                {/* Quick link */}
                <section className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                    <button className="shrink-0 bg-primary text-sage border border-sage/40 px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        <span>New Sale</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">receipt_long</span>
                        <span>New Invoice</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">inventory</span>
                        <span>Add Product</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">person_add</span>
                        <span>New Customer</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        <span>Purchase Order</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        <span>Expense</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">swap_horiz</span>
                        <span>Stock Transfer</span>
                    </button>
                    <button className="shrink-0 bg-white dark:bg-sage text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-sage/30 hover:bg-sage/20 dark:hover:bg-sage/60 transition-all flex items-center space-x-2 cursor-pointer">
                        <span className="material-symbols-outlined text-sm">label</span>
                        <span>Print Labels</span>
                    </button>
                </section>

                {/* Graph Sales Vs Purchase */}
                <section className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/40 dark:border-sage/40">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="font-bold text-primary dark:text-sage">Sales vs Purchase</h3>
                                <p className="text-xs text-primary/50 dark:text-sage/50 font-medium">Weekly comparison analysis</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-background-dark border border-sage/30"></div>
                                    <span className="text-[10px] font-bold uppercase text-primary/50 dark:text-sage/50">Sales</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-sage border border-background-dark/30"></div>
                                    <span className="text-[10px] font-bold uppercase text-primary/50 dark:text-sage/50">Purchase</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 flex items-end justify-between px-2">
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0  h-[40%] rounded-t-sm transition-all group-hover:h-[45%]"></div>
                                <div className="w-4 bg-sage border-background-dark/30 border-b-0 h-[25%] rounded-t-sm transition-all group-hover:h-[30%]"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[60%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[40%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[85%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[15%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[55%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[45%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[90%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[20%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[70%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[35%] rounded-t-sm"></div>
                            </div>
                            <div className="flex space-x-1.5 h-full items-end group w-12">
                                <div className="w-4 bg-background-dark border border-sage/30 border-b-0 h-[30%] rounded-t-sm"></div>
                                <div className="w-4 bg-sage border border-background-dark/30 border-b-0 h-[50%] rounded-t-sm"></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-primary/50 dark:text-sage/50">
                            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                        </div>
                    </div>

                    {/* Transaction breakdown */}
                    <div className="col-span-4 bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <h3 className="font-bold text-primary dark:text-sage mb-1">Transaction Breakdown</h3>
                        <p className="text-xs text-primary/50 dark:text-sage/50 font-medium mb-6">Payment mode distribution</p>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-primary dark:text-sage">UPI / G-Pay</span>
                                    <span className="text-emerald-500 font-black">₹18,240 (60%)</span>
                                </div>
                                <div className="h-3 bg-sage/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-400 w-[60%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-primary dark:text-sage">Cash</span>
                                    <span className="text-emerald-500 font-black">₹9,120 (30%)</span>
                                </div>
                                <div className="h-3 bg-sage/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-400 w-[30%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-2">
                                    <span className="text-primary dark:text-sage">Credit Cards</span>
                                    <span className="text-emerald-500 font-black">₹2,812 (10%)</span>
                                </div>
                                <div className="h-3 bg-sage/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-400 w-[10%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 p-4 bg-secondary-container/20 rounded-xl flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary dark:text-sage">trending_up</span>
                            <p className="text-[11px] font-medium text-primary dark:text-sage leading-tight">Digital payments are up <span className="font-bold">22%</span> compared to last month. Consider promoting QR codes at checkout.</p>
                        </div>
                    </div>
                </section>

                {/* Revenue pulse */}
                <section className="bg-white dark:bg-primary p-8 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 relative overflow-hidden">
                    <div className="flex items-start justify-between relative z-10">
                        <div>
                            <h3 className="text-2xl font-black text-primary dark:text-sage tracking-tighter">Revenue Pulse</h3>
                            <p className="text-sm text-primary/50 dark:text-sage/50 font-medium">Real-time revenue monitoring vs previous period</p>
                        </div>
                        <div className="text-right">
                            <h4 className="text-3xl font-black text-emerald-500">₹3,42,109.00</h4>
                            <p className="text-xs font-bold text-text-primary/50 dark:text-sage/50 flex items-center justify-end">
                                <span className="material-symbols-outlined text-sm">north_east</span>
                                <span>+4.2% Month-over-Month</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 h-48 relative w-full">
                        <svg className="w-full h-full preserve-3d" viewbox="0 0 1000 200">
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,110 T800,140 T1000,100 L1000,200 L0,200 Z" fill="url(#grad1)" fill-opacity="0.1"></path>
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,110 T800,140 T1000,100" fill="none" stroke="var(--primary-sage)" stroke-linecap="round" stroke-width="4"></path>
                            <defs>
                                <lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#143109", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
                                </lineargradient>
                            </defs>
                        </svg>
                        <div className="absolute top-[30%] left-[60%] group cursor-help">
                            <div className="w-3 h-3 bg-primary dark:bg-sage rounded-full ring-4 ring-primary/30 dark:ring-sage/30 group-hover:scale-125 transition-transform"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-primary dark:bg-sage text-sage dark:text-primary text-[10px] p-2 rounded whitespace-nowrap font-bold shadow-xl">
                                Peak Sales: ₹42,000 (Fri, 12:40 PM)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent orders, customer loyalty, Category Sales */}
                <section className="grid grid-cols-12 gap-6">
                    {/* Recent orders */}
                    <div className="col-span-5 bg-white dark:bg-primary rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 overflow-hidden p-2.5">
                        <div className="p-5 border-b border-primary/30 dark:border-sage/30 flex justify-between items-center">
                            <h3 className="font-bold text-primary dark:text-sage">Recent Orders</h3>
                            <button className="text-xs font-bold text-primary dark:text-sage uppercase hover:underline cursor-pointer">View All</button>
                        </div>
                        <table className="w-full text-xs text-left rounded-2xl">
                            <thead className="bg-primary dark:bg-sage text-sage dark:text-primary font-bold uppercase tracking-widest">
                                <tr>
                                    <th className="p-3">Order ID</th>
                                    <th className="p-3">Customer</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/70 dark:divide-sage/70">
                                <tr className="hover:bg-primary/20 dark:hover:bg-sage/20 text-primary dark:text-sage transition-colors cursor-pointer">
                                    <td className="p-3 font-semibold">#VTX-9821</td>
                                    <td className="p-3">Rahul Sharma</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹2,450</td>
                                </tr>
                                <tr className="hover:bg-primary/20 dark:hover:bg-sage/20 text-primary dark:text-sage transition-colors cursor-pointer">
                                    <td className="p-3 font-semibold">#VTX-9820</td>
                                    <td className="p-3">Priya Kapur</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹899</td>
                                </tr>
                                <tr className="hover:bg-primary/20 dark:hover:bg-sage/20 text-primary dark:text-sage transition-colors cursor-pointer">
                                    <td className="p-3 font-semibold">#VTX-9819</td>
                                    <td className="p-3">Aman V.</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold text-[9px]">PENDING</span></td>
                                    <td className="p-3 text-right font-black">₹4,200</td>
                                </tr>
                                <tr className="hover:bg-primary/20 dark:hover:bg-sage/20 text-primary dark:text-sage transition-colors cursor-pointer">
                                    <td className="p-3 font-semibold">#VTX-9818</td>
                                    <td className="p-3">Anita Desai</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[9px]">COMPLETED</span></td>
                                    <td className="p-3 text-right font-black">₹1,120</td>
                                </tr>
                                <tr className="hover:bg-primary/20 dark:hover:bg-sage/20 text-primary dark:text-sage transition-colors cursor-pointer">
                                    <td className="p-3 font-semibold">#VTX-9817</td>
                                    <td className="p-3">Samar Singh</td>
                                    <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold text-[9px]">VOID</span></td>
                                    <td className="p-3 text-right font-black">₹0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* customer loyalty */}
                    <div className="col-span-3 bg-white dark:bg-primary rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 overflow-hidden flex flex-col">
                        <div className="p-5 border-b border-primary/30 dark:border-sage/30">
                            <h3 className="font-bold text-primary dark:text-sage">Customer Loyalty</h3>
                        </div>
                        <div className="p-5 space-y-4 overflow-y-auto max-h-75">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-primary dark:bg-sage flex items-center justify-center font-bold text-sage dark:text-primary">VK</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Vikram Khanna</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">VIP • 42 Orders</p>
                                </div>
                                <p className="text-xs font-black text-emerald-500">₹12.4K</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-primary dark:bg-sage flex items-center justify-center font-bold text-sage dark:text-primary">SJ</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Saira Jahan</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">Regular • 18 Orders</p>
                                </div>
                                <p className="text-xs font-black text-emerald-500">₹5.2K</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-primary dark:bg-sage flex items-center justify-center font-bold text-sage dark:text-primary">RK</div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Rishi Kumar</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">At Risk • 02 Orders</p>
                                </div>
                                <p className="text-xs font-black text-emerald-500">₹1.1K</p>
                            </div>
                        </div>
                        <div className="mt-auto p-4 bg-sage/30 dark:bg-sage flex justify-around">
                            <div className="text-center">
                                <p className="text-lg font-black text-primary">1.2K</p>
                                <p className="text-[9px] font-bold text-primary/50 uppercase tracking-tight">Total Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-black text-primary">88%</p>
                                <p className="text-[9px] font-bold text-primary/50 uppercase tracking-tight">Retention Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Category Sales */}
                    <div className="col-span-4 bg-white dark:bg-primary rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 p-5">
                        <h3 className="font-bold text-primary dark:text-sage mb-6">Category Sales</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-primary dark:text-sage">apparel</span>
                                        <span className="text-xs font-bold text-primary dark:text-sage">Apparel &amp; Textiles</span>
                                    </div>
                                    <span className="text-xs font-black text-emerald-500">₹1,12,000</span>
                                </div>
                                <div className="h-1.5 w-full bg-sage/30 rounded-full">
                                    <div className="h-full bg-blue-500 w-[70%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-primary dark:text-sage">devices</span>
                                        <span className="text-xs font-bold text-primary dark:text-sage">Electronics</span>
                                    </div>
                                    <span className="text-xs font-black text-emerald-500">₹84,500</span>
                                </div>
                                <div className="h-1.5 w-full bg-sage/30 rounded-full">
                                    <div className="h-full bg-violet-500 w-[45%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-primary dark:text-sage">home</span>
                                        <span className="text-xs font-bold text-primary dark:text-sage">Home Decor</span>
                                    </div>
                                    <span className="text-xs font-black text-emerald-500">₹32,100</span>
                                </div>
                                <div className="h-1.5 w-full bg-sage/30 rounded-full">
                                    <div className="h-full bg-gray-500 w-[20%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center space-x-2">
                                        <span className="material-symbols-outlined text-sm text-primary dark:text-sage">fastfood</span>
                                        <span className="text-xs font-bold text-primary dark:text-sage">Food &amp; Groceries</span>
                                    </div>
                                    <span className="text-xs font-black text-emerald-500">₹18,900</span>
                                </div>
                                <div className="h-1.5 w-full bg-sage/30 rounded-full">
                                    <div className="h-full bg-orange-500 w-[12%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Selling Products, Least Selling Products */}
                <section className="grid grid-cols-2 gap-6">
                    {/* Best Selling Products */}
                    <div className="bg-green-100 dark:bg-green-200 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 p-2.5 overflow-hidden">
                        <div className="p-5 flex items-center justify-between">
                            <h3 className="font-bold text-green-500 flex items-center space-x-2">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span>Best Selling Products</span>
                            </h3>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-green-500">
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-green-500">Premium Cotton Kurta (Navy)</td>
                                    <td className="p-4 text-green-500">88 Sales</td>
                                    <td className="p-4 text-right font-black text-emerald-500">₹32,560</td>
                                </tr>
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-green-500">Wireless Earbuds v2</td>
                                    <td className="p-4 text-green-500">62 Sales</td>
                                    <td className="p-4 text-right font-black text-emerald-500">₹18,600</td>
                                </tr>
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-green-500">Ceramic Vase - Minimalist</td>
                                    <td className="p-4 text-green-500">45 Sales</td>
                                    <td className="p-4 text-right font-black text-emerald-500">₹9,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Least Selling Products */}
                    <div className="bg-red-100 dark:bg-red-200 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 p-2.5 overflow-hidden">
                        <div className="p-5 flex items-center justify-between">
                            <h3 className="font-bold text-red-500 flex items-center space-x-2">
                                <span className="material-symbols-outlined text-sm">trending_down</span>
                                <span>Least Selling Products</span>
                            </h3>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-red-500">
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-red-500 ">Silk Scarf (Orange)</td>
                                    <td className="p-4 text-red-500">02 Sales</td>
                                    <td className="p-4 text-right font-black text-red-500">₹1,200</td>
                                </tr>
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-red-500 ">Metal Wall Clock</td>
                                    <td className="p-4 text-red-500">03 Sales</td>
                                    <td className="p-4 text-right font-black text-red-500">₹4,500</td>
                                </tr>
                                <tr className="hover:bg-sage/20 cursor-pointer">
                                    <td className="p-4 font-bold text-red-500 ">Leather Belt (Size S)</td>
                                    <td className="p-4 text-red-500">05 Sales</td>
                                    <td className="p-4 text-right font-black text-red-500">₹3,750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>


                {/* Top Expenses, Stock Alerts, Coupons */}
                <section className="grid grid-cols-3 gap-6">

                    {/* Top Expenses */}
                    <div className="bg-white dark:bg-primary p-5 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <h3 className="font-bold text-primary dark:text-sage mb-4 flex items-center space-x-2">
                            <span className="material-symbols-outlined text-sm">receipt</span>
                            <span>Top Expenses</span>
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg border border-primary/50 dark:border-sage/50 text-primary dark:text-sage">
                                <span className="font-medium">Rent &amp; Maintenance</span>
                                <span className="font-black text-red-500">₹25,000</span>
                            </li>
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg border border-primary/50 dark:border-sage/50 text-primary dark:text-sage">
                                <span className="font-medium">Electricity Bill</span>
                                <span className="font-black text-red-500">₹4,200</span>
                            </li>
                            <li className="flex justify-between text-xs items-center p-2 rounded-lg border border-primary/50 dark:border-sage/50 text-primary dark:text-sage">
                                <span className="font-medium">Packaging Material</span>
                                <span className="font-black text-red-500">₹2,100</span>
                            </li>
                        </ul>
                    </div>

                    {/* Stock Alerts */}
                    <div className="bg-red-100 dark:bg-red-200 p-5 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <h3 className="font-bold text-red-500 mb-4 flex items-center space-x-2">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            <span>Stock Alerts</span>
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 rounded-lg border border-red-500 bg-error-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-red-700"></span>
                                    <span className="text-xs font-bold text-red-700">Red Label Tea</span>
                                </div>
                                <span className="text-[10px] font-black text-red-700">OUT OF STOCK</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg border border-red-600 bg-secondary-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                    <span className="text-xs font-bold text-red-600">Sunfeast Biscuits</span>
                                </div>
                                <span className="text-[10px] font-black text-red-600">LOW STOCK (5)</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg border border-red-500 bg-secondary-container/5">
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span className="text-xs font-bold text-red-500">Nescafe Gold</span>
                                </div>
                                <span className="text-[10px] font-black text-red-500">LOW STOCK (2)</span>
                            </div>
                        </div>
                    </div>

                    {/* Coupons */}
                    <div className="bg-white dark:bg-primary p-5 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-primary dark:bg-sage rounded-full flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-sage dark:text-primary">confirmation_number</span>
                        </div>
                        <h4 className="text-xs font-bold text-primary dark:text-sage">No Active Coupons</h4>
                        <p className="text-[10px] text-primary/50 dark:text-sage/50 mt-1 mb-4">Create a discount code to boost weekend sales.</p>
                        <button className="text-[10px] font-black uppercase text-primary dark:text-sage tracking-widest hover:underline cursor-pointer">Create First Coupon</button>
                    </div>
                </section>

                {/* Receivables, Payable */}
                <section className="grid grid-cols-2 gap-6">

                    {/* Receivables */}
                    <div className="bg-green-100 dark:bg-green-200 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 overflow-hidden">
                        <div className="p-5 border-b border-primary">
                            <h3 className="font-bold text-primary">Receivables (Outstanding)</h3>
                        </div>
                        <div className="p-12 flex flex-col items-center justify-center text-center">
                            <span className="material-symbols-outlined text-4xl text-primary mb-2">account_balance_wallet</span>
                            <p className="text-xs font-medium text-primary">No pending payments today.</p>
                            <button className="shimmer-btn mt-4 text-xs font-bold text-white bg-primary border border-outline-variant/30 px-4 py-2 rounded-lg cursor-pointer">View All-time Pendings</button>
                        </div>
                    </div>

                    {/* Payable */}
                    <div className="bg-red-100 dark:bg-red-200  rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 overflow-hidden">
                        <div className="p-5 border-b border-red-500 flex justify-between items-center">
                            <h3 className="font-bold text-red-500">Payable (Suppliers)</h3>
                            <span className="text-xs font-black text-red-500">₹42,000 Due</span>
                        </div>
                        <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-red-500">
                                <tr>
                                    <td className="p-4 font-bold text-red-500">Loom &amp; Weave Textiles</td>
                                    <td className="p-4 text-red-500">Inv: #SUP-882</td>
                                    <td className="p-4 text-right font-black text-red-500">₹28,500</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-red-500">Creative Packaging Ltd.</td>
                                    <td className="p-4 text-red-500">Inv: #SUP-901</td>
                                    <td className="p-4 text-right font-black text-red-500">₹13,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* GST Summary, Cash flow insight, Liquidity position */}
                <section className="bg-white dark:bg-primary rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 grid grid-cols-3 divide-x divide-primary/30 dark:divide-sage/30 overflow-hidden">

                    {/* GST Summary */}
                    <div className="p-6">
                        <h3 className="text-xs p-2 font-black text-primary dark:text-sage uppercase tracking-widest">GST Summary</h3>
                        <div className="p-0.5 border-b border-primary/30 dark:border-sage/30 flex justify-between items-center"></div>
                        <div className="space-y-4 p-3">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-primary dark:text-sage">Output GST (Sales)</span>
                                <span className="text-xs font-black text-primary dark:text-sage">₹3,412.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-primary dark:text-sage">Input GST (Purchase)</span>
                                <span className="text-xs font-black text-primary dark:text-sage">₹1,120.00</span>
                            </div>
                            <div className="pt-4 border-t border-primary/30 dark:border-sage/30 flex justify-between items-center">
                                <span className="text-xs font-bold text-primary dark:text-sage">Net Tax Payable</span>
                                <span className="text-sm font-black text-red-500">₹2,292.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Cash flow insight */}
                    <div className="p-6">
                        <h3 className="text-xs p-2 font-black text-primary dark:text-sage uppercase tracking-widest">Cash Flow Insights</h3>
                        <div className="p-0.5 border-b border-primary/30 dark:border-sage/30 flex justify-between items-center"></div>
                        <div className="space-y-3 p-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-24 text-[10px] font-bold text-green-500 uppercase">Inflow</div>
                                <div className="flex-1 h-3 bg-sage/30 rounded-full">
                                    <div className="h-full bg-green-500 w-[80%] rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-24 text-[10px] font-bold text-red-500 uppercase">Outflow</div>
                                <div className="flex-1 h-3 bg-sage/30 rounded-full">
                                    <div className="h-full bg-red-500 w-[45%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-primary dark:text-sage mt-4 font-medium italic">"Positive cash flow trend maintained for 4 consecutive weeks."</p>
                    </div>

                    {/* Liquidity position */}
                    <div className="p-6 bg-primary-container/2">
                        <h3 className="text-xs p-2 font-black text-primary dark:text-sage uppercase tracking-widest">Liquidity Position</h3>
                        <div className="p-0.5 border-b border-primary/30 dark:border-sage/30 flex justify-between items-center"></div>
                        <div className="space-y-3 p-3">
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

                {/* Team today, Live activity today */}
                <section className="grid grid-cols-12 gap-6">

                    {/* Team today */}
                    <div className="col-span-4 bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <h3 className="font-bold text-primary dark:text-sage mb-6 flex items-center justify-between">
                            <span>Team Today</span>
                            <span className="text-[10px] font-black text-primary/70 dark:text-sage/70 px-2 py-0.5 rounded">08 ACTIVE</span>
                        </h3>
                        <div className="space-y-5">
                            <div className="flex items-center space-x-3 relative">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Close-up portrait of a young professional smiling staff member in a business casual outfit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnFS8DmVHzfFB6nDRgBMCqQzOIGeJg59kF5KRM6WCGkM1hf7YiQukFhbtsC0m6U0Tz0hLEMPp11kC6vSJgtkaC47CGCRkTi5WquRJkKxs1ttMUb3VfM2gveSmReSfVMrw5OsSfRMuldQPH_tMC8fGixTN2xEFUdoI3nelW5KaC5G_5yJ5_Tria4pcyHf1XUztsOdHK6puwsc-3VYTO7MmuqRvpYRvG6KwJc1bnGFeIK8kgcOYLrP-1o3Pvz0ywqeI7S-Rox0MqV8w" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Arjun Varma</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">Floor Manager • On Duty</p>
                                </div>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-red-400"></span>
                                    <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500"></span>
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Portrait of a friendly young female employee with long dark hair, professional store uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ihoKjg7xluB35swTJhEXeqoB4z0xl-PIMFw-Ntf6D8PNXcsdAlkAwQ-wZfRBo01n4aiBdGJjA0lErN0OVKdG4rgJsQABy67gCCiNkeATjrsLhJPYVPe42QPaL9tVphRf6SAxABBKCvnb5WPels_5Twb1v2e4Zt7nmiiCtJ6oq6EeIRzb9SYIhlowvSINbAksmjcRHc_tKCEoSi4jDfWLr6yW6ljp_KamPzDjWj64SzypEY8WVzIJ5G9-vZE_Ec9EnGy38cwAFTM" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Suman Rao</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">Inventory Head • Break</p>
                                </div>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-red-400"></span>
                                    <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500"></span>
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <img alt="Team Member" className="w-8 h-8 rounded-full object-cover" data-alt="Close-up of a confident male shop assistant in a clean retail environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyAdLqRKQZ5LgtCk8OoIxhdzeFLdrzZrNccp4HqVQ4RuGMMKKIJiY-VaJ6S_rSDqQvUEb8ir59wEn6HEZk9xJJosvPGUkE7jioNMlAByLc5HJhpKv_g2C8SBt0WSq0M5WEzUzq0At757kRgq8iim0IBYOXI_QfNnwGEp2uEMv4ioLp_qFp3ggiof3OpbmKPwYcHHTIXIRCNsY2SN96TrnonGC-_4zlKRlhGfEhgUho1j21nqBe2gv4mOnBkrSq8YhC5WSg6ay8h0" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-primary dark:text-sage">Dev Singh</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50">Cashier • On Duty</p>
                                </div>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-red-400"></span>
                                    <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Live activity today */}
                    <div className="col-span-8 bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                        <h3 className="font-bold text-primary dark:text-sage mb-6">Live Activity Feed</h3>
                        <div className="space-y-6 max-h-62.5 pr-2">
                            <div className="flex space-x-4 mb-1">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-sage ring-4 ring-primary/30 dark:ring-sage/30"></div>
                                    <div className="w-0.5 h-full bg-sage/30 mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs text-primary dark:text-sage"><span className="font-bold">New Sale</span> recorded by <span className="font-bold">Dev Singh</span> for <span className="text-emerald-500 font-bold">₹2,450</span></p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50 mt-1 font-medium">Just now • Order #VTX-9821</p>
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-2">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-sage ring-4 ring-primary/30 dark:ring-sage/30"></div>
                                    <div className="w-0.5 h-full bg-sage/30 mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs text-primary dark:text-sage"><span className="font-bold">Inventory Updated:</span> 50 units of "White Silk Shirt" added</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50  mt-1 font-medium">14 minutes ago • Warehouse #01</p>
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-2">
                                <div className="shrink-0 w-8 flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-sage ring-4 ring-primary/30 dark:ring-sage/30"></div>
                                    <div className="w-0.5 h-full bg-sage/30 mt-1"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-xs text-primary dark:text-sage"><span className="font-bold">Sunil Sihag</span> logged in from a new device (MacBook Pro)</p>
                                    <p className="text-[10px] text-primary/50 dark:text-sage/50  mt-1 font-medium">1 hour ago • Gurugram, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Access Security Logs */}
                <section className="bg-white dark:bg-primary rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30 overflow-hidden no-line">
                    <div className="p-5 border-b border-sage dark:border-primary">
                        <h3 className="font-bold text-primary dark:text-sage">Access Security Logs</h3>
                    </div>
                    <table className="w-full text-xs text-left">
                        <thead className="bg-primary dark:bg-sage text-sage dark:text-primary font-bold uppercase tracking-widest">
                            <tr>
                                <th className="p-4">User</th>
                                <th className="p-4">Device / Browser</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">IP Address</th>
                                <th className="p-4 text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/30 dark:divide-sage/30">
                            <tr className="hover:bg-surface-container-low/30">
                                <td className="p-4 flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-background-dark text-[8px] flex items-center justify-center text-white border border-sage/30">SS</div>
                                    <span className="font-bold text-primary dark:text-sage">Sunil Sihag</span>
                                </td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-medium">Chrome / MacOS Catalina</td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-medium">Gurugram, IN</td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-mono">192.168.1.45</td>
                                <td className="p-4 text-right font-medium text-primary dark:text-sage">Today, 08:30 AM</td>
                            </tr>
                            <tr className="hover:bg-surface-container-low/30">
                                <td className="p-4 flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-background-dark text-[8px] flex items-center justify-center text-white border border-sage/30">AV</div>
                                    <span className="font-bold text-primary dark:text-sage">Arjun Varma</span>
                                </td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-medium">Vertex App / Android</td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-medium">Gurugram, IN</td>
                                <td className="p-4 text-primary/70 dark:text-sage/70 font-mono">192.168.1.52</td>
                                <td className="p-4 text-right font-medium text-primary dark:text-sage">Today, 08:15 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Customer Sentiment, Business Health Index, Announcements */}
                <section className="grid grid-cols-12 gap-6 pb-12">

                    {/* Customer Sentiment */}
                    <div className="col-span-4 bg-primary dark:bg-sage rounded-2xl p-6 text-sage dark:text-primary relative overflow-hidden border border-sage/30 dark:border-primary/30">
                        <div className="grainy-bg absolute inset-0 opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-xs font-black text-sage dark:text-primary uppercase tracking-widest mb-6">Customer Sentiment</h3>
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-5xl font-black">4.7</span>
                                <div className="flex flex-col">
                                    <div className="flex text-sage dark:text-primary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-sage dark:text-primary">Based on 1.2k reviews</span>
                                </div>
                            </div>
                            <p className="text-xs text-sage dark:text-primary leading-relaxed font-medium">"High quality cotton used in kurtas. Delivery was super fast!" - Recent Feedback</p>
                        </div>
                    </div>

                    {/* Business Health Index, Announcements */}
                    <div className="col-span-8 grid grid-cols-2 gap-6">
                        {/* Business Health Index */}
                        <div className="bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                            <h3 className="font-bold text-primary dark:text-sage mb-4">Business Health Index</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-primary dark:text-sage">Inventory Turnover</span>
                                    <span className="font-black text-primary dark:text-sage">Excellent (4.2x)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-primary dark:text-sage">Gross Margin</span>
                                    <span className="font-black text-primary dark:text-sage">Healthy (32%)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-primary dark:text-sage">Debt-to-Equity</span>
                                    <span className="font-black text-primary dark:text-sage">Low (0.1)</span>
                                </div>
                            </div>
                        </div>

                        {/* Announcements */}
                        <div className="bg-white dark:bg-primary p-6 rounded-2xl shadow-sm border border-primary/30 dark:border-sage/30">
                            <h3 className="font-bold text-primary dark:text-sage mb-4">Announcements</h3>
                            <div className="bg-sage/10 p-3 rounded-xl border border-primary/50 dark:border-sage/50 mb-3">
                                <p className="text-[10px] font-black text-primary dark:text-sage uppercase tracking-widest mb-1">Update v2.4</p>
                                <p className="text-[11px] font-medium leading-tight text-primary/70 dark:text-sage/70">GST e-invoicing is now mandatory for orders above ₹50k. <a className="text-primary dark:text-sage underline font-bold" href="#">Learn more</a></p>
                            </div>
                            <div className="bg-red-200 p-3 rounded-xl border border-primary/50 dark:border-sage/50">
                                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Warehouse Alert</p>
                                <p className="text-[11px] font-medium leading-tight text-red-500">Stock verification scheduled for Sunday, 26 May.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* footer */}
            <footer className="px-8 py-6 border-t border-primary/50 dark:border-sage/50 flex items-center justify-between text-[10px] font-bold text-primary dark:text-sage  uppercase tracking-widest">
                <div>
                    Vertex Retail OS v4.12.0 • Build ID: 88219-X
                </div>
                <div className="flex space-x-6">
                    <a className="hover:underline" href="#">Documentation</a>
                    <a className="hover:underline transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:underline transition-colors" href="#">Terms of Service</a>
                    <p className="font-black">Help Desk (24/7)</p>
                </div>
            </footer>
        </main>
    )
}

export default Dashboard;