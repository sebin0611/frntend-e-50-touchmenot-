import React from "react";
import { useForm } from "react-hook-form";
import { axiosinstance } from "../../Config/axiosinstance";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosinstance.post("/admin/login", data, {
        withCredentials: true,
      });
      alert(response.data.message || "Login successful!");
      navigate("/dashboard"); // update based on your route
    } catch (error) {
        console.log(response.data,"dattaresponse")
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2b1055] via-[#3c1053] to-[#1e0033]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-lg p-10 w-full max-w-md text-white">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-5 rounded-full">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold mb-6">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Email ID</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none border border-white/30 focus:ring-2 focus:ring-pink-400"
              placeholder="admin@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none border border-white/30 focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-white/70">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-pink-500" />
              <span>Remember me</span>
            </label>
            <a href="/admin/forgot-password" className="hover:underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-md"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/70">
          Don’t have an account? <a href="/admin/signup" className="underline text-pink-300">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
