import React, { useEffect, useState } from "react";
import { axiosinstance } from "../../Config/axiosinstance";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get("/user/profile");
        setUser(response.data.data);
      } catch (err) {
        setError("Failed to load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await  axiosinstance.get("/user/logout");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading profile...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="card bg-base-100 shadow-xl p-6 w-96">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />
        <h1 className="text-2xl font-bold text-center">{user.username}</h1>
        <p className="text-center text-gray-500">{user.email}</p>
        <p className="text-center text-gray-500">{user.address}</p>

        <button
          onClick={handleLogout}
          className="btn btn-error mt-4 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
