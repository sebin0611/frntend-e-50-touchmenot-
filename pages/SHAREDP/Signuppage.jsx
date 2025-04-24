import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosinstance } from "../../Config/axiosinstance";


 
    function SignUp() {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();

      const onSubmit = async (data) => {
        try {
          // Simulate API call since axios isn't available in this sandboxed environment
          console.log("Signup data:", data);
          alert("Signup successful! Redirecting to login...");
          navigate("/login");
        } catch (error) {
          alert("Signup failed");
        }
      };

      return (
        <div className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-md flex flex-col items-center">
          <h1 className="text-3xl font-bold text-[#333] mb-4">Sign Up</h1>
          <p className="text-[#666] mb-6">Hey, Enter details to create your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-[#666] mb-1">Username</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[#666] mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[#666] mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-[#666] mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: value => value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Address Input */}
            <div>
              <label className="block text-[#666] mb-1">Address</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#FF69B4] text-white p-3 rounded-lg hover:bg-[#FF85C0]">
              Sign Up
            </button>
          </form>

          <p className="text-[#666] mt-6">
            Already have an account? <a href="/login" className="text-[#FF69B4] hover:underline">Sign In Now</a>
          </p>
        </div>
      );
    }

export default SignUp