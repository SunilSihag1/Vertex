import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Manual Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;

      await api.post("auth/signup", dataToSend);

      navigate("/verify-otp", { state: { email: formData.email } });

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await api.post("/auth/google", {
        name: user.displayName,
        email: user.email,
        googleId: user.uid
      });

      localStorage.setItem("accessToken", res.data.accessToken);

      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Google Signup Failed");
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">

      {/* RIGHT SIDE FORM */}
      <section className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
        <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
          <div className="w-full max-w-[480px] space-y-8">

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight lg:text-4xl">
                Get started for free
              </h1>
              <p className="text-slate-500 text-base">
                No credit card required. Build your store in minutes.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Work Email
                </label>
                <div className="relative group">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                    placeholder="jane@company.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Create Password
                </label>
                <div className="relative group">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="shimmer w-full bg-primary text-white py-4 rounded-lg font-bold text-base"
              >
                Create Your Store
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 py-3.5 border border-slate-200 dark:border-slate-700 rounded-lg"
              >
                Sign up with Google
              </button>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;