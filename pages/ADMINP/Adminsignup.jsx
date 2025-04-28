import React from "react";
import { useForm } from "react-hook-form";
import { axiosinstance } from "../../Config/axiosinstance";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosinstance.post("/api/admin/signup", data, {
        withCredentials: true,
      });
      alert(response.data.message || "Signup successful!");
      navigate("/admin/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Image/Quote */}
      <div
        className="w-1/2 bg-cover bg-center relative hidden md:block"
        style={{ backgroundImage: "url('/images/leaf-eye.jpg')" }} // Replace with your actual image path
      >
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center px-4">
            It’s time to boost your <br /> creativity
          </h1>
        </div>
      </div>

      {/* Right Side Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#eaf1eb] relative">
        <div className="w-full max-w-md p-8 bg-white/30 backdrop-blur-md rounded-xl shadow-xl text-gray-800">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Sign up</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("username", { required: "Full name is required" })}
              placeholder="Full name"
              className="w-full px-4 py-2 rounded-md bg-white/50 placeholder-gray-600 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
            />
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/50 placeholder-gray-600 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
            />
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-white/50 placeholder-gray-600 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
            />
            <input
              {...register("confirmpassword", {
                required: "Confirm your password",
                validate: (val) => val === watch("password") || "Passwords do not match"
              })}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md bg-white/50 placeholder-gray-600 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all"
            >
              Create account
            </button>

            <p className="text-center text-sm mt-4 text-gray-600">or sign up with</p>

            <div className="flex justify-center space-x-4 mt-2">
              <button type="button" className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
              </button>
              <button type="button" className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </button>
              <button type="button" className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-6 text-center text-sm">
              Already a member?{" "}
              <a href="/admin/login" className="text-green-600 font-medium hover:underline">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
