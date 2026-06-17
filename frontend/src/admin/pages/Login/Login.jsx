import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../../../services/authApi";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data =
        await loginAdmin(
          formData.email,
          formData.password
        );

      localStorage.setItem(
        "adminToken",
        data.token
      );

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
          w-full
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          p-3
          rounded-lg
          transition
          "
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;