const ResetPassword = () => {
  return (
    <div className="max-w-md mx-auto lg:max-w-lg lg:ml-24 lg:mr-auto">
      <header className="mb-10 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary font-display">
          Reset Password
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-light">
          Create a new password for your account.
        </p>
      </header>
      <div className="glass-card rounded-2xl p-8 lg:p-10">
        <form action="#" className="space-y-6" method="POST">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" for="new-password">
              New Password
            </label>
            <div className="relative group">
              <input className="w-full bg-white/50 border border-slate-200 dark:border-primary/20 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 placeholder:text-slate-300" id="new-password" placeholder="••••••••" type="password" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" for="confirm-password">
              Confirm Password
            </label>
            <div className="relative group">
              <input className="w-full bg-white/50 border border-slate-200 dark:border-primary/20 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 placeholder:text-slate-300" id="confirm-password" placeholder="••••••••" type="password" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <button className="shimmer w-full lg:w-48 bg-primary text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
              <span>Reset Password</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </form>
        <div className="mt-8 text-center lg:text-left">
          <a className="text-sm font-medium text-primary/70 hover:text-primary underline-offset-4 hover:underline transition-all" href="#">
            Back to Login
          </a>
        </div>
      </div>
      <div className="mt-12 opacity-20 hidden lg:block">
        <div className="flex gap-4">
          <div className="h-[1px] w-12 bg-primary"></div>
          <div className="h-[1px] w-8 bg-primary"></div>
          <div className="h-[1px] w-4 bg-primary"></div>
        </div>
      </div>
    </div>

  );
};
export default ResetPassword;