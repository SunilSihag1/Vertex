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
import Landing from "../pages/landing/landing";
import Pricing from "../pages/landing/pricing";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Otp from "../pages/auth/Otp";
import Pricing from "../pages/landing/pricing";
import Settings from "../pages/settings-page/settings";
import EditProfile from "../components/settings/common-components/edit-profile";
import ResetPassword from "../components/settings/common-components/reset-password";
import Notification from "../components/settings/common-components/notification";
import MyOrders from "../components/settings/role-based-component/user-role-based-components/my-orders";
import SavedAddress from "../components/settings/role-based-component/user-role-based-components/saved-address";
import Wishlist from "../components/settings/role-based-component/user-role-based-components/wishlist";
import ManageProducts from "../components/settings/role-based-component/shop-owner-components/manage-products";
import SalesAnalytics from "../components/settings/role-based-component/shop-owner-components/sales-analytics";
import ShopProfile from "../components/settings/role-based-component/shop-owner-components/shop-profile";

/* Create-shop flow */
import CreateShop from "../pages/create-shop/CreateShop";

const AppRoutes = () => {
    return (
        <Routes>

            {/* ── Public Routes (accessible to everyone) ──────────────────── */}
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/verify-otp" element={<Otp />} />

            {/* ── Public Only Routes (redirect to / if already logged in) ─── */}
            <Route element={<PublicOnlyRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            {/* ── Protected Routes (redirect to /login if not logged in) ───── */}
            <Route element={<ProtectedRoute />}>
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/create-shop" element={<CreateShop />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="notifications" element={<Notification />} />
                
                <Route path="my-orders" element={<MyOrders />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="saved-address" element={<SavedAddress />} />
                
                <Route path="manage-products" element={<ManageProducts />} />
                <Route path="sales-analytics" element={<SalesAnalytics />} />
                <Route path="shop-profile" element={<ShopProfile />} />


                {/* Add more protected routes here */}
            </Route>

            {/* ── 404 Fallback ─────────────────────────────────────────────── */}
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    );
};

export default AppRoutes;