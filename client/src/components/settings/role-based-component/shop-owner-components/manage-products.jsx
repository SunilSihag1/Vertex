import { useState } from "react";

const STATUSES = {
  active: { label: "Active", bg: "rgba(16,185,129,0.08)", text: "#059669" },
  out_of_stock: { label: "Out of Stock", bg: "rgba(239,68,68,0.08)", text: "#ef4444" },
  draft: { label: "Draft", bg: "rgba(100,116,139,0.08)", text: "#64748b" },
};

const INIT = [
  { id: 1, name: "Custom Cotton T-Shirt", category: "Cotton Wear", price: "₹899", stock: 25, status: "active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_1GeE6iKmSTqIC6C2-Io_JGj_i9n-9FgpvQy6Jk_yNWhVLGQmqjwJPGaTLk1-Ul5QPqMrmlv3MLVtecgKfckQoYxk6TRphC9zLxdZkKGvkyfFfD5mAxdQACWJ2k_oBQlZ90JUFmAY8kUxLz0ShfOzzNdTxOtZeGtoyL4swH3gB5Evy24BOmOw1c4ZNOrqU4iEukcrXIOdrENpRTtP8jonjDrA0Oymt5Vfn3RXCStMKaFyGUFF_UzU0HzwhGPFQvDXd1BaYPWGpVl" },
  { id: 2, name: "Premium Polo Shirt", category: "Polo Collection", price: "₹1,299", stock: 12, status: "active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn5KGf95fr8L2algGU9Daf7iO5iRbGcyrAgzNOpccJ-H6SskIcsobEHLzE5y9MQ-BN_Vn_WzrXbwQeDVF13v4yYtMpy63DV1rRXqImrT8srZFNVRbiDM2iHtfbbVKMGd0eNVDAhxrixPofYmBE2tUhYI1_VBfLyQcgL4gQJwGWIwxYK1L1dk8ohG-LSSp3egXBWj3YstEQxu5NtnvMP69sZEzqa_TEhNjbRnHwpJEU6F1YWxdbFYaobegg0Ej5Sj02sPwweh3NMZdL" },
  { id: 3, name: "Sports Performance Tee", category: "Sportswear", price: "₹999", stock: 0, status: "out_of_stock", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoRXkr9wkVxiKvAY89Cw1vyX5QIK-_X-XUUm3IOiu6Q2gWsQ_7JbcFw54-Blqi5CgegqOPx8DGNz3-ACmfyQs2E1n5GwQb3W0dj2T42nvwuY2AsfRTfKZSwhUqzlusP3VfDjfYUsr3inlTk0NEpf3rEJ5D9hgkfF5kUyp4k8te3FUyMZdbMEtWPfwy8fSFJp4osBETqo7xBQaM8znj-lBww2rMOd2vJj9xJ3DeYKKAUlV_Cead7OLjtDiyQ9ywvw8bbDq-C4MYo1WY" },
  { id: 4, name: "Oversized Graphic Tee", category: "Graphic Wear", price: "₹1,199", stock: 18, status: "active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoRXkr9wkVxiKvAY89Cw1vyX5QIK-_X-XUUm3IOiu6Q2gWsQ_7JbcFw54-Blqi5CgegqOPx8DGNz3-ACmfyQs2E1n5GwQb3W0dj2T42nvwuY2AsfRTfKZSwhUqzlusP3VfDjfYUsr3inlTk0NEpf3rEJ5D9hgkfF5kUyp4k8te3FUyMZdbMEtWPfwy8fSFJp4osBETqo7xBQaM8znj-lBww2rMOd2vJj9xJ3DeYKKAUlV_Cead7OLjtDiyQ9ywvw8bbDq-C4MYo1WY" },
];

const IconBtn = ({ icon, onClick, danger }) => (
  <button
    onClick={onClick}
    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all"
    style={{ border: "1px solid rgba(20,49,9,0.1)", color: "rgba(20,49,9,0.4)", background: "#fff" }}
    onMouseEnter={e => {
      if (danger) { e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)"; e.currentTarget.style.background = "rgba(239,68,68,0.05)"; e.currentTarget.style.color = "#ef4444"; }
      else { e.currentTarget.style.borderColor = "rgba(20,49,9,0.25)"; e.currentTarget.style.color = "#143109"; }
    }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(20,49,9,0.1)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "rgba(20,49,9,0.4)"; }}
  >
    <span className="material-symbols-outlined text-[15px]">{icon}</span>
  </button>
);

export default function ManageProducts() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState(INIT);

  const visible = items.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase())
  );

  const remove = id => setItems(p => p.filter(pr => pr.id !== id));

  return (
    <div className="max-w-xl">

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Manage Products</h1>
          <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>{items.length} products in catalogue</p>
        </div>
        <button
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 transition-opacity hover:opacity-90"
          style={{ background: "#143109" }}
        >
          <span className="material-symbols-outlined text-[15px]">add</span>
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5 group">
        <span
          className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[17px] transition-colors"
          style={{ color: "rgba(20,49,9,0.3)" }}
        >
          search
        </span>
        <input
          type="text" value={q} onChange={e => setQ(e.target.value)}
          placeholder="Search products or categories…"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all bg-white text-[#143109] placeholder:text-slate-300"
          style={{ border: "1px solid rgba(20,49,9,0.12)", boxShadow: "0 1px 4px rgba(20,49,9,0.03)" }}
          onFocus={e => { e.target.style.borderColor = "#143109"; e.target.style.boxShadow = "0 0 0 3px rgba(20,49,9,0.06)"; }}
          onBlur={e => { e.target.style.borderColor = "rgba(20,49,9,0.12)"; e.target.style.boxShadow = "0 1px 4px rgba(20,49,9,0.03)"; }}
        />
      </div>

      {/* List */}
      <div className="space-y-2.5">
        {visible.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-white" style={{ border: "1px solid rgba(20,49,9,0.08)" }}>
            <p className="text-sm font-semibold" style={{ color: "rgba(20,49,9,0.4)" }}>No products found</p>
          </div>
        )}

        {visible.map(p => {
          const s = STATUSES[p.status] ?? STATUSES.draft;
          return (
            <div
              key={p.id}
              className="flex gap-4 p-4 rounded-2xl bg-white group hover:shadow-sm transition-shadow"
              style={{ border: "1px solid rgba(20,49,9,0.08)" }}
            >
              <div className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-50 ${p.status === "out_of_stock" ? "grayscale opacity-60" : ""}`}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight truncate" style={{ color: "#143109" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(31,41,55,0.4)" }}>{p.category}</p>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: s.bg, color: s.text }}
                  >
                    {s.label}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold" style={{ color: "#143109" }}>{p.price}</span>
                    <span className={`text-xs font-medium ${p.stock === 0 ? "text-red-400" : ""}`} style={p.stock > 0 ? { color: "rgba(31,41,55,0.4)" } : {}}>
                      {p.stock === 0 ? "No stock" : `${p.stock} in stock`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconBtn icon="visibility" />
                    <IconBtn icon="edit" />
                    <IconBtn icon="delete" danger onClick={() => remove(p.id)} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}