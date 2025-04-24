import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "rounded-full px-4 py-2 text-sm font-semibold transition duration-200";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
