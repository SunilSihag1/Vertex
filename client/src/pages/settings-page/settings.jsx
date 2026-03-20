import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";


const Settings = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="py-12 px-6 lg:py-20">

      <div className="lg:hidden mb-6 flex items-center justify-between">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg bg-primary text-white"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <h2 className="text-xl font-bold">Settings</h2>

      </div>

      {/* FLEX CONTAINER */}
      <div className="flex gap-12 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className={`
                w-[380px] bg-white lg:block
                ${menuOpen ? "block" : "hidden"}
                fixed lg:static top-16 left-0 h-[calc(100vh-1rem)] overflow-y-auto z-40 p-6
                `}>

          <div className="mx-auto max-w-md lg:ml-24 lg:mr-auto lg:max-w-xl">

            <div className="mb-10">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary dark:text-accent-sage mb-2">
                Settings</h1>
              <p className="text-text-charcoal/60 dark:text-slate-400 font-medium">Customize your tailoring experience and
                shop preferences</p>
            </div>

            <div className="glass-card rounded-2xl p-6 mb-10 flex items-center gap-5 shadow-sm border-accent-sage/20">
              <div className="relative">
                <img alt="User Profile" className="w-16 h-16 rounded-full object-cover ring-2 ring-accent-sage/30 p-0.5"
                  data-alt="Close up portrait of a smiling woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_kNbSqE-UFiMiHZ6earHno6OfLgso-MileV2_xRZu6xqi_3t2iJyzcd5bgJ6oN79saDF81jO-trU-AgkgOmeGZAPWBqmCzVE_hlVxxEZNaiAbi5qFyCeQViw9VTgarTJjPrhSnVM8E0b_s7oi9HgjFghFwCzWyRxDIl1Ci7KZEsyLMhXh6Pz8RAr9M-8UwqVJJabp6Kudtp-465HpJZshqEVM_lQ3HY3ZyJZmR1pRnoYZ8acgLUi_xRAWEqvw7CcmovHtdzd8J6al" />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-white dark:border-background-dark rounded-full">
                </div>
              </div>
              <div>
                <h2 className="font-display font-bold text-lg">Elena Rostova</h2>
                <p className="text-sm text-text-charcoal/50 dark:text-slate-400">Pro Designer &amp; Curated Member</p>
              </div>
            </div>

            {/* ---- TUMHARA POORA CODE SAME RAHEGA ---- */}

            <section className="mb-10">
              <div className="space-y-3">

                <button
                  onClick={() => {
                    navigate("edit-profile");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">person_outline</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Edit Profile</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>


                <button
                  onClick={() => {
                    navigate("reset-password");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">lock_open</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Change Password</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>

                <button
                  onClick={() => {
                    navigate("notifications");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">notifications_none</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Notification
                      Settings</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>


                <button
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-red-50/50 dark:hover:bg-red-900/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                    </div>
                    <span className="font-medium text-red-600">Logout</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-red-600/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
              </div></section>

            <section className="mb-10">
              <div className="space-y-3">

                <button
                  onClick={() => {
                    navigate("my-orders");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">My Orders</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>



                <button
                  onClick={() => {
                    navigate("saved-address");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Saved Addresses</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>



                <button
                  onClick={() => {
                    navigate("wishlist");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Wishlist</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>

              </div>
            </section>


            <section className="mb-10">
              <div className="space-y-3">

                <button
                  onClick={() => {
                    navigate("shop-profile");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">storefront</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Shop Profile</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>



                <button
                  onClick={() => {
                    navigate("manage-products");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Manage Products</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>



                <button
                  onClick={() => {
                    navigate("sales-analytics");
                    setMenuOpen(false);
                  }}
                  className="w-full glass-card hover:bg-white/90 dark:hover:bg-primary/10 group flex items-center justify-between p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary dark:text-accent-sage group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">analytics</span>
                    </div>
                    <span className="font-medium text-text-charcoal dark:text-slate-200">Sales Analytics</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-text-charcoal/30 group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>

              </div>

            </section>



            {/* baki saara code unchanged */}

            <div className="text-center lg:text-left mt-8 mb-12">
              <p className="text-text-charcoal/40 dark:text-slate-500 text-xs">
                Tailored version 2.4.0 • Built for Sustainable Fashion
              </p>
              <div className="mt-2 flex justify-center lg:justify-start gap-4">
                <a className="text-xs font-medium text-primary hover:underline" href="#">Privacy Policy</a>
                <a className="text-xs font-medium text-primary hover:underline" href="#">Terms of Service</a>
              </div>
            </div>

          </div>

        </div>
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 lg:hidden"
          />
        )}

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 pt-6">
          <Outlet />
        </div>

      </div>

    </main>
  );
};

export default Settings;