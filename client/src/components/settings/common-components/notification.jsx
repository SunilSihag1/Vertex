const Notification = () => {
  return (
    <div className="max-w-md lg:max-w-xl lg:ml-24 lg:mr-auto flex flex-col gap-8">

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-accent-sage text-[#143109]">Notifications
            </h1>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Stay updated with your orders, shop activity, and important updates.
            </p>
          </div>
          <button
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#143109]/10 bg-white text-[#143109] text-sm font-semibold hover:bg-slate-50 shadow-sm transition-all duration-300">
            <span className="material-symbols-outlined text-sm">done_all</span>
            Mark all as read
          </button>
        </div>
      </header>

      <div
        className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-accent-sage/10"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(20, 49, 9, 0.08)",
          boxShadow: "0 10px 30px -10px rgba(20, 49, 9, 0.1)"
        }}
      >

        <div
          className="relative group cursor-pointer border-b border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#143109]"></div>
          <div className="flex gap-4 p-5 lg:p-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#143109]/10 flex items-center justify-center text-[#143109]">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-[#143109]">Order Confirmed</h3>
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-accent-sage/50">2
                  hours ago</span>
              </div>
              <p className="text-sm text-slate-600 leading-normal">
                Your custom polo t-shirt order has been successfully placed.
              </p>
            </div>
          </div>
        </div>

        <div className="group cursor-pointer border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
          <div className="flex gap-4 p-5 lg:p-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-[#143109]">Order Shipped</h3>
                <span
                  className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-accent-sage/50">Yesterday</span>
              </div>
              <p className="text-sm text-slate-600 leading-normal">
                Your order <span className="font-mono font-medium text-primary dark:text-accent-sage">#CW-2041</span> has been
                shipped and is on the way.
              </p>
            </div>
          </div>
        </div>

        <div className="group cursor-pointer border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
          <div className="flex gap-4 p-5 lg:p-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">palette</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-[#143109]">New Design Template</h3>
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-accent-sage/50">3
                  days ago</span>
              </div>
              <p className="text-sm text-slate-600 leading-normal">
                A new summer collection template is available in the design studio.
              </p>
            </div>
          </div>
        </div>

        <div className="group cursor-pointer border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
          <div className="flex gap-4 p-5 lg:p-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">favorite</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-[#143109]">Wishlist Update</h3>
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-accent-sage/50">5
                  days ago</span>
              </div>
              <p className="text-sm text-slate-600 leading-normal">
                One of your wishlist items is now back in stock.
              </p>
            </div>
          </div>
        </div>

        <div className="group cursor-pointer border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
          <div className="flex gap-4 p-5 lg:p-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-[#143109]">Shop Performance</h3>
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-accent-sage/50">1
                  week ago</span>
              </div>
              <p className="text-sm text-slate-600 leading-normal">
                Your shop received 12 new orders this week.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start items-center gap-6 px-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#143109]"></span>
          <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">1 Unread</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-300"></span>
          <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">48 Total Notifications</span>
        </div>
      </div>
    </div>

  );
};

export default Notification;

