// import { useState } from "react";

// function  Signup({ setPage }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Button clicked"); // 👈 add this


//     try {
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password
//         })
//       });

//       const data = await response.json();

//       console.log(data);

//       alert(data.message);

//       if (response.ok) {
//   localStorage.setItem("email", email);
//   setPage("otp"); // 🔥 redirect to OTP
// }

//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Signup</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import api from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/signup", formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full py-2 rounded font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;