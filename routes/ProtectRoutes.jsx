import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { axiosinstance } from "../Config/axiosinstance";

function ProtectRoutes() {
  const [isUserAuth, setIsUserAuth] = useState(null); // Initial state as null to handle loading state
  const navigate = useNavigate();
  console.log(isUserAuth,"==isuser")

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosinstance.get("/user/checkuser"); // Calls your `/checkuser` route
        setIsUserAuth(true);
      } catch (error) {
        setIsUserAuth(false);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isUserAuth === null) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  return isUserAuth ? <Outlet /> : null;
}

export default ProtectRoutes;