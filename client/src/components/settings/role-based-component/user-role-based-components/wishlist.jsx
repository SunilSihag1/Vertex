import { useState } from "react";

const ITEMS_INIT = [
  { id: 1, name: "Rose Infused Face Oil",       desc: "Luxurious organic oil for a radiant, hydrated glow.",              price: "₹1,499", rating: 4.8, inStock: true,  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAopV9hKynEV5mtMTTioL-8v2kgMEQAXZI7focgs7kL3D5q8DVulff2ASHo1pCWjj0b_c83oe20PVGxmWtgMYiJLkT1BkJOg6TpRLvmF_cWGX55po002m4gAynPeDuyCscNf-B7fbEBDg8YytmDWucfPMYgJez_ctn1eMCIcDDzKTYjariYnSNOx17qpP4z0aR39xQgAFdf0mPcXhBmQ6K6LD-JR3rlF7oC2fjWkvPKVcLfdqvqJDFldMZM7uAMD6gwa_ugYLfRGohP" },
  { id: 2, name: "Charcoal Detox Mask",          desc: "Deep cleansing mask with activated charcoal and bentonite clay.", price: "₹899",   rating: 4.6, inStock: true,  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpm6B-dM09Snmu0ZkTj9soLfwjq-K8iQieuWVjE8sMrXYzNu9cu7kH7f5x9EU5G6bD0qUbSUvSjsP9UyM816dEh2rQtPNGrprk6sRr1ST9gCX6p_TCCI9aHW3jDYuMS_-IGeQQ2O7MLTvBZxChphtXJg57P70e0zvuc7IrhtvXfWQ5SgBbk6ZqnrdhSlrAninQaE0jH-45-IBUKNJ7YMgOfK70nJgPuPymadfIyvgxkDpxikje_qYlWh4QDn-0zIwHXk70kuUAcWv" },
  { id: 3, name: "Vitamin C Brightening Serum",  desc: "Potent antioxidant serum to even skin tone.",                    price: "₹1,299", rating: 4.9, inStock: false, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7P5apcairYZ0pfulGao2_Dg3g0bSmGJASHOWbmHQIdapygrFBdU7N90T-52y7qDXkp60rsL8fZBVsyl3a9j2r65K0YJstgQHCQk12B9J57HKQAXm1836CQbF-4mGaqErNIVfDI9eFiQVbwAzXi4v6xPAi-e7OMSN2Z5VP_1KPOvyHG_vCoxNJcDCR6ckLfRo9X8iDUk0aezeHnUQWHC2eIf9mPzTRvMf4eE0dALlXUDY9qhtqTYdu9z0VxtplcYV1chuUQO3-TnsT" },
  { id: 4, name: "Lavender Sleep Mist",           desc: "Soothing pillow spray with pure essential oils.",                price: "₹650",   rating: 4.7, inStock: true,  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ05FtKFkFGZhJNbwNGhvKyXn0LrgdKmbOvybbkGj1k3bD7-S2F6os_pbUWKtlGQosD1Y9FBkMaILULAvkIr5wmpuKpgocShkWucH0XQdVyAL5kx9Ek5z2sZfqGHSwmTzdRMPTwOe3fXI4tGosvtd78F4yIj_k0mRjog5aDO6Jkq8Vgj41zDlxuWM6p" },
];

export default function Wishlist() {
  const [items, setItems] = useState(ITEMS_INIT);
  const remove = id => setItems(p => p.filter(i => i.id !== id));

  return (
    <div className="max-w-lg">

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#143109" }}>Wishlist</h1>
          <p className="mt-1 text-sm" style={{ color: "rgba(31,41,55,0.45)" }}>
            {items.length} saved item{items.length !== 1 ? "s" : ""}
          </p>
        </div>
        {items.length > 0 && (
          <button
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 transition-opacity hover:opacity-90"
            style={{ background: "#143109" }}
          >
            <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
            Add all to cart
          </button>
        )}
      </div>

      {items.length === 0 && (
        <div
          className="py-20 text-center rounded-2xl bg-white"
          style={{ border: "1px solid rgba(20,49,9,0.08)" }}
        >
          <div className="inline-flex w-14 h-14 items-center justify-center rounded-full mb-4" style={{ background: "rgba(20,49,9,0.07)" }}>
            <span className="material-symbols-outlined text-2xl" style={{ color: "#143109" }}>favorite_border</span>
          </div>
          <p className="text-sm font-bold" style={{ color: "rgba(20,49,9,0.45)" }}>Your wishlist is empty</p>
          <p className="text-xs mt-1" style={{ color: "rgba(31,41,55,0.35)" }}>Save products you love to find them easily later.</p>
          <button className="mt-4 px-5 py-2 rounded-xl text-xs font-bold text-white" style={{ background: "#143109" }}>
            Browse Products
          </button>
        </div>
      )}

      <div className="space-y-3">
        {items.map(item => (
          <div
            key={item.id}
            className="flex gap-4 p-4 rounded-2xl bg-white overflow-hidden group hover:shadow-md transition-shadow"
            style={{ border: "1px solid rgba(20,49,9,0.08)", boxShadow: "0 1px 8px rgba(20,49,9,0.03)" }}
          >
            {/* Image */}
            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-50">
              <img
                src={item.img} alt={item.name}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${!item.inStock ? "opacity-50 grayscale" : ""}`}
              />
              {!item.inStock && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.9)", color: "rgba(31,41,55,0.55)" }}
                  >
                    Out of stock
                  </span>
                </div>
              )}
              <button
                onClick={() => remove(item.id)}
                className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                style={{ background: "rgba(255,255,255,0.95)", color: "#ef4444" }}
              >
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </button>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold leading-tight line-clamp-1" style={{ color: "#143109" }}>{item.name}</p>
                <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "rgba(31,41,55,0.45)" }}>{item.desc}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="material-symbols-outlined text-amber-400 text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-semibold" style={{ color: "rgba(20,49,9,0.6)" }}>{item.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <span className="text-base font-extrabold" style={{ color: "#143109" }}>{item.price}</span>
                <button
                  disabled={!item.inStock}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-35 disabled:cursor-not-allowed"
                  style={{ background: "#143109" }}
                >
                  <span className="material-symbols-outlined text-[13px]">shopping_bag</span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}