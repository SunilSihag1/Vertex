import { useEffect, useState } from "react";
import api from "../../../../service/api";
import AddressFormModal from "../../../address/AddressFormModal";

const TYPE_ICON = {
  home: "home",
  office: "work",
  other: "location_on",
};

const SavedAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // index of the card performing an action
  const [error, setError] = useState(null);

  /* modal state */
  const [modal, setModal] = useState({
    open: false,
    editAddress: null,
    editIndex: null,
  });

  /* ── Fetch ──────────────────────────────────────────────── */
  const fetchAddresses = async () => {
    try {
      setError(null);
      const res = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setAddresses(res.data?.data?.addresses ?? []);
    } catch {
      setError("Failed to load addresses. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  /* ── Persist updated addresses array ───────────────────── */
  const persistAddresses = async (updated, actionIndex = null) => {
    try {
      setActionLoading(actionIndex);
      await api.put(
        "/profile",
        { addresses: updated },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setAddresses(updated);
    } catch {
      setError("Action failed. Please try again.");
    } finally {
      setActionLoading(null);
    }
  };

  /* ── Delete ─────────────────────────────────────────────── */
  const handleDelete = async (index) => {
    const isDefault = addresses[index]?.isDefault;
    const updated = addresses.filter((_, i) => i !== index);

    // if deleted address was default, promote the first remaining one
    if (isDefault && updated.length > 0) {
      updated[0] = { ...updated[0], isDefault: true };
    }

    await persistAddresses(updated, index);
  };

  /* ── Set Default ────────────────────────────────────────── */
  const handleSetDefault = async (index) => {
    const updated = addresses.map((addr, i) => ({
      ...addr,
      isDefault: i === index,
    }));
    await persistAddresses(updated, index);
  };

  /* ── Modal helpers ──────────────────────────────────────── */
  const openAddModal = () =>
    setModal({ open: true, editAddress: null, editIndex: null });

  const openEditModal = (addr, index) =>
    setModal({ open: true, editAddress: addr, editIndex: index });

  const closeModal = () =>
    setModal({ open: false, editAddress: null, editIndex: null });

  const handleModalSuccess = (updatedAddresses) => {
    setAddresses(updatedAddresses);
  };

  /* ── Loading skeleton ───────────────────────────────────── */
  if (loading) {
    return (
      <div className="max-w-md mx-auto lg:max-w-xl lg:ml-24 lg:mr-auto space-y-4 pt-4">
        {[1, 2].map((n) => (
          <div
            key={n}
            className="rounded-xl border border-slate-100 bg-white p-6 animate-pulse"
          >
            <div className="h-4 bg-slate-100 rounded w-1/3 mb-3" />
            <div className="h-3 bg-slate-100 rounded w-2/3 mb-2" />
            <div className="h-3 bg-slate-100 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto lg:max-w-xl lg:ml-24 lg:mr-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#143109] tracking-tight">
            Saved Addresses
          </h1>
          <p className="mt-1.5 text-sm text-[#1f2937]/60">
            Manage your delivery locations.
          </p>
        </header>

        {/* Global error */}
        {error && (
          <div className="mb-6 flex items-start gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            <span className="material-symbols-outlined text-base mt-0.5 flex-shrink-0">
              error
            </span>
            {error}
          </div>
        )}

        {/* Add button */}
        <button
          onClick={openAddModal}
          className="w-full mb-8 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-dashed border-[#143109]/20 text-[#143109] font-semibold text-sm hover:border-[#143109]/50 hover:bg-[#143109]/5 transition-all"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          Add New Address
        </button>

        {/* Empty state */}
        {addresses.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#143109]/10 mb-4">
              <span className="material-symbols-outlined text-[#143109] text-3xl">
                location_off
              </span>
            </div>
            <p className="text-[#143109]/60 font-medium text-sm">
              No addresses saved yet.
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Add one to start receiving deliveries.
            </p>
          </div>
        )}

        {/* Address cards */}
        <div className="space-y-4">
          {addresses.map((addr, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md ${
                addr.isDefault
                  ? "border-[#143109]/30 shadow-sm"
                  : "border-slate-100"
              }`}
            >
              {/* Default ribbon */}
              {addr.isDefault && (
                <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 bg-[#143109] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  <span className="material-symbols-outlined text-[10px]">
                    star
                  </span>
                  Default
                </span>
              )}

              {/* Card header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#143109]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#143109] text-sm">
                    {TYPE_ICON[addr.type] ?? "location_on"}
                  </span>
                </div>
                <span className="font-bold text-[#143109] capitalize text-sm">
                  {addr.type}
                </span>
              </div>

              {/* Address details */}
              <div className="space-y-0.5 mb-4 ml-10">
                <p className="text-[#1f2937] text-sm font-medium">
                  {addr.line1}
                </p>
                {addr.line2 && (
                  <p className="text-[#1f2937]/70 text-sm">{addr.line2}</p>
                )}
                <p className="text-[#1f2937]/70 text-sm">
                  {addr.city}, {addr.state} — {addr.pincode}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                {/* Edit */}
                <button
                  onClick={() => openEditModal(addr, index)}
                  disabled={actionLoading !== null}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#143109]/15 text-[#143109] text-xs font-semibold hover:bg-[#143109]/5 transition-colors disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  Edit
                </button>

                {/* Set Default */}
                {!addr.isDefault && (
                  <button
                    onClick={() => handleSetDefault(index)}
                    disabled={actionLoading === index}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#143109]/15 text-[#143109] text-xs font-semibold hover:bg-[#143109]/5 transition-colors disabled:opacity-50"
                  >
                    {actionLoading === index ? (
                      <span className="material-symbols-outlined text-sm animate-spin">
                        progress_activity
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                    )}
                    Set Default
                  </button>
                )}

                {/* Delete */}
                <button
                  onClick={() => handleDelete(index)}
                  disabled={actionLoading === index}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-red-100 text-red-500 text-xs font-semibold hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  {actionLoading === index ? (
                    <span className="material-symbols-outlined text-sm animate-spin">
                      progress_activity
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add / Edit Modal */}
      <AddressFormModal
        isOpen={modal.open}
        onClose={closeModal}
        onSuccess={handleModalSuccess}
        editAddress={modal.editAddress}
        editIndex={modal.editIndex}
        existingAddresses={addresses}
      />
    </>
  );
};

export default SavedAddress;