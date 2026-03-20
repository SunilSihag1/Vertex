import { useEffect, useState } from "react";
import api from "../../../service/api";

const SavedAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ───────── FETCH ADDRESSES ───────── */
  const fetchAddresses = async () => {
    try {
      const res = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });

      setAddresses(res.data.data.addresses || []);
    } catch (err) {
      console.error("Failed to fetch addresses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  /* ───────── DELETE ADDRESS ───────── */
  const handleDelete = async (index) => {
    try {
      const updated = addresses.filter((_, i) => i !== index);

      await api.put(
        "/profile",
        { addresses: updated },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      );

      setAddresses(updated);
    } catch (err) {
      alert("Failed to delete address");
    }
  };

  /* ───────── SET DEFAULT ───────── */
  const handleSetDefault = async (index) => {
    try {
      const updated = addresses.map((addr, i) => ({
        ...addr,
        isDefault: i === index
      }));

      await api.put(
        "/profile",
        { addresses: updated },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      );

      setAddresses(updated);
    } catch (err) {
      alert("Failed to set default");
    }
  };

  /* ───────── LOADING ───────── */
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading addresses...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto lg:max-w-xl lg:ml-24 lg:mr-auto">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#143109] tracking-tight">
          Saved Addresses
        </h1>
        <p className="mt-2 text-[#1f2937]/80 text-sm">
          Manage your delivery locations.
        </p>
      </header>

      {/* ADD BUTTON */}
      <div className="mb-10">
        <button className="w-full bg-primary text-white py-4 rounded-lg">
          + Add New Address
        </button>
      </div>

      {/* ADDRESS LIST */}
      <div className="space-y-6">

        {addresses.length === 0 && (
          <p className="text-gray-500 text-center">No addresses found</p>
        )}

        {addresses.map((addr, index) => (
          <div key={index} className="glass-card rounded-xl p-6">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#143109]">
                  {addr.type === "home"
                    ? "home"
                    : addr.type === "office"
                      ? "work"
                      : "location_on"}
                </span>

                <h3 className="font-bold text-lg text-[#143109] capitalize">
                  {addr.type}
                </h3>

                {addr.isDefault && (
                  <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-[#143109]/10 text-[#143109] rounded-full">
                    Default
                  </span>
                )}
              </div>
            </div>

            {/* ADDRESS INFO */}
            <div className="space-y-1 mb-6">
              <p className="text-[#1f2937]/70 text-sm">
                {addr.line1}
                {addr.line2 && `, ${addr.line2}`}
              </p>

              <p className="text-[#1f2937]/70 text-sm">
                {addr.city}, {addr.state} - {addr.pincode}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">

              <button className="flex-1 px-4 py-2 border rounded-lg text-sm">
                Edit
              </button>

              {!addr.isDefault && (
                <button
                  onClick={() => handleSetDefault(index)}
                  className="flex-1 px-4 py-2 border rounded-lg text-sm"
                >
                  Set Default
                </button>
              )}

              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 text-red-500"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SavedAddress;