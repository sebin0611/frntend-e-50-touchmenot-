import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosinstance } from "../../Config/axiosinstance";
import DarkMode from "../../components/SHARED/Darkmode";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosinstance.get("/user/profile");
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to fetch user profile");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await  axiosinstance.get("/user/logout");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          TOUCH ME NOT
        </Link>
      </div>

      <DarkMode />

      <div className="flex-none ml-4">
        {/* Cart Icon */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={user?.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt9UpcsobJNOGFHPeBt-88iRmqjflBnIjhw&s"}
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Header;