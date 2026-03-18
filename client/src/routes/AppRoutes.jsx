/**
 * AppRoutes.jsx
 * Location: client/src/routes/AppRoutes.jsx
 *
 * Route structure:
 *
 *  Public (anyone):
 *    /              → Landing
 *    /pricing       → Pricing
 *    /verify-otp    → OTP page
 *
 *  Public Only (logged-out users only):
 *    /login         → Login   (redirects to / if already logged in)
 *    /signup        → Signup  (redirects to / if already logged in)
 *
 *  Protected (logged-in users only):
 *    /dashboard     → Dashboard  (redirects to /login if not logged in)
 *    ... add more protected routes here
 *
 *  Fallback:
 *    *              → 404
 */

import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Landing    from "../pages/landing/landing";
import Pricing    from "../pages/landing/pricing";
import Login      from "../pages/auth/Login";
import Signup     from "../pages/auth/Signup";
import Otp        from "../pages/auth/Otp";

// Route Guards
import { ProtectedRoute, PublicOnlyRoute } from "../components/auth/ProtectedRoutes";

// Protected pages (create these as you build the app)
// import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>

            {/* ── Public Routes (accessible to everyone) ──────────────────── */}
            <Route path="/"           element={<Landing />} />
            <Route path="/pricing"    element={<Pricing />} />
            <Route path="/verify-otp" element={<Otp />} />

            {/* ── Public Only Routes (redirect to / if already logged in) ─── */}
            <Route element={<PublicOnlyRoute />}>
                <Route path="/login"  element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            {/* ── Protected Routes (redirect to /login if not logged in) ───── */}
            <Route element={<ProtectedRoute />}>
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                {/* Add more protected routes here */}
            </Route>

            {/* ── 404 Fallback ─────────────────────────────────────────────── */}
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    );
};

export default AppRoutes;