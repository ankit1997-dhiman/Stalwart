import React from "react";

export const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};
