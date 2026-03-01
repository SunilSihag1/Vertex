import { Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Landing from "../pages/landing/landing";
import Login from "../pages/auth/Login";
import Otp from "../pages/auth/Otp";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<Otp />} />
    </Routes>
  );
};

export default AppRoutes;