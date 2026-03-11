import { Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Landing from "../pages/landing/landing";
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";
import Pricing from "../pages/landing/pricing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<Otp />} />
      <Route path="/pricing" element={<Pricing />} />
      </Routes>
  );
};

export default AppRoutes;