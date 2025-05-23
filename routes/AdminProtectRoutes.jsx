import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { axiosinstance } from "../Config/axiosinstance";

function AdminProtectRoutes() {
  const [isUserAuth, setIsUserAuth] = useState(false); // Initial state as null to handle loading state
  const navigate = useNavigate();
  console.log(isUserAuth,"==isadmin")
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosinstance.get("/admin/checkadmin",{ withCredentials: true });
        console.log(response, "checkadmin response");
  
        if (response.status === 200) {
          setIsUserAuth(true);
        } else {
          setIsUserAuth(false);
          navigate("/login");
        }
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

export default AdminProtectRoutes;