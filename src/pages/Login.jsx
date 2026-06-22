import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  // SAFETY CHECK (prevents "" is not a function error)
  const login = authContext?.login;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (typeof login !== "function") {
      toast.error("Login function not available (check AuthContext)");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      login(email);

      toast.success("Login Successful 🎉");

      navigate("/");

      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Box */}
      <div className="relative bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          ElectroMart
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome Back
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-xl mb-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl font-bold"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6">
          New Customer?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;