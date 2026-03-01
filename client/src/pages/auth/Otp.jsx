import { useState } from "react";
import api from "../../service/api";
import { useLocation, useNavigate } from "react-router-dom";

function Otp() {

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {
            alert("Enter complete OTP");
            return;
        }

        try {
            const res = await api.post("/auth/verify-otp", {
                email,
                otp: enteredOtp
            });

            alert(res.data.message);

            navigate("/login");

        } catch (err) {
            alert(err.response?.data?.message || "OTP verification failed");
        }
    };

    return (
        <main className="min-h-screen w-full bg-background-light font-display flex items-center justify-center relative overflow-hidden px-6">

            {/* Decorative Orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-sage rounded-full blur-[80px] opacity-15 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary rounded-full blur-[80px] opacity-15 pointer-events-none"></div>

            {/* OTP Card */}
            <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-sage/20 p-8 md:p-10 flex flex-col items-center text-center font-sans">

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl font-light">
                        verified_user
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                    Verify Your Identity
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    We've sent a 6-digit code to your email.
                    Please enter it below.
                </p>

                {/* OTP Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-8">

                    {/* OTP Inputs */}
                    <div className="flex justify-between gap-2 md:gap-3">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                id={`otp-${index}`}
                                maxLength="1"
                                value={otp[index]}
                                onChange={(e) => handleChange(e.target.value, index)}
                                className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-sage/40 rounded-lg bg-transparent focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                                placeholder="•"
                            />
                        ))}
                    </div>

                    {/* Timer */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                                schedule
                            </span>
                            Resend code in <span className="font-semibold">00:45</span>
                        </p>

                        <button
                            type="button"
                            disabled
                            className="text-sm font-semibold text-gray-300 cursor-not-allowed"
                        >
                            Resend Code
                        </button>
                    </div>

                    {/* Button */}
                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:opacity-95 transition-all shadow-lg shadow-primary/10 active:scale-[0.98]"
                        >
                            Verify & Proceed
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-base">
                                arrow_back
                            </span>
                            Back to Login
                        </button>
                    </div>

                </form>

            </div>

        </main>
    );
}

export default Otp;