import { Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Landing from "../pages/landing/landing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;