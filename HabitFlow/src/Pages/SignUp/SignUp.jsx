import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../axios/api";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await api.post("/user/register", {
        name: userName,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/");
      }
    } catch (err) {
      if (!err.response) {
        alert("Internal server error");
      }

      if (err.response.status === 400) {
        alert(err.response.data.message);
      }

      if (err.response.status === 500) {
        alert(err.response.data.message);
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549576490-b0b4831ef60a')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative bg-white w-[320px] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Start Your Journey 🌿
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
