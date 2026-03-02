function Login() {
    return (
        <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
            <div
                className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                <div className="md:w-5/12 relative bg-primary flex flex-col items-center justify-center p-12 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                    </div>
                    <div className="absolute -bottom-20 -left-20 size-64 bg-sage/20 rounded-full blur-3xl"></div>
                    <div className="absolute -top-20 -right-20 size-64 bg-sage/10 rounded-full blur-3xl"></div>
                    <div
                        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl text-center flex flex-col items-center gap-4 shadow-2xl">
                        <div className="size-16 rounded-full bg-sage/30 flex items-center justify-center text-white mb-2">
                            <span className="material-symbols-outlined text-4xl">vitals</span>
                        </div>
                        <h3 className="text-white text-2xl font-bold">Welcome Back</h3>
                        <p className="text-sage text-sm leading-relaxed max-w-[200px]">Your smart dashboard is ready for your
                            next move.</p>
                    </div>
                    <div className="mt-12 text-center z-10 hidden md:block">
                        <p className="text-sage/60 text-xs uppercase tracking-widest font-bold">Smart Retail SaaS v2.4</p>
                    </div>
                </div>
                <div className="md:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Login</h2>
                            <p className="text-slate-500 dark:text-slate-400">Log in to manage your smart store and view
                                analytics.</p>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email
                                    Address</label>
                                <div className="relative group">
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                                    <input
                                        className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-900 dark:text-white"
                                        placeholder="name@company.com" required type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                                    <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot
                                        Password?</a>
                                </div>
                                <div className="relative group">
                                    <span
                                        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                                    <input
                                        className="w-full pl-12 pr-12 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-900 dark:text-white"
                                        placeholder="••••••••" required type="password" />
                                    <button
                                        className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        type="button">visibility</button>
                                </div>
                            </div>
                            <button
                                className="w-full relative overflow-hidden group py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
                                type="submit">
                                <span className="relative z-10">Log In</span>
                                <div
                                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                                </div>
                            </button>
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                                <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-wider">or
                                    continue with</span>
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                            </div>
                            <button
                                className="w-full py-3.5 flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium"
                                type="button">
                                <img alt="Google Logo" className="size-5" data-alt="Google colorful company logo"
                                    src="https://www.svgrepo.com/show/475656/google-color.svg" />
                                <span>Google Account</span>
                            </button>
                        </form>
                        <p className="mt-10 text-center text-sm text-slate-500">
                            Don't have an account?
                            <a className="text-primary font-bold hover:underline" href="/signup">Sign Up Now</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
