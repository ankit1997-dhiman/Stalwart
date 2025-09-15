import React from "react";
import Logo from "@/assets/images/header-black-logo.png";

export const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
      {/* Loader Animation */}
      {/* <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div> [animation-duration:5s] animate-pulse animate-spin animate-bounce */}

      {/* <img
        src={Logo}
        alt="Logo"
        className="animate-ping [animation-duration:5s] "
      /> */}

      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};
