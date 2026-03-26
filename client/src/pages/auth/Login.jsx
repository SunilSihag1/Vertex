/**
 * Login.jsx
 * Location: client/src/pages/auth/Login.jsx
 *
 * Change: Instead of manually writing to localStorage,
 * calls login() from AuthContext which updates global auth state.
 */

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../service/api";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../firebase";
import AddressFormModal from "../../components/address/AddressFormModal";
import { useAuth } from "../../context/AuthContext";
import useDeviceId from "../../hooks/useDeviceId";
import GoogleButton from "../../components/auth/GoogleButton";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const deviceId = useDeviceId();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /* address modal state */
  const [showAddressModal, setShowAddressModal] = useState(false);

  // Where to redirect after login (if coming from a protected route)
  const redirectTo = location.state?.from?.pathname ?? "/";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ── Check if user needs to add address ────────────────── */
  const checkAndPromptAddress = async () => {
    try {
      const res = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const addresses = res.data?.data?.addresses ?? [];
      if (addresses.length === 0) {
        setShowAddressModal(true); // prompt user to add first address
      } else {
        navigate("/");
        window.location.reload();
      }
    } catch {
      // non-critical — just navigate normally
      navigate("/");
      window.location.reload();
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deviceId) {
      alert("Unable to identify your device. Please allow localStorage access.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
        deviceId,
      });


      login(res.data.accessToken); // ← updates AuthContext state
      navigate(redirectTo, { replace: true });
      await checkAndPromptAddress();


    } catch (err) {

      const message = err.response?.data?.message;

      if (message === "Account locked. Try Later.") {
        alert("Account locked for 15 minutes due to multiple failed attempts.");
      } else if (message === "User not verified") {
        navigate("/verify-otp", { state: { email: formData.email } });
      } else {
        alert(message || "Login failed");
      }

    } finally {
      setLoading(false);
    }
  };

  /* ── Address modal handlers ─────────────────────────────── */
  const handleAddressSuccess = () => {
    // address saved — navigate to home
    navigate("/");
    window.location.reload();
  };

  const handleSkipAddress = () => {
    // user dismissed modal — navigate anyway
    setShowAddressModal(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <main className="grow flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-5xl bg-white dark:bg-primary/30 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-150">
          <div className="md:w-5/12 relative bg-primary flex flex-col items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="absolute -bottom-20 -left-20 size-64 bg-sage/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 size-64 bg-sage/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl text-center flex flex-col items-center gap-4 shadow-2xl">
              <div className="size-16 rounded-full bg-sage/30 flex items-center justify-center text-white mb-2">
                <span className="material-symbols-outlined text-4xl">vitals</span>
              </div>
              <h3 className="text-white text-2xl font-bold">Welcome Back</h3>
              <p className="text-sage text-sm leading-relaxed max-w-50]">Your smart dashboard is ready for your next move.</p>
            </div>
            <div className="mt-12 text-center z-10 hidden md:block">
              <p className="text-sage/60 text-xs uppercase tracking-widest font-bold">My Bizz v1.0</p>
            </div>
          </div>
          <div className="md:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-primary dark:text-sage mb-2">Login</h2>
                <p className="text-slate-500 dark:text-slate-400">Log in to manage your smart store and view analytics.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary dark:text-slate-300 ml-1">Email Address</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 dark:text-sage/50 group-focus-within:text-primary dark:group-focus-within:text-sage transition-colors">mail</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-primary/50 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary dark:focus:ring-slate-500 transition-all outline-none text-primary dark:text-sage"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                    <a className="text-xs font-semibold text-primary dark:text-slate-400 hover:underline" href="#">Forgot Password?</a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 dark:text-sage/50 group-focus-within:text-primary dark:group-focus-within:text-sage transition-colors">lock</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-primary/50 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary dark:focus:ring-slate-500 transition-all outline-none text-slate-900 dark:text-white"
                      placeholder="••••••••"
                      required
                    />

                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary dark:text-sage/50 dark:hover:text-sage transition-colors cursor-pointer"
                      type="button"
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </button>
                  </div>
                </div>
                <button
                  className="w-full shimmer-btn bg-primary text-white py-3.5 rounded-full  font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer border border-slate-200 dark:border-slate-700"
                  type="submit"
                  disabled={loading}
                >

                  <span className="relative z-10">{loading ? "Logging in..." : "Log In"}</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent "></div>
                </button>
                <div className="relative flex items-center py-2">
                  <div className="grow border-t border-primary/60 dark:border-slate-500"></div>
                  <span className="shrink mx-4 text-primary/60 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">or continue with</span>
                  <div className="grow border-t border-primary/60 dark:border-slate-500"></div>
                </div>
                {/* <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="w-full py-3.5 flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-700 rounded-lg  font-medium shimmer-btn bg-primary text-white px-10 text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer">
                                <img alt="Google Logo" className="size-5" data-alt="Google colorful company logo" src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" />
                                <span>Google Account</span>
                            </button> */}
                <GoogleButton redirectTo={redirectTo} label="Continue with Google" />
              </form>
              <p className="mt-10 text-center text-sm text-primary/60 dark:text-slate-400">
                Don't have an account?
                <a className="text-primary dark:text-sage font-bold hover:underline" href="/signup"> Sign Up Now</a>
              </p>
            </div>
          </div>
        </div>
      </main >
      {/* Address Modal — shown after first login when no address exists */}
      <AddressFormModal
        isOpen={showAddressModal}
        onClose={handleSkipAddress}
        onSuccess={handleAddressSuccess}
        existingAddresses={[]}
      />
    </>
  );
}

export default Login;