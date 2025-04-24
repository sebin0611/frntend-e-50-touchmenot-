import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosinstance } from "../../Config/axiosinstance";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("All fields are required");
      return;
    }

    try {
      const response = await axiosinstance.post(
       `/user/login`,
        { email, password },
        { withCredentials: true }
      );
console.log(response.data,"rdddddddddddddddddd")
      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center w-full max-w-3xl">
        <div className="flex justify-center mb-6 md:mb-0 md:mr-10">
          <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A11.955 11.955 0 0112 15c2.486 0 4.779.755 6.879 2.043M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Member Login</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMsg && (
            <p className="text-red-600 mb-2 text-sm">{errorMsg}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
          >
            LOGIN
          </button>
          <div className="text-center mt-4 text-sm text-blue-600">
            <a href="#" className="hover:underline">
              Forgot Username / Password?
            </a>
            <br />
            <a href="#" className="hover:underline mt-1 inline-block">
              Create your Account →
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
