const Signup = () => {
  return (

    <main className="min-h-screen flex flex-col lg:flex-row">
      <section className="relative hidden lg:flex lg:w-5/12 xl:w-1/2 bg-primary overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage/20 rounded-full blur-[120px]"></div>
        <div className="relative z-10 w-full max-w-lg space-y-8">
          <div className="glass-card rounded-xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/30 text-sage">
                <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Success: Store Created</p>
                <p className="text-white/60 text-sm">Your online boutique is live!</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-2xl ml-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-sage">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-white text-lg leading-relaxed italic">
                "This platform transformed our retail operations in weeks. Managing inventory has never been this intuitive."
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-sage/50" data-alt="Professional retail store owner headshot" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu-EzCssbvEt5vgTHfTXHLwlK4JqEZzBeh7WQBhiH_3rbSHoOAvriZkuxzRhkxJW7o0GO9FcQEusMwfpE26FzmbhGbhKsgEA1ldaOW1TKmIu2tq3r_pGRDMGK-XecKFp_wdgqwO3KX32c0OjblDqRDHUtHqZTE_gBWcLZC2H2ku861ZUcahVWDw1xLHZpQPaLYg4VGymK3bRJ91qW1quSr2dfS2C2-lCqQAcEwuJLsHepmaZt-lWMGe3-zfEZZccYOMkqJ5nObzQM')"}}></div>
                <div>
                  <p className="text-white font-bold text-sm">Sarah Jenkins</p>
                  <p className="text-sage text-xs font-medium uppercase tracking-wider">Top Seller • 5,000+ Sales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="h-10 w-10 rounded-full border-2 border-primary bg-cover" data-alt="User avatar placeholder" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmL5FOdRxXz0efhUOueITJnxpbdCudd5NxDD-7E_QVDNtRMBUdzoLaoOGxqD9-IHeCE_Tp3DqQF15zLxUjv1dp4o5SMXX6JGs0gDGGefAfln_x179a7uwdm-eYeKRLUputcbl8-NlHoIwSsEk0Lbit1u7_UHf2017qdHMwXokamiJm6-9T9lJHu-LOsd9seRUY7YQeYnhLYMopb2l8zpgr0LemO-xn4rPsGM-vX4yOHoT-xx5lVL4GFMLnghJ5Thn3hYmyN3e8XGg')"}}></div>
              <div className="h-10 w-10 rounded-full border-2 border-primary bg-cover" data-alt="User avatar placeholder" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF9OZ1_DwWjSvUAX3rgbYeJeIoG2xsI6ASDF-eeC9j4AfLcdDFcJF9pXer4C_rCUIWMQ-9AkZvps1iszMyB8UPjXYlfcbDn7fPt3akoDo5v08Y0c-bJHybzLPB9uwbwHkbmItVMu4Ho0rrfljPV4Hw2X-hnqx1q-6qv06yIyxjtATQAMqXXQ_PpuzURoMEd3vOfciYWT0vn0JTcLSmuQO_qWZgpj_QwWip_M1Jg3c2sb5MjbZIMTI4vvk0YSWge1N5mB8vYo5tECI')"}}></div>
              <div className="h-10 w-10 rounded-full border-2 border-primary bg-cover" data-alt="User avatar placeholder" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOTpyIDadOrfsspQPkw0WubAxr3ahlYTPX-jP5KPlkoc1eIHVQMQScmUJv8nxl7PVgZNZOkmBL6x3aB-w1kbRxRK11PfLT1roxf6wS6JAswjhKFf8jiIX_c4WYCarwGlPVGuDbEzDwXjQQxMwWZW2gf05y8seAGPaYSpzQ19v6Ql-LLL00U4SF7YGbrdzO20MIjCwt_2AXfgglh687m8iQSnWLMUTpIC1tuDLVl82PKLtcT5NHXA3RH2jhaQkrBZnrjSUM-hn66-s')"}}></div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-sage text-primary text-xs font-bold">+5k</div>
            </div>
            <p className="text-white/70 text-sm">Join owners building the future of retail.</p>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
        <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
          <div className="w-full max-w-[480px] space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight lg:text-4xl">Get started for free</h1>
              <p className="text-slate-500 text-base">No credit card required. Build your store in minutes.</p>
            </div>
            <form className="space-y-5" onsubmit="return false;">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">person</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all placeholder:text-slate-400" placeholder="Jane Doe" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Work Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all placeholder:text-slate-400" placeholder="jane@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Create Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                  <input className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <span className="material-symbols-outlined text-xs text-sage">check_circle</span>
                    <span>8+ characters</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <span className="material-symbols-outlined text-xs">radio_button_unchecked</span>
                    <span>1 number</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <span className="material-symbols-outlined text-xs">radio_button_unchecked</span>
                    <span>1 special character</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Confirm Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock_reset</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                </div>
              </div>
              <button className="shimmer w-full bg-primary text-white py-4 rounded-lg font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span>Create Your Store</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-slate-700 dark:text-slate-200 font-semibold text-sm">Sign up with Google</span>
              </button>
            </form>
            <p className="text-[12px] text-slate-400 text-center leading-relaxed">
              By creating an account, you agree to our
              <a className="text-slate-600 dark:text-slate-300 font-semibold underline decoration-slate-300" href="#">Terms of Service</a>
              and
              <a className="text-slate-600 dark:text-slate-300 font-semibold underline decoration-slate-300" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
