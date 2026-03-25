/**
 * api.js
 * Location: client/src/service/api.js
 *
 * Production-grade Axios instance with two interceptors:
 *
 * REQUEST interceptor:
 *  → Automatically attaches "Authorization: Bearer <token>" on every request
 *  → No need to manually pass token anywhere in the codebase
 *
 * RESPONSE interceptor:
 *  → On 401: silently calls /auth/refresh to get a new access token
 *  → Retries the original failed request with the new token (once)
 *  → On retry failure: clears localStorage and redirects to /login
 *  → Queues concurrent requests during refresh (no duplicate refresh calls)
 */

import axios from "axios";

// ─── Instance ─────────────────────────────────────────────────────────────────

const api = axios.create({
    baseURL:         import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
    withCredentials: true,  // REQUIRED: sends HttpOnly refresh token cookie automatically
});

// ─── Token Refresh Queue ──────────────────────────────────────────────────────
// If multiple requests fail with 401 at the same time (e.g. on page load),
// we only want ONE refresh call — the rest queue up and wait for it.

let isRefreshing  = false;
let refreshQueue  = []; // [{ resolve, reject }]

const processQueue = (error, token = null) => {
    refreshQueue.forEach(({ resolve, reject }) => {
        error ? reject(error) : resolve(token);
    });
    refreshQueue = [];
};

// ─── Request Interceptor ──────────────────────────────────────────────────────

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ─── Response Interceptor ─────────────────────────────────────────────────────

api.interceptors.response.use(
    // Success — pass through untouched
    (response) => response,

    // Error handler
    async (error) => {
        const originalRequest = error.config;

        // Only handle 401 errors that haven't been retried yet
        // _retry flag prevents infinite loop
        if (error.response?.status !== 401 || originalRequest._retry) {
            return Promise.reject(error);
        }

        // Skip refresh for the refresh endpoint itself (prevents infinite loop)
        if (originalRequest.url?.includes("/auth/refresh")) {
            localStorage.removeItem("accessToken");
            return Promise.reject(error);
        }

        // ── Queue concurrent requests ──────────────────────────────────────────

        if (isRefreshing) {
            // Another refresh is already in flight — queue this request
            return new Promise((resolve, reject) => {
                refreshQueue.push({ resolve, reject });
            })
                .then((newToken) => {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return api(originalRequest);
                })
                .catch(Promise.reject);
        }

        // ── Attempt silent token refresh ───────────────────────────────────────

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            const res      = await api.post("/auth/refresh");
            const newToken = res.data.accessToken;

            localStorage.setItem("accessToken", newToken);

            // Update default header for future requests
            api.defaults.headers.common.Authorization = `Bearer ${newToken}`;

            // Retry the original request
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            // Unblock queued requests
            processQueue(null, newToken);

            return api(originalRequest);

        } catch (refreshError) {
            // Refresh failed — session is truly expired
            processQueue(refreshError, null);
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
            return Promise.reject(refreshError);

        } finally {
            isRefreshing = false;
        }
    }
);

export default api;