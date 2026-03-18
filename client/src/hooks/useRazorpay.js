/**
 * useRazorpay.js
 * Location: client/src/hooks/useRazorpay.js
 *
 * Reusable hook that encapsulates the ENTIRE Razorpay payment flow.
 * Landing.jsx (and any other page) just calls initiatePurchase() — done.
 *
 * What this hook handles:
 *  1. Creates order on our server (gets order + key in ONE call)
 *  2. Opens Razorpay modal with correct config
 *  3. On success → verifies payment on our server → creates Subscription
 *  4. On failure → reports failure to our server (correct URL + auth header)
 *  5. Exposes loading / error / success states for UI feedback
 *
 * Fixes from old landing.jsx implementation:
 *  ❌ fetch("/api/payment/payment-failed")  → ✅ api.post("/subscription/payment-failed")
 *  ❌ No auth header on payment-failed      → ✅ api instance sends auth automatically
 *  ❌ alert() for success/failure           → ✅ React state (error, isSuccess)
 *  ❌ 2 API calls (create-order + get-key) → ✅ 1 API call (key returned with order)
 *  ❌ Payment logic in landing.jsx          → ✅ Extracted into reusable hook
 *  ❌ No loading state                      → ✅ isLoading state exposed
 */

import { useState, useCallback } from "react";
import api from "../service/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * @returns {{
 *   initiatePurchase : (planId: string, billing: "monthly"|"yearly") => Promise<void>,
 *   isLoading        : boolean,
 *   error            : string | null,
 *   isSuccess        : boolean,
 *   subscription     : object | null,
 *   reset            : () => void,
 * }}
 */
const useRazorpay = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [subscription, setSubscription] = useState(null);

    const reset = useCallback(() => {
        setIsLoading(false);
        setError(null);
        setIsSuccess(false);
        setSubscription(null);
    }, []);

    /**
     * Loads the Razorpay checkout script dynamically if not already present.
     * The script is included in index.html so this is a safety fallback.
     */
    const ensureRazorpayLoaded = () =>
        new Promise((resolve, reject) => {
            if (window.Razorpay) return resolve();

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
            document.body.appendChild(script);
        });

    /**
     * Main entry point — call this when user clicks a "Buy Plan" button.
     *
     * @param {string} planId
     * @param {"monthly"|"yearly"} billing
     */
    const initiatePurchase = useCallback(async (planId, billing) => {
        if (!user) {
            navigate("/login", {
                state: { from: location },
            });
            setError("Please log in to purchase a plan.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            // ── Step 1: Ensure Razorpay SDK is loaded ─────────────────────────
            await ensureRazorpayLoaded();

            // ── Step 2: Create order — server returns BOTH order + key ─────────
            // One API call instead of two (old code called create-order AND razorpay-key separately)
            const { data } = await api.post("/subscription/create-order", {
                planId,
                billing,
            });

            const { order, key } = data;

            // ── Step 3: Open Razorpay modal ────────────────────────────────────
            await new Promise((resolve, reject) => {
                const options = {
                    key,
                    order_id: order.id,
                    amount: order.amount,
                    currency: order.currency,
                    name: "My Bizz",

                    prefill: {
                        email: user.email ?? "",
                    },

                    theme: {
                        color: "#143109",
                    },

                    // ── Success handler ────────────────────────────────────────
                    handler: async (response) => {
                        try {
                            // Verify payment on our server → creates Subscription
                            const verifyRes = await api.post("/subscription/verify-payment", {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            });

                            setSubscription(verifyRes.data.subscription);
                            setIsSuccess(true);
                            resolve();

                        } catch (verifyErr) {
                            reject(new Error(
                                verifyErr.response?.data?.message
                                ?? "Payment was received but verification failed. Please contact support."
                            ));
                        }
                    },

                    modal: {
                        // Called when user manually closes the Razorpay modal
                        ondismiss: () => {
                            reject(new Error("DISMISSED"));
                        },
                    },
                };

                const rzp = new window.Razorpay(options);

                // ── Failure handler ────────────────────────────────────────────
                // FIX: was using fetch("/api/payment/payment-failed") — wrong URL + no auth
                // NOW:  api.post("/subscription/payment-failed") — correct URL + auth header
                rzp.on("payment.failed", async (response) => {
                    const orderId = response.error?.metadata?.order_id;
                    const errorCode = response.error?.code;
                    const errorReason = response.error?.description;

                    // Report failure to our server (best-effort — don't block the user)
                    try {
                        await api.post("/subscription/payment-failed", {
                            razorpay_order_id: orderId,
                            error_code: errorCode,
                            error_reason: errorReason,
                        });
                    } catch {
                        // Server logging failed — not critical, continue to show error to user
                        console.error("[useRazorpay] Failed to report payment failure to server");
                    }

                    reject(new Error(errorReason ?? "Payment failed. Please try again."));
                });

                rzp.open();
            });

        } catch (err) {
            // User dismissed modal — not really an error, just reset loading
            if (err.message === "DISMISSED") {
                setIsLoading(false);
                return;
            }
            setError(err.response?.data?.message ?? err.message ?? "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    return {
        initiatePurchase,
        isLoading,
        error,
        isSuccess,
        subscription,
        reset,
    };
};

export default useRazorpay;