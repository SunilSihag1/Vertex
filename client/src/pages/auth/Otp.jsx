import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../service/api";

function Otp() {

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(45);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // auto focus next box
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const finalOtp = otp.join("");

        try {

            if (!email) {
                navigate("/signup");
                return;
            }

            if (finalOtp.length !== 6) {
                alert("Please enter complete 6-digit OTP");
                return;
            }

            const res = await api.post("/otp/verify-otp", {
                email,
                otp: finalOtp,
                type: "email_verification"
            });

            navigate("/login");

        } catch (err) {
            alert(err.response?.data?.message || "Invalid OTP");
        }
    };

    useEffect(() => {

        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [timer]);

    const handleResendOtp = async () => {
        try {

            await api.post("/otp/resend-otp", {
                email,
                type: "email_verification"
            });

            alert("New OTP sent to your email");
            setTimer(45);   // reset timer

        } catch (err) {
            alert(err.response?.data?.message || "Failed to resend OTP");
        }
    };

    return (
        <main className="grow flex items-center justify-center px-6 py-12 relative z-10">
            <div className="w-full max-w-md bg-background-light dark:bg-primary/30 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-300 dark:border-slate-800 p-8 md:p-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-sage/60 text-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl font-light">verified_user</span>
                </div>

                <h2 className="text-2xl font-bold text-primary dark:text-sage mb-2">
                    Verify Your Identity
                </h2>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    We've sent a 6-digit code to your email{" "}
                    <span className="font-medium text-primary dark:text-sage">
                        ({email})
                    </span>. Please enter it below.
                </p>

                <form className="w-full space-y-8" onSubmit={handleSubmit}>

                    <div className="flex justify-between gap-2 md:gap-3">

                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                maxLength="1"
                                type="text"
                                className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-primary/50 rounded-lg bg-transparent focus:outline-none transition-all dark:border-sage/40"
                                placeholder="•"
                                autoFocus={index === 0}
                            />
                        ))}

                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            Resend code in <span className="font-semibold">{timer} sec</span>
                        </p>
                        <button
                            onClick={handleResendOtp}
                            disabled={timer > 0}
                            type="button"
                            className={`text-sm font-semibold transition-colors ${timer > 0
                                ? "text-primary/40 dark:text-sage/40 cursor-not-allowed"
                                : "text-primary dark:text-sage hover:underline cursor-pointer"
                                }`}
                        >
                            Resend Code
                        </button>
                    </div>

                    <div className="space-y-4">
                        <button
                            className="w-full shimmer-btn bg-primary text-white py-3.5 rounded-full  font-bold text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer border border-slate-200 dark:border-slate-700"
                            type="submit"
                        >
                            Verify & Proceed
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
}

export default Otp;