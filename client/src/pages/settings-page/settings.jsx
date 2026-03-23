import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV = [
  {
    section: "Account",
    items: [
      { path: "edit-profile",   icon: "manage_accounts",   label: "Edit Profile"     },
      { path: "reset-password", icon: "lock_reset",        label: "Change Password"  },
      { path: "notifications",  icon: "notifications",     label: "Notifications"    },
    ],
  },
  {
    section: "Shopping",
    items: [
      { path: "my-orders",     icon: "receipt_long",       label: "My Orders"        },
      { path: "saved-address", icon: "location_on",        label: "Saved Addresses"  },
      { path: "wishlist",      icon: "favorite",           label: "Wishlist"         },
    ],
  },
  {
    section: "My Shop",
    items: [
      { path: "shop-profile",    icon: "storefront",       label: "Shop Profile"     },
      { path: "manage-products", icon: "inventory_2",      label: "Manage Products"  },
      { path: "sales-analytics", icon: "bar_chart_4_bars", label: "Sales Analytics"  },
    ],
  },
];

/* ── Sidebar ──────────────────────────────────────────────── */
const Sidebar = ({ active, onNav, onClose }) => (
  <div
    className="flex flex-col h-full"
    style={{ background: "#143109" }}
  >
    {/* Top: logo + close */}
    <div className="flex items-center justify-between px-5 pt-6 pb-4 shrink-0">
      <img src="/logo/Brand Logo Dark.svg" alt="Vertex" className="h-7 w-auto" />
      {onClose && (
        <button
          onClick={onClose}
          className="lg:hidden w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
          style={{ color: "rgba(181,191,161,0.5)" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(181,191,161,0.5)"}
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      )}
    </div>

    {/* User card */}
    <div
      className="mx-3 mb-5 rounded-2xl p-3.5 flex items-center gap-3 shrink-0"
      style={{ background: "rgba(181,191,161,0.1)", border: "1px solid rgba(181,191,161,0.12)" }}
    >
      <div className="relative shrink-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_kNbSqE-UFiMiHZ6earHno6OfLgso-MileV2_xRZu6xqi_3t2iJyzcd5bgJ6oN79saDF81jO-trU-AgkgOmeGZAPWBqmCzVE_hlVxxEZNaiAbi5qFyCeQViw9VTgarTJjPrhSnVM8E0b_s7oi9HgjFghFwCzWyRxDIl1Ci7KZEsyLMhXh6Pz8RAr9M-8UwqVJJabp6Kudtp-465HpJZshqEVM_lQ3HY3ZyJZmR1pRnoYZ8acgLUi_xRAWEqvw7CcmovHtdzd8J6al"
          alt="Avatar"
          className="w-9 h-9 rounded-full object-cover"
          style={{ border: "2px solid rgba(181,191,161,0.35)" }}
        />
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400"
          style={{ border: "2px solid #143109" }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-white truncate leading-tight">Elena Rostova</p>
        <p className="text-[11px] mt-0.5 truncate" style={{ color: "rgba(181,191,161,0.55)" }}>
          Pro Designer · Active
        </p>
      </div>
    </div>

    {/* Nav sections */}
    <nav className="flex-1 overflow-y-auto px-3 space-y-4 pb-3">
      {NAV.map(({ section, items }) => (
        <div key={section}>
          <p
            className="px-2.5 mb-1.5 text-[9px] font-black uppercase tracking-[0.25em]"
            style={{ color: "rgba(181,191,161,0.3)" }}
          >
            {section}
          </p>
          <div className="space-y-0.5">
            {items.map(({ path, icon, label }) => {
              const isActive = active === path;
              return (
                <button
                  key={path}
                  onClick={() => onNav(path)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-150"
                  style={
                    isActive
                      ? { background: "rgba(181,191,161,0.16)", color: "#ffffff" }
                      : { color: "rgba(181,191,161,0.6)" }
                  }
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(181,191,161,0.6)";
                    }
                  }}
                >
                  <span
                    className="material-symbols-outlined text-[17px] shrink-0"
                    style={{
                      color: isActive ? "#b5bfa1" : "rgba(181,191,161,0.38)",
                      fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    {icon}
                  </span>
                  <span className="flex-1 truncate">{label}</span>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#b5bfa1" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </nav>

    {/* Bottom: logout */}
    <div
      className="mx-3 mb-4 pt-3 shrink-0"
      style={{ borderTop: "1px solid rgba(181,191,161,0.1)" }}
    >
      <button
        onClick={() => onNav("/")}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
        style={{ color: "rgba(239,68,68,0.65)" }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.07)"; e.currentTarget.style.color = "rgb(239,68,68)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(239,68,68,0.65)"; }}
      >
        <span className="material-symbols-outlined text-[17px] shrink-0">logout</span>
        <span>Sign out</span>
      </button>
      <p
        className="text-center text-[9px] mt-3 font-medium"
        style={{ color: "rgba(181,191,161,0.18)" }}
      >
        Vertex v2.4.0 · Built for Retail
      </p>
    </div>
  </div>
);

/* ── Layout ───────────────────────────────────────────────── */
const Settings = () => {
  const navigate    = useNavigate();
  const location    = useLocation();
  const [open, setOpen] = useState(false);

  const seg    = location.pathname.split("/").filter(Boolean);
  const active = seg[seg.length - 1] ?? "settings";
  const label  = NAV.flatMap(s => s.items).find(i => i.path === active)?.label ?? "Settings";

  const go = (path) => {
    if (path === "/") { navigate("/"); return; }
    navigate(path);
    setOpen(false);
  };

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div className="flex min-h-screen" style={{ background: "#f7f6f2" }}>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-60 xl:w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-hidden shadow-xl shadow-[#143109]/20">
        <Sidebar active={active} onNav={go} />
      </aside>

      {/* Mobile backdrop + drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden overflow-y-auto shadow-2xl">
            <Sidebar active={active} onNav={go} onClose={() => setOpen(false)} />
          </aside>
        </>
      )}

      {/* Mobile topbar */}
      <div
        className="lg:hidden fixed top-20 inset-x-0 z-30 flex items-center justify-between px-4 py-3"
        style={{
          background: "rgba(247,246,242,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(20,49,9,0.07)",
        }}
      >
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-sm font-bold"
          style={{ color: "#143109" }}
        >
          <span className="material-symbols-outlined text-[20px]">menu</span>
          <span className="hidden sm:inline">Menu</span>
        </button>
        <span
          className="text-[10px] font-black uppercase tracking-[0.18em]"
          style={{ color: "rgba(20,49,9,0.35)" }}
        >
          {label}
        </span>
        <div className="w-12" />
      </div>

      {/* Page content */}
      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-12 py-8 lg:py-10 mt-14 lg:mt-0">
        <Outlet />
      </main>

    </div>
  );
};

export default Settings;