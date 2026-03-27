import { useState } from "react";

const PERIODS = ["7D", "30D", "3M", "1Y"];

const STATS = [
  { label: "Revenue", value: "₹52,400", delta: "+12%", up: true, icon: "payments" },
  { label: "Orders", value: "128", delta: "+5%", up: true, icon: "receipt_long" },
  { label: "Units Sold", value: "312", delta: "+8%", up: true, icon: "inventory_2" },
  { label: "Conversion", value: "4.8%", delta: "−0.5%", up: false, icon: "conversion_path" },
];

const BARS = [
  { m: "Jan", p: 58, c: 44 },
  { m: "Feb", p: 74, c: 60 },
  { m: "Mar", p: 52, c: 38 },
  { m: "Apr", p: 92, c: 76 },
  { m: "May", p: 84, c: 68 },
  { m: "Jun", p: 100, c: 86 },
];

const PRODUCTS = [
  { name: "Custom Cotton T-Shirt", units: 120, rev: "₹1,08,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvuebrPM0N5mZ-jer-1UrOSgMCUykrMSL8_pD1yIZROm5x-5wkdEQYvxyFOVGxdeIEnxEJdQ4WPQXYUtuJ26mYoV7VD9D43glMzoRwWsrstVfb6iyN7j0-oVkTWenvrcPInwne7UbYm-00KJWdQHkTcHgqDQeHKGwdD_07it4jwUbVW2NwGlGCvpBeXY8-bvMBTJSvkbXe30Q5olF1fv4LvA63eFkXxmwFCv196Gr5p0bxPQNxEVCvePsY3cXMiafihXgJPtSvmamq" },
  { name: "Premium Polo Shirt", units: 75, rev: "₹97,500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA58_4Da7-4Zsf2vuSDCO2tSGOq9lS10xHhOKdszIkDnVr9OVn8PfTn2-9D-5R13ETSGTOce5dCT5lsZoqw9AqY1szXtA00AtF1zOCusHtAaprGstyecDmG-2UqAKLBKwiA7ZeYyqtc7hSJI3Y7jep94v5DOgd7wP-e7l3LlCcoGZe3381cJPzq1QPg6q_wxWwpCGHXexP8KF7c74nX8F5E3nBskqtrc9BvqH4pX6D_wpRyz4BJnbABb-pf-_xW_xSOhRpj2gIBGC_o" },
  { name: "Sports Performance Tee", units: 60, rev: "₹59,940", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWlJo7cVYy0dYZ8eGObEADpcMMB3vy7AOEb1vNasf_vDu2qJ4Glyko3QTBAcQBg288wYvoELwcppfDApu8i9T-9Tu7QgQR1l_X5M5SL6Pn5J1FLibxeuh9bje-sCLatytRDuRnUr2_DzKpDlmu1GGmoy8LFUEcIp42AtEWodUbkXqQVJrGVo9wz8HspOLITT8zjLbF2QMDinP_8nRrz9-7yRUbBE8Yo_sa_IN3OmxHM63YOvy2NL6YltZFVNJfhmaOeukQgX3ANmv" },
];

const ORDERS = [
  { id: "CW-2041", name: "Aditi Sharma", product: "Custom Cotton T-Shirt", amount: "₹899", status: "Delivered" },
  { id: "CW-2045", name: "Rahul Patel", product: "Polo Shirt", amount: "₹1,299", status: "Shipped" },
  { id: "CW-2049", name: "Neha Kapoor", product: "Sports Tee", amount: "₹999", status: "Processing" },
];

const ORDER_STYLE = {
  Delivered: { bg: "rgba(16,185,129,0.08)", text: "#059669" },
  Shipped: { bg: "rgba(59,130,246,0.08)", text: "#3b82f6" },
  Processing: { bg: "rgba(245,158,11,0.09)", text: "#d97706" },
};

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl bg-white overflow-hidden ${className}`}
    style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
  >
    {children}
  </div>
);

export default function SalesAnalytics() {
  const [period, setPeriod] = useState("30D");

  return (
    <div className="max-w-xl space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Sales Analytics</h1>
          <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>Track performance and trends.</p>
        </div>
        {/* Period pills */}
        <div
          className="flex rounded-xl overflow-hidden shrink-0"
          style={{ border: "1px solid rgba(20,49,9,0.1)", background: "#fff" }}
        >
          {PERIODS.map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="px-3 py-1.5 text-[11px] font-bold transition-all"
              style={period === p
                ? { background: "#143109", color: "#fff" }
                : { color: "rgba(20,49,9,0.45)" }
              }
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3">
        {STATS.map(({ label, value, delta, up, icon }) => (
          <Card key={label}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(20,49,9,0.07)" }}
                >
                  <span className="material-symbols-outlined text-[15px]" style={{ color: "#143109" }}>{icon}</span>
                </div>
                <span
                  className="flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={up
                    ? { background: "rgba(16,185,129,0.08)", color: "#059669" }
                    : { background: "rgba(239,68,68,0.08)", color: "#ef4444" }
                  }
                >
                  <span className="material-symbols-outlined text-[11px]">{up ? "trending_up" : "trending_down"}</span>
                  {delta}
                </span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-wider" style={{ color: "rgba(20,49,9,0.35)" }}>{label}</p>
              <p className="text-xl font-extrabold mt-0.5" style={{ color: "#143109" }}>{value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bar chart */}
      <Card>
        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm font-bold" style={{ color: "#143109" }}>Revenue Overview</p>
            <div className="flex items-center gap-3">
              {[{ label: "This period", color: "#143109" }, { label: "Previous", color: "rgba(20,49,9,0.15)" }].map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  <span className="text-[10px] font-medium" style={{ color: "rgba(31,41,55,0.45)" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2 h-36">
            {BARS.map(({ m, p, c }) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-1 group">
                <div className="w-full flex items-end gap-0.5 h-28">
                  <div
                    className="flex-1 rounded-t-lg transition-all"
                    style={{ height: `${p}%`, background: "rgba(20,49,9,0.1)" }}
                  />
                  <div
                    className="flex-1 rounded-t-lg transition-all group-hover:opacity-80"
                    style={{ height: `${c}%`, background: "#143109" }}
                  />
                </div>
                <p className="text-[9px] font-bold uppercase" style={{ color: "rgba(31,41,55,0.35)" }}>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Top products */}
        <Card>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold" style={{ color: "#143109" }}>Top Products</p>
              <button className="text-[10px] font-semibold transition-opacity hover:opacity-70" style={{ color: "#143109" }}>View all</button>
            </div>
            <div className="space-y-3">
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="text-xs font-black w-3 shrink-0 text-right" style={{ color: "rgba(20,49,9,0.2)" }}>{i + 1}</span>
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-50">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate leading-tight" style={{ color: "#143109" }}>{p.name}</p>
                    <p className="text-[10px]" style={{ color: "rgba(31,41,55,0.4)" }}>{p.units} units</p>
                  </div>
                  <p className="text-xs font-bold shrink-0" style={{ color: "#143109" }}>{p.rev}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recent orders */}
        <Card>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold" style={{ color: "#143109" }}>Recent Orders</p>
              <button className="text-[10px] font-semibold transition-opacity hover:opacity-70" style={{ color: "#143109" }}>View log</button>
            </div>
            <div className="space-y-3">
              {ORDERS.map(o => {
                const os = ORDER_STYLE[o.status] ?? ORDER_STYLE.Processing;
                return (
                  <div key={o.id}>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold" style={{ color: "#143109" }}>{o.name}</p>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: os.bg, color: os.text }}>
                        {o.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-[10px]" style={{ color: "rgba(31,41,55,0.4)" }}>{o.product} · {o.id}</p>
                      <p className="text-xs font-bold" style={{ color: "#143109" }}>{o.amount}</p>
                    </div>
                    {o.id !== ORDERS[ORDERS.length - 1].id && (
                      <div className="mt-2.5" style={{ borderTop: "1px solid rgba(20,49,9,0.05)" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}