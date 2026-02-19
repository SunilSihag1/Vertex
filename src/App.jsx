import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import OTP from "./Otp";

function App() {
  const [page, setPage] = useState("signup"); // signup | login | otp

  return (
    <div>

      {/* Page rendering */}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "login" && <Login />}
      {page === "otp" && <OTP setPage={setPage} />}

      {/* Toggle only for signup/login */}
      {page !== "otp" && (
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          {page === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setPage(page === "login" ? "signup" : "login")
            }
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px"
            }}
          >
            {page === "login" ? "Signup" : "Login"}
          </span>
        </p>
      )}

    </div>
  );
}

export default App;
