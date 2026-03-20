import { Routes, Route } from "react-router-dom";
import Signup          from "../pages/auth/Signup";
import Landing         from "../pages/landing/landing";
import Login           from "../pages/auth/Login";
import Otp             from "../pages/auth/Otp";
import Pricing         from "../pages/landing/pricing";
import Settings        from "../pages/settings-page/settings";
import EditProfile     from "../components/settings/common-components/edit-profile";
import ResetPassword   from "../components/settings/common-components/reset-password";
import Notification    from "../components/settings/common-components/notification";
import MyOrders        from "../components/settings/role-based-component/user-role-based-components/my-orders";
import SavedAddress    from "../components/settings/role-based-component/user-role-based-components/saved-address";
import Wishlist        from "../components/settings/role-based-component/user-role-based-components/wishlist";
import ManageProducts  from "../components/settings/role-based-component/shop-owner-components/manage-products";
import SalesAnalytics  from "../components/settings/role-based-component/shop-owner-components/sales-analytics";
import ShopProfile     from "../components/settings/role-based-component/shop-owner-components/shop-profile";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public */}
            <Route path="/"           element={<Landing />} />
            <Route path="/signup"     element={<Signup />} />
            <Route path="/login"      element={<Login />} />
            <Route path="/verify-otp" element={<Otp />} />
            <Route path="/pricing"    element={<Pricing />} />

            {/* Settings — nested, renders via <Outlet /> in settings.jsx */}
            <Route path="/settings" element={<Settings />}>
                {/* Common */}
                <Route path="edit-profile"   element={<EditProfile />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="notifications"  element={<Notification />} />

                {/* User role */}
                <Route path="my-orders"     element={<MyOrders />} />
                <Route path="wishlist"      element={<Wishlist />} />
                <Route path="saved-address" element={<SavedAddress />} />

                {/* Shop owner role */}
                <Route path="manage-products" element={<ManageProducts />} />
                <Route path="sales-analytics" element={<SalesAnalytics />} />
                <Route path="shop-profile"    element={<ShopProfile />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;