import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import AddressFormModal from "../../components/address/AddressFormModal";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /* address modal state */
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  /* ── Manual login ───────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      await checkAndPromptAddress();
    } catch (err) {
      const message = err.response?.data?.message;
      if (message === "Account locked") {
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

  /* ── Google login ───────────────────────────────────────── */
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const res = await api.post("/auth/google", {
        name: user.displayName,
        email: user.email,
        googleId: user.uid,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      await checkAndPromptAddress();
    } catch {
      alert("Google Login Failed");
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
      <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-5xl bg-white dark:bg-primary/30 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Left panel */}
          <div className="md:w-5/12 relative bg-primary flex flex-col items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="absolute -bottom-20 -left-20 size-64 bg-sage/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 size-64 bg-sage/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl text-center flex flex-col items-center gap-4 shadow-2xl">
              <div className="size-16 rounded-full bg-sage/30 flex items-center justify-center text-white mb-2">
                <span className="material-symbols-outlined text-4xl">vitals</span>
              </div>
              <h3 className="text-white text-2xl font-bold">Welcome Back</h3>
              <p className="text-sage text-sm leading-relaxed max-w-[200px]">
                Your smart dashboard is ready for your next move.
              </p>
            </div>
            <div className="mt-12 text-center z-10 hidden md:block">
              <p className="text-sage/60 text-xs uppercase tracking-widest font-bold">
                Vertex v1.0
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div className="md:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-primary dark:text-sage mb-2">
                  Login
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Log in to manage your smart store and view analytics.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary dark:text-slate-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 dark:text-sage/50 group-focus-within:text-primary dark:group-focus-within:text-sage transition-colors">
                      mail
                    </span>
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

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <a
                      className="text-xs font-semibold text-primary dark:text-slate-400 hover:underline"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 dark:text-sage/50 group-focus-within:text-primary dark:group-focus-within:text-sage transition-colors">
                      lock
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-3.5 bg-background-light dark:bg-primary/50 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary dark:focus:ring-slate-500 transition-all outline-none text-slate-900 dark:text-white"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary dark:text-sage/50 dark:hover:text-sage transition-colors cursor-pointer"
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  className="w-full shimmer-btn bg-primary text-white py-3.5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer border border-slate-200 dark:border-slate-700 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in…" : "Log In"}
                </button>

                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-primary/60 dark:border-slate-500"></div>
                  <span className="flex-shrink mx-4 text-primary/60 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-primary/60 dark:border-slate-500"></div>
                </div>

                {/* Google */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full py-3.5 flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-700 rounded-full font-medium shimmer-btn bg-primary text-white px-10 text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer"
                >
                  <img
                    alt="Google Logo"
                    className="size-5"
                    src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
                  />
                  <span>Google Account</span>
                </button>
              </form>

              <p className="mt-10 text-center text-sm text-primary/60 dark:text-slate-400">
                Don&apos;t have an account?{" "}
                <a
                  className="text-primary dark:text-sage font-bold hover:underline"
                  href="/signup"
                >
                  Sign Up Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

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