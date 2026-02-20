import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                alert("Login successful ✅");

                // 🔐 Token save
                localStorage.setItem("token", data.token);

                // Clear fields
                setEmail("");
                setPassword("");

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
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;
