import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import api from "../../service/api";

/* ── Nav definition with per-item role access ─────────────── */
const NAV_CONFIG = [
    {
        section: "Account",
        items: [
            { path: "edit-profile", icon: "manage_accounts", label: "Edit Profile", roles: ["user", "shop-owner", "admin"] },
            { path: "reset-password", icon: "lock_reset", label: "Change Password", roles: ["user", "shop-owner", "admin"] },
            { path: "notifications", icon: "notifications", label: "Notifications", roles: ["user", "shop-owner", "admin"] },
        ],
    },
    {
        section: "Shopping",
        items: [
            { path: "my-orders", icon: "receipt_long", label: "My Orders", roles: ["user", "admin"] },
            { path: "saved-address", icon: "location_on", label: "Saved Addresses", roles: ["user", "admin"] },
            { path: "wishlist", icon: "favorite", label: "Wishlist", roles: ["user", "admin"] },
        ],
    },
    {
        section: "My Shop",
        items: [
            { path: "shop-profile", icon: "storefront", label: "Shop Profile", roles: ["shop-owner", "admin"] },
            { path: "manage-products", icon: "inventory_2", label: "Manage Products", roles: ["shop-owner", "admin"] },
            { path: "sales-analytics", icon: "bar_chart_4_bars", label: "Sales Analytics", roles: ["shop-owner", "admin"] },
        ],
    },
];

/* ── Filter nav by role ────────────────────────────────────── */
const buildNav = (role) =>
    NAV_CONFIG
        .map((section) => ({
            ...section,
            items: section.items.filter((item) => item.roles.includes(role)),
        }))
        .filter((section) => section.items.length > 0);

/* ── Route guard — redirects unauthorised deep links ──────── */
function RoleGuard({ role, loading }) {
    const location = useLocation();

    if (loading) return null;

    const seg = location.pathname.split("/").filter(Boolean);
    const page = seg[seg.length - 1];

    // find the page in all NAV items
    const navItem = NAV_CONFIG
        .flatMap((s) => s.items)
        .find((item) => item.path === page);

    if (navItem && role && !navItem.roles.includes(role)) {
        // redirect to first allowed page for this role
        const nav = buildNav(role);
        const first = nav[0]?.items[0]?.path ?? "edit-profile";
        return <Navigate to={`/settings/${first}`} replace />;
    }

    return null;
}

/* ── Sidebar ───────────────────────────────────────────────── */
const Sidebar = ({ role, active, onNav, onClose }) => {
    const nav = buildNav(role || "user");

    return (
        <div className="flex flex-col h-full" style={{ background: "#143109" }}>
            {/* Top: logo + close */}
            <div className="flex items-center justify-between px-5 pt-6 pb-4 shrink-0">
                <img src="/logo/Brand Logo Dark.svg" alt="Vertex" className="h-7 w-auto" />
                {onClose && (
                    <button
                        onClick={onClose}
                        className="lg:hidden w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
                        style={{ color: "rgba(181,191,161,0.5)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(181,191,161,0.5)")}
                    >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                )}
            </div>

            {/* Role badge */}
            {role && (
                <div className="mx-3 mb-3 px-3 py-1.5 rounded-xl" style={{ background: "rgba(181,191,161,0.08)" }}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-center"
                        style={{ color: "rgba(181,191,161,0.45)" }}>
                        {role}
                    </p>
                </div>
            )}

            {/* User card */}
            <div
                className="mx-3 mb-5 rounded-2xl p-3.5 flex items-center gap-3 shrink-0"
                style={{ background: "rgba(181,191,161,0.1)", border: "1px solid rgba(181,191,161,0.12)" }}
            >
                <div className="relative shrink-0">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(181,191,161,0.2)", border: "2px solid rgba(181,191,161,0.35)" }}>
                        <span className="material-symbols-outlined text-[18px]"
                            style={{ color: "#b5bfa1", fontVariationSettings: "'FILL' 1" }}>
                            person
                        </span>
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400"
                        style={{ border: "2px solid #143109" }} />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white truncate leading-tight">My Account</p>
                    <p className="text-[11px] mt-0.5 truncate capitalize" style={{ color: "rgba(181,191,161,0.55)" }}>
                        {role ?? "loading…"}
                    </p>
                </div>
            </div>

            {/* Nav sections */}
            <nav className="flex-1 overflow-y-auto px-3 space-y-4 pb-3">
                {nav.map(({ section, items }) => (
                    <div key={section}>
                        <p className="px-2.5 mb-1.5 text-[9px] font-black uppercase tracking-[0.25em]"
                            style={{ color: "rgba(181,191,161,0.3)" }}>
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
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                                e.currentTarget.style.color = "#fff";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
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
                                            <span className="w-1.5 h-1.5 rounded-full shrink-0"
                                                style={{ background: "#b5bfa1" }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Bottom: sign out */}
            <div className="mx-3 mb-4 pt-3 shrink-0"
                style={{ borderTop: "1px solid rgba(181,191,161,0.1)" }}>
                <button
                    onClick={() => onNav("/")}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={{ color: "rgba(239,68,68,0.65)" }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(239,68,68,0.07)";
                        e.currentTarget.style.color = "rgb(239,68,68)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "rgba(239,68,68,0.65)";
                    }}
                >
                    <span className="material-symbols-outlined text-[17px] shrink-0">logout</span>
                    <span>Sign out</span>
                </button>
                <p className="text-center text-[9px] mt-3 font-medium"
                    style={{ color: "rgba(181,191,161,0.18)" }}>
                    Vertex v2.4.0 · Built for Retail
                </p>
            </div>
        </div>
    );
};

/* ── Layout ────────────────────────────────────────────────── */
const Settings = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    const seg = location.pathname.split("/").filter(Boolean);
    const active = seg[seg.length - 1] ?? "settings";
    const label = NAV_CONFIG.flatMap((s) => s.items).find((i) => i.path === active)?.label ?? "Settings";

    /* Fetch role once on mount */
    const fetchRole = useCallback(async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                navigate("/login");
                return;
            }
            const res = await api.get("/profile", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setRole(res.data.data.role ?? "user");
        } catch {
            navigate("/login");
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchRole();
    }, [fetchRole]);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const go = (path) => {
        if (path === "/") {
            localStorage.removeItem("accessToken");
            navigate("/");
            return;
        }
        navigate(path);
        setOpen(false);
    };

    return (
        <div className="flex min-h-screen" style={{ background: "#f7f6f2" }}>

            {/* Route guard — redirect if user visits unauthorised page directly */}
            <RoleGuard role={role} loading={loading} />

            {/* Desktop sidebar */}
            <aside className="hidden lg:flex lg:flex-col w-60 xl:w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-hidden shadow-xl shadow-[#143109]/20">
                <Sidebar role={role} active={active} onNav={go} />
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
                        <Sidebar role={role} active={active} onNav={go} onClose={() => setOpen(false)} />
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
                <span className="text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{ color: "rgba(20,49,9,0.35)" }}>
                    {label}
                </span>
                <div className="w-12" />
            </div>

            {/* Page content */}
            <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-12 py-8 lg:py-10 mt-14 lg:mt-0">
                {loading ? (
                    <div className="space-y-4 animate-pulse max-w-lg">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-12 rounded-xl"
                                style={{ background: "rgba(20,49,9,0.05)" }} />
                        ))}
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
};

export default Settings;