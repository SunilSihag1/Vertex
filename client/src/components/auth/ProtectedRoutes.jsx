/**
 * ProtectedRoute.jsx
 * Location: client/src/components/auth/ProtectedRoute.jsx
 *
 * Two route guard components:
 *
 * <ProtectedRoute>
 *  → Requires user to be logged in
 *  → Shows full-screen spinner during boot auth check (isLoading)
 *  → Redirects to /login if not authenticated
 *  → Saves the attempted URL so user lands back after login
 *
 * <PublicOnlyRoute>
 *  → For pages that logged-in users should NOT see (Login, Signup)
 *  → Redirects to / if already authenticated
 *  → Also respects isLoading
 */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// ─── Loading Spinner ──────────────────────────────────────────────────────────

const FullPageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="flex flex-col items-center gap-4">
            <div className="size-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading…</p>
        </div>
    </div>
);

// ─── Protected Route ──────────────────────────────────────────────────────────

/**
 * Wrap any route that requires authentication.
 *
 * Usage in AppRoutes.jsx:
 *   <Route element={<ProtectedRoute />}>
 *     <Route path="/dashboard" element={<Dashboard />} />
 *     <Route path="/settings"  element={<Settings />} />
 *   </Route>
 */
export const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    // Still checking auth (boot refresh in progress) — show spinner, don't redirect
    if (isLoading) return <FullPageLoader />;

    // Not authenticated — redirect to login, save current URL to redirect back after
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Authenticated — render the child route
    return <Outlet />;
};

// ─── Public Only Route ────────────────────────────────────────────────────────

/**
 * Wrap routes that logged-in users should NOT see (Login, Signup, etc.).
 * If already authenticated, redirects to "/" (or wherever they came from).
 *
 * Usage in AppRoutes.jsx:
 *   <Route element={<PublicOnlyRoute />}>
 *     <Route path="/login"  element={<Login />} />
 *     <Route path="/signup" element={<Signup />} />
 *   </Route>
 */
export const PublicOnlyRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <FullPageLoader />;

    if (isAuthenticated) {
        // Redirect to the page they originally tried to visit, or home
        const destination = location.state?.from?.pathname ?? "/";
        return <Navigate to={destination} replace />;
    }

    return <Outlet />;
};