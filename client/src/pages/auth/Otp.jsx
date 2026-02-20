import { useState } from "react";

function OTP({ setPage }) {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!email || !otp) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    otp
                })
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                alert("Account verified ✅");

                // Optional: redirect to login
                // window.location.href = "/login";

            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log("Error:", error);
            alert("Something went wrong ❌");
        }
    };

    return (
        <div className="container">
            <h2>Verify OTP</h2>

            <form onSubmit={handleVerify}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />

                <button type="submit">Verify</button>

            </form>
        </div>
    );
}

export default OTP;
