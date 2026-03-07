import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.type === "email" ? "email" : "password"]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await api.post("/auth/login", {
                email: formData.email,
                password: formData.password
            });
            

            // store tokens
            localStorage.setItem("accessToken", res.data.accessToken);

            navigate("/");

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

    // Google Login
    const handleGoogleLogin = async () => {
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
            alert("Google Login Failed");
        }
    };

    return (
        <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                {/* LEFT SIDE SAME AS STITCH */}

                <div className="md:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Login</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                Log in to manage your smart store and view analytics.
                            </p>
                        </div>

                        {/* ✅ ONLY ADDED onSubmit */}
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-900 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                        type="email"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Password
                                </label>
                                <div className="relative group">
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-12 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-lg ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all outline-none text-slate-900 dark:text-white"
                                        placeholder="••••••••"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>

                            <button
                                className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>

                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="w-full py-3.5 flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                            >
                                Google Account
                            </button>

                        </form>

                        <p className="mt-10 text-center text-sm text-slate-500">
                            Don't have an account?
                            <a className="text-primary font-bold hover:underline" href="/signup">
                                Sign Up Now
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Login;