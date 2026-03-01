import { useState } from "react";
import api from "../../service/api";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        

        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        try {
            const res = await api.post("/auth/login", {
                email,
                password
            });

            alert("Login successful ✅");

            localStorage.setItem("token", res.data.token);

            setEmail("");
            setPassword("");

        } catch (err) {
            console.log("ERROR OBJECT:", err);
            console.log("ERROR MESSAGE:", err.message);
            console.log("ERROR RESPONSE:", err.response);
            console.log("ERROR DATA:", err.response?.data);

            alert(err.response?.data?.message || err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const res = await api.post("/auth/google", {
                name: user.displayName,
                email: user.email,
                googleId: user.uid
            });

            localStorage.setItem("token", res.data.token);

            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Google Login Failed");
        }
    };


    return (
        <div className="h-screen w-full flex bg-background-light font-sans">

            {/* LEFT SIDE - Full Height */}
            <div className="hidden md:flex w-1/2 bg-primary relative overflow-hidden">

                {/* Decorative Blobs */}
                <div className="absolute -bottom-32 -left-32 size-80 bg-sage/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-32 -right-32 size-80 bg-sage/10 rounded-full blur-3xl"></div>

                {/* Center Content */}
                <div className="flex flex-col items-center justify-center text-center px-12 w-full">

                    <div className="size-20 rounded-full bg-sage/30 flex items-center justify-center text-white mb-6">
                        <span className="material-symbols-outlined text-5xl">
                            vitals
                        </span>
                    </div>

                    <h2 className="text-white text-3xl font-bold font-display mb-4">
                        Welcome Back
                    </h2>

                    <p className="text-sage text-base max-w-sm">
                        Your smart dashboard is ready for your next move.
                    </p>

                </div>

                {/* Bottom Text (Proper Bottom Placement) */}
                <p className="absolute bottom-8 left-10 text-xs text-sage/60 tracking-widest font-bold">
                    SMART RETAIL SAAS V2.4
                </p>

            </div>

            {/* RIGHT SIDE - Full Height */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-8 lg:px-20">

                <div className="w-full max-w-md">

                    <h2 className="text-4xl font-bold text-charcoal font-display mb-3">
                        Login
                    </h2>

                    <p className="text-charcoal/70 mb-10">
                        Log in to manage your smart store and view analytics.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* Email */}
                        <div>
                            <label className="text-sm font-semibold text-charcoal">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-4 py-3 bg-background-light rounded-[var(--radius-default)] ring-1 ring-charcoal/10 focus:ring-2 focus:ring-primary outline-none transition"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between text-sm font-semibold text-charcoal">
                                <label>Password</label>
                                <span className="text-primary cursor-pointer hover:underline">
                                    Forgot Password?
                                </span>
                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 px-4 py-3 bg-background-light rounded-[var(--radius-default)] ring-1 ring-charcoal/10 focus:ring-2 focus:ring-primary outline-none transition"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-primary text-white rounded-[var(--radius-lg)] font-semibold text-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition"
                        >
                            Log In
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-sm text-gray-400">or</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full border border-gray-200 py-3.5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            <span className="font-semibold text-charcoal">
                                Sign in with Google
                            </span>
                        </button>

                        <p className="text-center text-sm text-charcoal/60 mt-6">
                            Don’t have an account?{" "}
                            <span className="text-primary font-semibold cursor-pointer hover:underline">
                                Sign Up Now
                            </span>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;
