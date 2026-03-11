const Pricing = () => {
    return (
        <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div class="layout-container flex h-full grow flex-col">
                <main class="px-6 lg:px-40 flex flex-1 justify-center py-12">
                    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
                        <div class="flex flex-col items-center text-center gap-4 mb-12">
                            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/30 text-primary dark:text-accent-green font-bold text-sm">
                                <span class="material-symbols-outlined text-sm">auto_awesome</span>
                                14-day free trial
                            </div>
                            <h1 class="text-4xl lg:text-5xl font-black tracking-tight text-primary dark:text-slate-100">
                                Choose Your Plan
                            </h1>
                            <p class="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                                Unlock powerful ERP tools tailored for your business scale. No credit card required to start your journey.
                            </p>
                        </div>
                        <div class="flex justify-center mb-16">
                            <div class="inline-flex items-center p-1.5 bg-slate-200/50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                                <button class="px-8 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-primary text-primary dark:text-slate-100 shadow-sm transition-all">
                                    Monthly
                                </button>
                                <button class="px-8 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-slate-100 transition-all flex items-center gap-2">
                                    Yearly
                                    <span class="px-2 py-0.5 text-[10px] bg-primary text-white rounded-full">Save 20%</span>
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            <div class="plan-card flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                                <div class="mb-8">
                                    <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Basic</h3>
                                    <div class="flex items-baseline gap-1">
                                        <span class="text-4xl font-black text-primary dark:text-slate-100">₹999</span>
                                        <span class="text-slate-500 text-sm font-medium">/month</span>
                                    </div>
                                    <p class="mt-4 text-sm text-slate-600 dark:text-slate-400">Perfect for small shops and individual retailers.</p>
                                </div>
                                <button class="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-slate-100 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mb-8">
                                    Get Started
                                </button>
                                <div class="space-y-4">
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Essential features
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Single shop support
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Inventory basics
                                    </div>
                                    <div class="flex items-center gap-3 text-sm opacity-40">
                                        <span class="material-symbols-outlined">cancel</span>
                                        Advanced analytics
                                    </div>
                                </div>
                            </div>
                            <div class="plan-card relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary shadow-xl scale-105 z-10">
                                <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                                <div class="mb-8">
                                    <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Pro</h3>
                                    <div class="flex items-baseline gap-1">
                                        <span class="text-4xl font-black text-primary dark:text-slate-100">₹1,999</span>
                                        <span class="text-slate-500 text-sm font-medium">/month</span>
                                    </div>
                                    <p class="mt-4 text-sm text-slate-600 dark:text-slate-400">Optimized for growing businesses with multiple staff members.</p>
                                </div>
                                <button class="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-all mb-8 shadow-lg shadow-primary/20">
                                    Buy Pro
                                </button>
                                <div class="space-y-4">
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        everything in Basic
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Advanced analytics
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Role-based access
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Priority support
                                    </div>
                                </div>
                            </div>
                            <div class="plan-card flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                                <div class="mb-8">
                                    <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Enterprise</h3>
                                    <div class="flex items-baseline gap-1">
                                        <span class="text-4xl font-black text-primary dark:text-slate-100">₹3,999</span>
                                        <span class="text-slate-500 text-sm font-medium">/month</span>
                                    </div>
                                    <p class="mt-4 text-sm text-slate-600 dark:text-slate-400">Scalable solution for multi-branch corporations.</p>
                                </div>
                                <button class="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-slate-100 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mb-8">
                                    Contact Sales
                                </button>
                                <div class="space-y-4">
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Multi-branch support
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        API access
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Custom integrations
                                    </div>
                                    <div class="flex items-center gap-3 text-sm">
                                        <span class="material-symbols-outlined text-primary dark:text-accent-green">check_circle</span>
                                        Account manager
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-20">
                            <h2 class="text-2xl font-bold mb-8 text-primary dark:text-slate-100">Compare Features</h2>
                            <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                                            <th class="p-6 text-sm font-bold text-slate-900 dark:text-slate-100">Features</th>
                                            <th class="p-6 text-sm font-bold text-center text-slate-900 dark:text-slate-100">Basic</th>
                                            <th class="p-6 text-sm font-bold text-center text-slate-900 dark:text-slate-100">Pro</th>
                                            <th class="p-6 text-sm font-bold text-center text-slate-900 dark:text-slate-100">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr>
                                            <td class="p-6 text-sm text-slate-700 dark:text-slate-300">Inventory Management</td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                        </tr>
                                        <tr>
                                            <td class="p-6 text-sm text-slate-700 dark:text-slate-300">Advanced Analytics</td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                        </tr>
                                        <tr>
                                            <td class="p-6 text-sm text-slate-700 dark:text-slate-300">Role-based Access Control</td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                        </tr>
                                        <tr>
                                            <td class="p-6 text-sm text-slate-700 dark:text-slate-300">Multi-branch Support</td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                        </tr>
                                        <tr>
                                            <td class="p-6 text-sm text-slate-700 dark:text-slate-300">Custom API Access</td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-slate-300 dark:text-slate-700"><span class="material-symbols-outlined">close</span></td>
                                            <td class="p-6 text-center text-primary"><span class="material-symbols-outlined">check</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="max-w-3xl mx-auto w-full mb-20">
                            <h2 class="text-2xl font-bold mb-8 text-center text-primary dark:text-slate-100">Frequently Asked Questions</h2>
                            <div class="space-y-4">
                                <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 cursor-pointer group">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-bold text-slate-900 dark:text-slate-100">Can I upgrade or downgrade my plan later?</h4>
                                        <span class="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
                                    </div>
                                    <p class="mt-4 text-sm text-slate-600 dark:text-slate-400 hidden group-active:block">Yes, you can upgrade or downgrade your plan at any time from your dashboard settings. Changes are pro-rated.</p>
                                </div>
                                <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 cursor-pointer group">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-bold text-slate-900 dark:text-slate-100">What happens after my 14-day trial?</h4>
                                        <span class="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
                                    </div>
                                </div>
                                <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 cursor-pointer group">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-bold text-slate-900 dark:text-slate-100">Is my data secure?</h4>
                                        <span class="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
                                    </div>
                                </div>
                                <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 cursor-pointer group">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-bold text-slate-900 dark:text-slate-100">How do I cancel my subscription?</h4>
                                        <span class="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Pricing;