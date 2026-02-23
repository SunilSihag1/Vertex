import { Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<h1>home page</h1>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;