import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout.jsx";
import ErrorPage from "../pages/SHAREDP/Errorpage.jsx";
import About from "../pages/USERP/About.jsx";
import Contact from "../pages/USERP/Contact.jsx";
import Home from "../pages/USERP/Home.jsx";
import Loginpage from "../pages/SHAREDP/Loginpage.jsx";
import SignUp from "../pages/SHAREDP/Signuppage.jsx";
import ProfilePage from "../pages/USERP/Profile";
import Profile from "../pages/USERP/Profile";
import Payment from "../pages/USERP/Payment.jsx";
import Cart from "../pages/USERP/Cart.jsx";
import ProductPage from "../pages/USERP/Product.jsx";
import Productdetails from "../pages/USERP/Productdetails.jsx";
import ProtectRoutes from "../routes/ProtectRoutes.jsx";
import Wishlist from "../pages/USERP/Wishlist.jsx";
import Adminlist from "../pages/USERP/Adminlist.jsx";
import AdminSignup from "../pages/USERP/Adminsignup.jsx";
import AdminLogin from "../pages/USERP/Adminlogin.jsx";

import Dashboard from "../pages/USERP/Dashboard.jsx";
import AdminProtectRoutes from "./AdminProtectRoutes.jsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Loginpage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "productpage",
        element: <ProductPage />,
      },
      {
        path: "productDetails/:id",
        element: <Productdetails />,
      },
      
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      


      {
        element: <AdminProtectRoutes />,
        children: [
          {
            path: "dashboardpage",
            element: < Dashboard/>,
          },
          {
            path: "adminsignup",
            element: <AdminSignup />,
          },
          


        ]},
      {
        element: <ProtectRoutes />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "adminlist",
            element: <Adminlist />,
          },
        ],
      },
    ],
  },
]);
