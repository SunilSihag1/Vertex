const SalesAnalytics = () => {
return(
<>
  <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-2">
      <h1 className="text-4xl font-extrabold tracking-tight text-[#143109]">Sales Analytics</h1>
      <p className="text-charcoal/70 dark:text-slate-400 font-medium">Track your shop performance and understand sales
        trends.</p>
    </div>
    <div className="relative inline-block w-full md:w-48">
      <select
        className="appearance-none w-full bg-white dark:bg-primary/20 border border-slate-200 dark:border-primary/40 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold focus:ring-2 focus:ring-primary outline-none cursor-pointer">
        <option>Last 30 Days</option>
        <option>Last 7 Days</option>
        <option>Last 3 Months</option>
        <option>Last Year</option>
      </select>
      <span
        className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
    </div>
  </header>
  
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span
          className="material-symbols-outlined text-primary dark:text-accent-sage bg-primary/10 dark:bg-primary/40 p-2 rounded-lg">payments</span>
        <span
          className="text-emerald-500 dark:text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-slate-500">Total Revenue</p>
      <h3 className="text-2xl font-bold mt-1 text-[#143109]">₹52,400</h3>
    </div>
    <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span
          className="material-symbols-outlined text-primary dark:text-accent-sage bg-primary/10 dark:bg-primary/40 p-2 rounded-lg">shopping_bag</span>
        <span
          className="text-emerald-500 dark:text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">+5%</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-slate-500">Total Orders</p>
      <h3 className="text-2xl font-bold mt-1 text-[#143109]">128</h3>
    </div>
    <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span
          className="material-symbols-outlined text-primary dark:text-accent-sage bg-primary/10 dark:bg-primary/40 p-2 rounded-lg">check_circle</span>
        <span
          className="text-emerald-500 dark:text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">+8%</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-slate-500">Products Sold</p>
      <h3 className="text-2xl font-bold mt-1 text-[#143109]">312</h3>
    </div>
    <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span
          className="material-symbols-outlined text-primary dark:text-accent-sage bg-primary/10 dark:bg-primary/40 p-2 rounded-lg">insights</span>
        <span className="text-rose-500 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded-full">-0.5%</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-slate-500">Conversion Rate</p>
      <h3 className="text-2xl font-bold mt-1 text-[#143109]">4.8%</h3>
    </div>
  </section>
  
  <section className="mb-8">
    <div className="glass-card p-8 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-primary dark:text-white">Sales Overview</h2>
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent-sage"></span>
            <span>This Period</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-50">
            <span className="w-3 h-3 rounded-full bg-slate-400"></span>
            <span>Previous Period</span>
          </div>
        </div>
      </div>
      <div className="relative h-[250px] w-full flex items-end justify-between gap-2 px-2">
        
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[60%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[45%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[50%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">JAN</p>
        </div>
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[75%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[60%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[65%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">FEB</p>
        </div>
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[55%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[40%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[45%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">MAR</p>
        </div>
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[90%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[75%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[80%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">APR</p>
        </div>
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[85%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[70%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[75%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">MAY</p>
        </div>
        <div className="flex-1 group relative">
          <div
            className="bg-accent-sage/20 dark:bg-accent-sage/10 w-full h-[100%] rounded-t-lg transition-all group-hover:bg-accent-sage/30">
          </div>
          <div
            className="bg-accent-sage w-full h-[85%] rounded-t-lg absolute bottom-0 transition-all group-hover:h-[90%]">
          </div>
          <p className="text-[10px] text-center mt-4 font-bold text-slate-400">JUN</p>
        </div>
      </div>
    </div>
  </section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <section>
      <div className="glass-card p-6 rounded-2xl shadow-sm h-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary dark:text-white">Top Selling Products</h2>
          <button className="text-sm font-semibold text-primary/60 dark:text-accent-sage hover:underline">View
            All</button>
        </div>
        <ul className="space-y-4">
          <li
            className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img alt="Custom Cotton T-Shirt" className="w-full h-full object-cover"
                  data-alt="Minimalist custom white cotton t-shirt flat lay"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuebrPM0N5mZ-jer-1UrOSgMCUykrMSL8_pD1yIZROm5x-5wkdEQYvxyFOVGxdeIEnxEJdQ4WPQXYUtuJ26mYoV7VD9D43glMzoRwWsrstVfb6iyN7j0-oVkTWenvrcPInwne7UbYm-00KJWdQHkTcHgqDQeHKGwdD_07it4jwUbVW2NwGlGCvpBeXY8-bvMBTJSvkbXe30Q5olF1fv4LvA63eFkXxmwFCv196Gr5p0bxPQNxEVCvePsY3cXMiafihXgJPtSvmamq" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal dark:text-white">Custom Cotton T-Shirt</p>
                <p className="text-xs text-charcoal/50 dark:text-slate-500">120 units sold</p>
              </div>
            </div>
            <p className="font-bold text-sm text-primary dark:text-accent-sage">₹1,08,000</p>
          </li>
          <li
            className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img alt="Premium Polo Shirt" className="w-full h-full object-cover"
                  data-alt="Dark green premium polo shirt template"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA58_4Da7-4Zsf2vuSDCO2tSGOq9lS10xHhOKdszIkDnVr9OVn8PfTn2-9D-5R13ETSGTOce5dCT5lsZoqw9AqY1szXtA00AtF1zOCusHtAaprGstyecDmG-2UqAKLBKwiA7ZeYyqtc7hSJI3Y7jep94v5DOgd7wP-e7l3LlCcoGZe3381cJPzq1QPg6q_wxWwpCGHXexP8KF7c74nX8F5E3nBskqtrc9BvqH4pX6D_wpRyz4BJnbABb-pf-_xW_xSOhRpj2gIBGC_o" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal dark:text-white">Premium Polo Shirt</p>
                <p className="text-xs text-charcoal/50 dark:text-slate-500">75 units sold</p>
              </div>
            </div>
            <p className="font-bold text-sm text-primary dark:text-accent-sage">₹97,500</p>
          </li>
          <li
            className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img alt="Sports Performance Tee" className="w-full h-full object-cover"
                  data-alt="Breathable sports fabric tee athletic fit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrWlJo7cVYy0dYZ8eGObEADpcMMB3vy7AOEb1vNasf_vDu2qJ4Glyko3QTBAcQBg288wYvoELwcppfDApu8i9T-9Tu7QgQR1l_X5M5SL6Pn5J1FLibxeuh9bje-sCLatytRDuRnUr2_DzKpDlmu1GGmoy8LFUEcIp42AtEWodUbkXqQVJrGVo9wz8HspOLITT8zjLbF2QMDinP_8nRrz9-7yRUbBE8Yo_sa_IN3OmxHM63YOvy2NL6YltZFVNJfhmaOeukQgX3ANmv" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal dark:text-white">Sports Performance Tee</p>
                <p className="text-xs text-charcoal/50 dark:text-slate-500">60 units sold</p>
              </div>
            </div>
            <p className="font-bold text-sm text-primary dark:text-accent-sage">₹59,940</p>
          </li>
        </ul>
      </div>
    </section>
    
    <section>
      <div className="glass-card p-6 rounded-2xl shadow-sm h-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary dark:text-white">Recent Orders</h2>
          <button className="text-sm font-semibold text-primary/60 dark:text-accent-sage hover:underline">View
            Log</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-primary/10 dark:border-white/10">
              <tr>
                <th
                  className="pb-3 text-[10px] font-bold uppercase tracking-wider text-charcoal/40 dark:text-slate-500">
                  ID</th>
                <th
                  className="pb-3 text-[10px] font-bold uppercase tracking-wider text-charcoal/40 dark:text-slate-500">
                  Customer</th>
                <th
                  className="pb-3 text-[10px] font-bold uppercase tracking-wider text-charcoal/40 dark:text-slate-500">
                  Amount</th>
                <th
                  className="pb-3 text-[10px] font-bold uppercase tracking-wider text-charcoal/40 dark:text-slate-500 text-right">
                  Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 dark:divide-white/5">
              <tr>
                <td className="py-4 text-xs font-semibold">CW-2041</td>
                <td className="py-4">
                  <p className="text-xs font-bold dark:text-white">Aditi Sharma</p>
                  <p className="text-[10px] text-charcoal/50">Custom Cotton T-Shirt</p>
                </td>
                <td className="py-4 text-xs font-bold">₹899</td>
                <td className="py-4 text-right">
                  <span
                    className="px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">Delivered</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-xs font-semibold">CW-2045</td>
                <td className="py-4">
                  <p className="text-xs font-bold dark:text-white">Rahul Patel</p>
                  <p className="text-[10px] text-charcoal/50">Polo Shirt</p>
                </td>
                <td className="py-4 text-xs font-bold">₹1299</td>
                <td className="py-4 text-right">
                  <span
                    className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold">Shipped</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-xs font-semibold">CW-2049</td>
                <td className="py-4">
                  <p className="text-xs font-bold dark:text-white">Neha Kapoor</p>
                  <p className="text-[10px] text-charcoal/50">Sports Tee</p>
                </td>
                <td className="py-4 text-xs font-bold">₹999</td>
                <td className="py-4 text-right">
                  <span
                    className="px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold">Processing</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</>
);
};

export default SalesAnalytics;