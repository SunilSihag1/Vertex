const Wishlist = () => {
  return(
    <div className="w-full max-w-md mx-auto lg:ml-24 lg:mr-auto lg:max-w-xl">
    
      <header className="mb-10">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#143109]">Wishlist</h1>
        <p className="mt-2 text-[#143109]/80 font-medium">Products you saved for later purchase.</p>
      </header>
    
      <div className="flex flex-col gap-6">
    
        <div
          className="glass-card group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl shadow-sm transition-all hover:shadow-md">
          <div className="relative h-32 w-full sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <img alt="Rose Infused Face Oil"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAopV9hKynEV5mtMTTioL-8v2kgMEQAXZI7focgs7kL3D5q8DVulff2ASHo1pCWjj0b_c83oe20PVGxmWtgMYiJLkT1BkJOg6TpRLvmF_cWGX55po002m4gAynPeDuyCscNf-B7fbEBDg8YytmDWucfPMYgJez_ctn1eMCIcDDzKTYjariYnSNOx17qpP4z0aR39xQgAFdf0mPcXhBmQ6K6LD-JR3rlF7oC2fjWkvPKVcLfdqvqJDFldMZM7uAMD6gwa_ugYLfRGohP" />
            <button
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between h-full py-1">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-[#143109]">Rose Infused Face Oil</h3>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-400 text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-[#143109]/70">4.8</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#143109]/80 line-clamp-1">Luxurious organic oil for a radiant, hydrated glow.</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-[#143109]">₹1,499</span>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#143109] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    
        <div
          className="glass-card group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl shadow-sm transition-all hover:shadow-md">
          <div className="relative h-32 w-full sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <img alt="Charcoal Detox Mask"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpm6B-dM09Snmu0ZkTj9soLfwjq-K8iQieuWVjE8sMrXYzNu9cu7kH7f5x9EU5G6bD0qUbSYUvSjsP9UyM816dEh2rQtPNGrprk6sRr1ST9gCX6p_TCCI9aHW3jDYuMS_-IGeQQ2O7MLTvBZxChphtXJg57P70e0zvuc7IrhtvXfWQ5SgBbk6ZqnrdhSlrAninQaE0jH-45-IBUKNJ7YMgOfK70nJgPuPymadfIyvgxkDpxikje_qYlWh4QDn-0zIwHXk70kuUAcWv" />
            <button
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between h-full py-1">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-[#143109]">Charcoal Detox Mask</h3>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-400 text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-[#143109]/70">4.6</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#143109]/80 line-clamp-1">Deep cleansing mask with activated charcoal and
                bentonite clay.</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-[#143109]">₹899</span>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#143109] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    
        <div
          className="glass-card group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl shadow-sm transition-all hover:shadow-md">
          <div className="relative h-32 w-full sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <img alt="Vitamin C Brightening Serum"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7P5apcairYZ0pfulGao2_Dg3g0bSmGjASHOWbmHQIdapygrFBdU7N90T-52y7qDXkp60rsL8fZBVsyl3a9j2r65K0YJstgQHCQk12B9J57HKQAXm1836CQbF-4mGaqErNIVfDI9eFiQVbwAzXi4v6xPAi-e7OMSN2Z5VP_1KPOvyHG_vCoxNJcDCR6ckLfRo9X8iDUk0aezeHnUQWHC2eIf9mPzTRvMf4eE0dALlXUDY9qhtqTYdu9z0VxtplcYV1chuUQO3-TnsT" />
            <button
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between h-full py-1">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-[#143109]">Vitamin C Brightening Serum</h3>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-400 text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-[#143109]/70">4.9</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#143109]/80 line-clamp-1">Potent antioxidant serum to even skin tone and boost
                radiance.</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-[#143109]">₹1,299</span>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#143109] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    
        <div
          className="glass-card group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl shadow-sm transition-all hover:shadow-md">
          <div className="relative h-32 w-full sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <img alt="Lavender Sleep Mist"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ05FtKFkFGZhJNbwNGhvKyXn0LrgdKmbOvybbkGj1k3bD7-S2F6os_pbUWKtlGQOy2L-hVTbnavItywkxsP8ufiHVIAFF9Dg1RtFcY1aovVnxyFzOxB62Ufb0JLeHEahL_JMLp2Ez6XvgEW5LQosD1Y9FBkMaILULAvkIr5wmpuKpgocShkWucH0XQdVyAL5kx9Ek5z2sZfqGHSwmTzdRMPTwOe3fXI4tGosvtd78F4yIj_k0mRjog5aDO6Jkq8Vgj41zDlxuWM6p" />
            <button
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-md">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between h-full py-1">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-[#143109]">Lavender Sleep Mist</h3>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-400 text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold text-[#143109]/70">4.7</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#143109]/80 line-clamp-1">Soothing pillow spray with pure essential oils for
                restful sleep.</p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-[#143109]">₹650</span>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#143109] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="mt-16 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#143109]/10 mb-4">
          <span className="material-symbols-outlined text-[#143109]">favorite_border</span>
        </div>
        <p className="text-[#143109]/70 text-sm font-medium">Your wishlist is empty. Start saving products you love.</p>
        <button
          className="mt-6 font-display font-bold text-[#143109] border-b-2 border-[#143109]/20 hover:border-[#143109] transition-all pb-1 px-1">
          Browse Products
        </button>
      </div>
    </div>

  );
};
export default Wishlist;