import { useState } from "react";

const STATUS = {
  Delivered: { bg: "rgba(16,185,129,0.08)", text: "#059669", dot: "#10b981" },
  Shipped: { bg: "rgba(59,130,246,0.08)", text: "#3b82f6", dot: "#3b82f6" },
  Processing: { bg: "rgba(245,158,11,0.09)", text: "#d97706", dot: "#f59e0b" },
  Cancelled: { bg: "rgba(239,68,68,0.08)", text: "#ef4444", dot: "#ef4444" },
};

const ORDERS = [
  { id: "CW-2041", name: "Basmati Rice (5kg)", variant: "Premium · White", date: "12 Jun 2025", amount: "₹899", status: "Delivered", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi4NfF_r3s0709UT9mS0NCfOewpUDH0GGeKCKFOayJv83fE8bLNA-Wmx3HP-EST_nKnan5tzJHn8O8DOKgrwLBYCsgoUKwQdDtSbJKxo5W7fDiT-WZmMOolRRLa04_Hy6WiixPMGHa4fws6lF2ixbTAfPj3AOxi09DtM_d_1ZWWboIY44WjX3UflWKZIYnlHK-zPpVzVWloWsesGgeYaHbQqDlOeIh_p5csDrows75-bG1i96EDhOq9JXbi6EjcAQbWVV8rNOUfF6D" },
  { id: "CW-2081", name: "Organic Moong Dal", variant: "500g · Washed", date: "18 Jun 2025", amount: "₹450", status: "Shipped", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi4NfF_r3s0709UT9mS0NCfOewpUDH0GGeKCKFOayJv83fE8bLNA-Wmx3HP-EST_nKnan5tzJHn8O8DOKgrwLBYCsgoUKwQdDtSbJKxo5W7fDiT-WZmMOolRRLa04_Hy6WiixPMGHa4fws6lF2ixbTAfPj3AOxi09DtM_d_1ZWWboIY44WjX3UflWKZIYnlHK-zPpVzVWloWsesGgeYaHbQqDlOeIh_p5csDrows75-bG1i96EDhOq9JXbi6EjcAQbWVV8rNOUfF6D" },
  { id: "CW-2094", name: "Cold-Pressed Coconut Oil", variant: "1L · Glass", date: "22 Jun 2025", amount: "₹720", status: "Processing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi4NfF_r3s0709UT9mS0NCfOewpUDH0GGeKCKFOayJv83fE8bLNA-Wmx3HP-EST_nKnan5tzJHn8O8DOKgrwLBYCsgoUKwQdDtSbJKxo5W7fDiT-WZmMOolRRLa04_Hy6WiixPMGHa4fws6lF2ixbTAfPj3AOxi09DtM_d_1ZWWboIY44WjX3UflWKZIYnlHK-zPpVzVWloWsesGgeYaHbQqDlOeIh_p5csDrows75-bG1i96EDhOq9JXbi6EjcAQbWVV8rNOUfF6D" },
];

const FILTERS = ["All", "Delivered", "Shipped", "Processing", "Cancelled"];

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl bg-white overflow-hidden group hover:shadow-md transition-shadow ${className}`}
    style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.03)" }}
  >
    {children}
  </div>
);

export default function MyOrders() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? ORDERS : ORDERS.filter(o => o.status === filter);

  return (
    <div className="max-w-lg">

      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>My Orders</h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>Track and review your purchases.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 mb-6">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
            style={
              filter === f
                ? { background: "#143109", color: "#fff" }
                : { background: "#fff", color: "rgba(20,49,9,0.55)", border: "1px solid rgba(20,49,9,0.1)" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {visible.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-white" style={{ border: "1px solid rgba(20,49,9,0.08)" }}>
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-full mb-3" style={{ background: "rgba(20,49,9,0.07)" }}>
              <span className="material-symbols-outlined" style={{ color: "#143109" }}>receipt_long</span>
            </div>
            <p className="text-sm font-semibold" style={{ color: "rgba(20,49,9,0.4)" }}>No orders found</p>
          </div>
        )}

        {visible.map(o => {
          const s = STATUS[o.status] ?? STATUS.Processing;
          return (
            <Card key={o.id}>
              <div className="flex gap-4 p-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50">
                  <img src={o.img} alt={o.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate leading-tight" style={{ color: "#143109" }}>{o.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(31,41,55,0.4)" }}>{o.variant}</p>
                    </div>
                    <span
                      className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: s.bg, color: s.text }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
                      {o.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-[11px]" style={{ color: "rgba(31,41,55,0.4)" }}>#{o.id} · {o.date}</p>
                      <p className="text-sm font-extrabold mt-0.5" style={{ color: "#143109" }}>{o.amount}</p>
                    </div>
                    <button
                      className="flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
                      style={{ color: "#143109" }}
                    >
                      Details
                      <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {visible.length > 0 && (
        <button
          className="w-full mt-4 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{ border: "1px solid rgba(20,49,9,0.12)", color: "rgba(20,49,9,0.5)", background: "#fff" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,49,9,0.3)"; e.currentTarget.style.color = "#143109"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(20,49,9,0.12)"; e.currentTarget.style.color = "rgba(20,49,9,0.5)"; }}
        >
          Load more
        </button>
      )}

    </div>
  );
}