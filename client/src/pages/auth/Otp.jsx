function Otp() {
    return (
        <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-sage/10 p-8 md:p-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl font-light">verified_user</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Verify Your Identity</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    We've sent a 6-digit code to your email <span className="font-medium text-slate-700 dark:text-slate-200">(u***@example.com)</span>. Please enter it below.
                </p>
                <form action="#" className="w-full space-y-8">
                    <div className="flex justify-between gap-2 md:gap-3">
                        <input autofocus="" className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                        <input className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                        <input className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                        <input className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                        <input className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                        <input className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none transition-all dark:border-slate-700" maxlength="1" placeholder="•" type="text" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            Resend code in <span className="font-semibold">00:45</span>
                        </p>
                        <button className="text-sm font-semibold text-slate-300 dark:text-slate-600 cursor-not-allowed transition-colors" disabled="" type="button">
                            Resend Code
                        </button>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:opacity-95 transition-all shadow-lg shadow-primary/10 active:scale-[0.98]" type="submit">
                            Verify &amp; Proceed
                        </button>
                        <a className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Back to Login
                        </a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Otp;