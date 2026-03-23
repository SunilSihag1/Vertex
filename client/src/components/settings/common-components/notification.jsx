import { useState } from "react";

const FEED = [
  { id: 1, icon: "check_circle", color: "#059669", bg: "rgba(16,185,129,0.09)", title: "Order Confirmed", body: "Your custom polo t-shirt order #CW-2041 has been placed.", time: "2h ago", unread: true },
  { id: 2, icon: "local_shipping", color: "#3b82f6", bg: "rgba(59,130,246,0.09)", title: "Order Shipped", body: "Order #CW-2041 is on its way. Estimated delivery in 2–3 days.", time: "Yesterday", unread: false },
  { id: 3, icon: "palette", color: "#8b5cf6", bg: "rgba(139,92,246,0.09)", title: "New Template", body: "A summer collection template is now available in the design studio.", time: "3 days ago", unread: false },
  { id: 4, icon: "favorite", color: "#ef4444", bg: "rgba(239,68,68,0.09)", title: "Back in Stock", body: "A wishlist item is back in stock. Only limited units left.", time: "5 days ago", unread: false },
  { id: 5, icon: "trending_up", color: "#143109", bg: "rgba(20,49,9,0.08)", title: "Shop Performance", body: "Your shop received 12 new orders this week — up 23% from last week.", time: "1 week ago", unread: false },
];

const PREFS = [
  { key: "orders",   label: "Order updates",    desc: "Confirmations, tracking, delivery",  on: true  },
  { key: "promo",    label: "Promotions",        desc: "Deals, offers, new arrivals",        on: false },
  { key: "shop",     label: "Shop activity",     desc: "Orders, reviews, performance",       on: true  },
  { key: "security", label: "Security alerts",   desc: "Login activity, account changes",    on: true  },
];

const Toggle = ({ on, onChange }) => (
  <button
    type="button" onClick={onChange} role="switch" aria-checked={on}
    className="relative rounded-full transition-colors duration-200 focus:outline-none shrink-0"
    style={{ width: 36, height: 20, background: on ? "#143109" : "rgba(20,49,9,0.12)" }}
  >
    <span
      className="absolute top-0.5 rounded-full bg-white shadow-sm transition-transform duration-200"
      style={{ width: 16, height: 16, left: 2, transform: on ? "translateX(16px)" : "translateX(0)" }}
    />
  </button>
);

const Card = ({ children }) => (
  <div
    className="rounded-2xl bg-white overflow-hidden"
    style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.04)" }}
  >
    {children}
  </div>
);

export default function Notification() {
  const [items, setItems] = useState(FEED);
  const [prefs, setPrefs] = useState(PREFS);

  const unread = items.filter(n => n.unread).length;
  const dismiss  = id  => setItems(p => p.filter(n => n.id !== id));
  const markRead = id  => setItems(p => p.map(n => n.id === id ? { ...n, unread: false } : n));
  const markAll  = ()  => setItems(p => p.map(n => ({ ...n, unread: false })));
  const toggleP  = key => setPrefs(p => p.map(pf => pf.key === key ? { ...pf, on: !pf.on } : pf));

  return (
    <div className="max-w-lg space-y-7">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Notifications</h1>
          <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>
            {unread > 0 ? `${unread} unread notification${unread > 1 ? "s" : ""}` : "All caught up!"}
          </p>
        </div>
        {unread > 0 && (
          <button
            onClick={markAll}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all"
            style={{ border: "1px solid rgba(20,49,9,0.12)", color: "#143109", background: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(20,49,9,0.04)"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            <span className="material-symbols-outlined text-[14px]">done_all</span>
            Mark all read
          </button>
        )}
      </div>

      {/* Feed */}
      <Card>
        {items.length === 0 && (
          <div className="py-16 text-center">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-full mb-3" style={{ background: "rgba(20,49,9,0.07)" }}>
              <span className="material-symbols-outlined text-xl" style={{ color: "#143109" }}>notifications_off</span>
            </div>
            <p className="text-sm font-semibold" style={{ color: "rgba(20,49,9,0.4)" }}>No notifications</p>
          </div>
        )}
        <div className="divide-y" style={{ borderColor: "rgba(20,49,9,0.05)" }}>
          {items.map(n => (
            <div
              key={n.id}
              onClick={() => markRead(n.id)}
              className="relative flex gap-3.5 px-4 py-3.5 cursor-pointer transition-colors group"
              style={{ background: n.unread ? "rgba(20,49,9,0.015)" : "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(20,49,9,0.025)"}
              onMouseLeave={e => e.currentTarget.style.background = n.unread ? "rgba(20,49,9,0.015)" : "transparent"}
            >
              {/* Unread strip */}
              {n.unread && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-r-full" style={{ background: "#143109" }} />
              )}

              {/* Icon */}
              <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: n.bg }}>
                <span className="material-symbols-outlined text-[17px]" style={{ color: n.color, fontVariationSettings: "'FILL' 1" }}>{n.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold leading-tight" style={{ color: "#143109" }}>{n.title}</p>
                  <span className="text-[10px] font-medium shrink-0 mt-0.5" style={{ color: "rgba(31,41,55,0.35)" }}>{n.time}</span>
                </div>
                <p className="text-xs mt-0.5 line-clamp-2 leading-relaxed" style={{ color: "rgba(31,41,55,0.55)" }}>{n.body}</p>
              </div>

              {/* Dismiss */}
              <button
                onClick={e => { e.stopPropagation(); dismiss(n.id); }}
                className="shrink-0 w-6 h-6 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "rgba(20,49,9,0.35)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(20,49,9,0.08)"; e.currentTarget.style.color = "#143109"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(20,49,9,0.35)"; }}
              >
                <span className="material-symbols-outlined text-[13px]">close</span>
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Preferences */}
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] mb-3" style={{ color: "rgba(20,49,9,0.35)" }}>
          Preferences
        </p>
        <Card>
          <div className="divide-y" style={{ borderColor: "rgba(20,49,9,0.05)" }}>
            {prefs.map(({ key, label, desc, on }) => (
              <div key={key} className="flex items-center justify-between gap-4 px-4 py-3.5">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#143109" }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(31,41,55,0.45)" }}>{desc}</p>
                </div>
                <Toggle on={on} onChange={() => toggleP(key)} />
              </div>
            ))}
          </div>
        </Card>
      </div>

    </div>
  );
}