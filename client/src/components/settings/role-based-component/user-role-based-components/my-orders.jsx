const MyOrders = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">

      <div className="max-w-md mx-auto lg:max-w-xl lg:ml-24 lg:mr-auto">

        <div className="mb-10">
          <h1 className="font-display text-4xl font-extrabold text-primary dark:text-accent-sage tracking-tight mb-2 text-[#143109]">
            My Orders
          </h1>
          <p className="text-[#1f2937]/70 text-lg">
            Track and review your previous grocery purchases.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="relative inline-block w-full sm:w-auto">
            <button className="flex items-center justify-between gap-2 w-full sm:w-auto px-5 py-2.5 bg-white border border-[#143109]/10 rounded-xl shadow-sm hover:border-[#143109]/30 transition-colors">
              <span className="font-semibold text-[#143109] text-sm">Filter by status</span>
              <span className="font-semibold text-[#143109] text-sm">expand_more</span>
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#143109] text-white text-xs font-semibold">
              All Orders
            </button>
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#b5bfa1]/20 text-[#143109] text-xs font-semibold hover:bg-[#b5bfa1]/40 transition-colors">
              Delivered
            </button>
            <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#b5bfa1]/20 text-[#143109] text-xs font-semibold hover:bg-[#b5bfa1]/40 transition-colors">
              Shipped
            </button>
          </div>
        </div>

        <div className="space-y-6">

          {/* Order 1 */}
          <div className="group relative bg-white border border-[#143109]/5 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-5">
              <div
                className="w-full sm:w-32 h-32 rounded-lg bg-cover bg-center shrink-0 border border-primary/5"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi4NfF_r3s0709UT9mS0NCfOewpUDH0GGeKCKFOayJv83fE8bLNA-Wmx3HP-EST_nKnan5tzJHn8O8DOKgrwLBYCsgoUKwQdDtSbJKxo5W7fDiT-WZmMOolRRLa04_Hy6WiixPMGHa4fws6lF2ixbTAfPj3AOxi09DtM_d_1ZWWboIY44WjX3UflWKZIYnlHK-zPpVzVWloWsesGgeYaHbQqDlOeIh_p5csDrows75-bG1i96EDhOq9JXbi6EjcAQbWVV8rNOUfF6D')",
                }}
              ></div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display font-bold text-lg text-primary dark:text-white leading-tight text-[#143109]">
                      Basmati Rice (5kg)
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </div>

                  <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider">
                    ID: KR-2045 • 12 June 2026
                  </p>

                  <p className="mt-2 font-display font-bold text-[#143109] text-xl">
                    ₹899
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4">
                  <button className="text-[#143109] text-sm font-bold flex items-center gap-1 hover:underline">
                    View Details
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>

                  <button className="p-2 text-charcoal/40 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="group relative bg-white border border-[#143109]/5 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-5">
              <div
                className="w-full sm:w-32 h-32 rounded-lg bg-cover bg-center shrink-0 border border-primary/5"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/...')" }}
              ></div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display font-bold text-lg text-[#143109]">
                      Organic Moong Dal
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Shipped
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider">
                    ID: KR-2081 • 18 June 2026
                  </p>

                  <p className="mt-2 font-display font-bold text-[#143109] text-xl">
                    ₹450
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <button className="text-[#143109] text-sm font-bold flex items-center gap-1 hover:underline">
                    View Details
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>

                  <button className="p-2 text-charcoal/40 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-[#143109]/20 rounded-xl font-bold text-[#143109] hover:bg-[#b5bfa1]/10 transition-colors">
            Load more orders
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyOrders;