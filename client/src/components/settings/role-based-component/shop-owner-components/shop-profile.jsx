const ShopProfile = () => {
  return(
    <div className="max-w-md mx-auto lg:max-w-xl lg:ml-24 lg:mr-auto space-y-8">
      <section className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-charcoal dark:text-slate-100 text-[#143109]">Shop
          Profile</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your shop details and brand information.</p>
      </section>
      <div className="bg-[#143109]/5 border-[#143109]/10 p-4 rounded-xl flex gap-3 items-start">
        <span className="material-symbols-outlined text-primary dark:text-sage">info</span>
        <p className="text-sm text-primary/80 dark:text-sage/90 leading-relaxed">
          Your shop profile helps customers understand your brand and products better. Complete your information to
          build trust.
        </p>
      </div>
      <section className="glass-card rounded-xl p-8 bg-white shadow-sm border border-[#143109]/10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group">
            <div
              className="w-24 h-24 rounded-full border-4 border-sage/20 overflow-hidden bg-primary/5 flex items-center justify-center shadow-inner">
              <img className="w-full h-full object-cover" data-alt="Custom Wear Studio minimalist brand logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwBROJ6bU6Ob3tK-Z19W8YxMoZZcUujhRRZJS5dgwKGeLwWx3bK8Ag2iT3Z-tbuLgL5AP28w41fGjKACGpNP1EgZ8krygz8GZUf1IKBDilily9_oSezaeTkDypZU5XNq2ssVcAOJM7E_MrCRKAFN1ziGn7Sr-mZez2YP-3D_Q88qjmlMvMwjaK7QjYuFb1t42SgcTtJShWUJ6j8PH7HGqHwYOOSPzRkj5Iwx1hAoRkqxB_dnQcwHYCT_x8v4TNB0xwWac9mcc5YWm-" />
            </div>
            <button
              className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-xl font-bold text-[#143109]">Custom Wear Studio</h2>
            <p className="text-sm text-slate-500 dark:text-sage/60 mb-2 italic">"Personalized clothing crafted for
              you"</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-yellow-500 text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-sm font-semibold">4.6</span>
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-sage/20"></div>
              <div className="text-xs">
                <span className="font-bold text-primary dark:text-sage">48</span>
                <span className="text-slate-500 dark:text-slate-400 ml-1">Products</span>
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-sage/20"></div>
              <div className="text-xs">
                <span className="font-bold text-primary dark:text-sage">120</span>
                <span className="text-slate-500 dark:text-slate-400 ml-1">Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="glass-card rounded-xl p-8 bg-white shadow-sm border border-[#143109]/10">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#143109]">
          <span className="material-symbols-outlined text-primary dark:text-sage">storefront</span>
          Shop Information
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-1.5">
            <label
              className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Shop
              Name</label>
            <input
              className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
              type="text" value="Custom Wear Studio" />
          </div>
          <div className="space-y-1.5">
            <label
              className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Shop
              Description</label>
            <textarea
              className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
              rows="3">At Custom Wear Studio, we believe every piece of clothing should tell a unique story. Our artisans craft premium personalized apparel tailored to your lifestyle.</textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Contact
                Email</label>
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                type="email" value="hello@customwear.studio" />
            </div>
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Phone
                Number</label>
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                type="tel" value="+1 (555) 234-8890" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Business
              Address</label>
            <input
              className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
              type="text" value="128 Fashion Way, Design District" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">City</label>
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                type="text" value="New York" />
            </div>
            <div className="space-y-1.5">
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">State</label>
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                type="text" value="NY" />
            </div>
            <div className="space-y-1.5 col-span-2 lg:col-span-1">
              <label
                className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-sage/70 text-[#143109]/70">Country</label>
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                type="text" value="United States" />
            </div>
          </div>
        </div>
      </section>
      <section className="glass-card rounded-xl p-8 bg-white shadow-sm border border-[#143109]/10">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#143109]">
          <span className="material-symbols-outlined text-primary dark:text-sage">image</span>
          Brand Identity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm font-medium">Shop Logo</p>
            <div
              className="aspect-square w-full rounded-xl border-2 border-dashed border-sage/30 bg-sage/5 flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-sage/10 transition-colors group">
              <span
                className="material-symbols-outlined text-3xl text-sage group-hover:scale-110 transition-transform">add_a_photo</span>
              <p className="text-xs mt-2 font-medium">Upload Logo</p>
              <p className="text-[10px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium">Banner Image</p>
            <div
              className="aspect-video w-full rounded-xl border-2 border-dashed border-sage/30 bg-sage/5 flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-sage/10 transition-colors group">
              <div className="w-full h-full relative overflow-hidden rounded-lg">
                <img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                  data-alt="Fashion store interior blurred background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7MrTvq1zoWQYG8XNHhr74Y5zt1GE-KBjFkt2MZB9LjBqeYCMvrk8oAp8tJtrKnrh8Vi-4j-CrYtmbYfhjOGd1rYKCN5BJ4aNLpcgz3KOjmDICVfU2ALh4vdWwnGcwChVPys7dpughhlCZIa-zRmbXodnsBH2QvvIVSVs7_D1FM6mBSftoSHo8Ot1I9XSmu1Ho7iMWHslysPPVx6IYtoz8NtZrsZrGhoQYfGWzH5yAHC-imCh98wHGK2XRPT6JrlP-2wua6wzm_E_" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="material-symbols-outlined text-3xl text-sage group-hover:scale-110 transition-transform">wallpaper</span>
                  <p className="text-xs mt-2 font-medium">Change Banner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="glass-card rounded-xl p-8 bg-white shadow-sm border border-[#143109]/10">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#143109]">
          <span className="material-symbols-outlined text-primary dark:text-sage">share</span>
          Social Links
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-600">
              <span className="material-symbols-outlined">camera</span>
            </div>
            <div className="flex-1">
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                placeholder="instagram.com/yourshop" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </div>
            <div className="flex-1">
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                placeholder="facebook.com/yourshop" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary dark:text-sage">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="flex-1">
              <input
                className="w-full bg-[#143109]/5 border-[#143109]/10 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#143109] focus:border-[#143109] outline-none transition-all text-[#143109]"
                placeholder="www.yourwebsite.com" type="text" />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200 dark:border-sage/10">
        <button
          className="px-6 py-2.5 rounded-lg border border-[#143109] text-[#143109] font-semibold hover:bg-[#143109] hover:text-white transition-all duration-300">
          Cancel
        </button>
        <button
          className="px-8 py-2.5 rounded-lg bg-[#143109] text-white font-semibold hover:shadow-[0_4px_20px_rgba(20,49,9,0.3)] hover:-translate-y-0.5 transition-all duration-300">
          Save Changes
        </button>
      </footer>
    </div>

  );
};
export default ShopProfile;

