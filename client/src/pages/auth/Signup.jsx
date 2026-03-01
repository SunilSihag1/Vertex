import { useState } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";


const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;

      const res = await api.post("/auth/signup", dataToSend);

      alert(res.data.message);

      navigate("/verify-otp", { state: { email: formData.email } });

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await api.post("/auth/google", {
        name: user.displayName,
        email: user.email,
        googleId: user.uid
      });

      alert(res.data.message);

      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Google Signup Failed");
    }
  };

  return (
    <>
      <main className="min-h-screen flex flex-col lg:flex-row bg-background-light font-display">

        {/* LEFT SIDE */}
        <section className="relative hidden lg:flex lg:w-5/12 xl:w-1/2 bg-primary overflow-hidden items-center justify-center p-12">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 w-full max-w-lg space-y-8">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/30 text-sage">
                  <span className="material-symbols-outlined text-3xl">
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Success: Store Created
                  </p>
                  <p className="text-white/60 text-sm">
                    Your online boutique is live!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl ml-8 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-sage">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>

                <p className="text-white text-lg leading-relaxed italic">
                  "This platform transformed our retail operations in weeks.
                  Managing inventory has never been this intuitive."
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <div className="h-10 w-10 rounded-full bg-sage border-2 border-sage/50"></div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Sarah Jenkins
                    </p>
                    <p className="text-sage text-xs font-medium uppercase tracking-wider">
                      Top Seller • 5,000+ Sales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-primary bg-sage"></div>
                <div className="h-10 w-10 rounded-full border-2 border-primary bg-sage"></div>
                <div className="h-10 w-10 rounded-full border-2 border-primary bg-sage"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-sage text-primary text-xs font-bold">
                  +5k
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Join owners building the future of retail.
              </p>
            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex-1 flex flex-col bg-background-light">

          <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
            <div className="w-full max-w-[480px] space-y-8 font-sans">

              <div className="space-y-2">
                <h1 className="text-3xl font-black text-charcoal tracking-tight lg:text-4xl">
                  Get started for free
                </h1>
                <p className="text-gray-500 text-base">
                  No credit card required. Build your store in minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal ml-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal ml-1">
                    Create Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
                    placeholder="••••••••"
                  />
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal ml-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
                    placeholder="••••••••"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Create Your Store</span>
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-sm text-gray-400">or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="w-full border border-gray-200 py-3.5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  <span className="font-semibold text-charcoal">
                    Sign up with Google
                  </span>
                </button>

              </form>

              <p className="text-[12px] text-gray-400 text-center leading-relaxed">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy.
              </p>

              <p className="text-sm text-gray-500 text-center mt-6">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-primary font-semibold hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>

            </div>
          </div>

        </section>

      </main>

    </>
  );
};

export default Signup;
