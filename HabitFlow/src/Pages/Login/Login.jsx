import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../axios/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      if (response.data.success) {
        naviagte("/profile");
      }
    } catch (err) {
      if (!err.response) {
        alert("internal server error try after some time");
      }

      if (err.response.status === 400) {
        alert(err.response.data.message);
      }

      if (err.response.status === 401) {
        alert(err.response.data.message);
      }

      if (err.response.status === 404) {
        alert(err.response.data.message);
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative bg-white w-[320px] p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back 🌱
        </h2>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          New to Habit Flow?{" "}
          <Link to="/signup" className="text-green-600 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
