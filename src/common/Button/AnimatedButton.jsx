import React from "react";
import { Link } from "react-router-dom";

export const AnimatedButton = ({ to, buttonText, className }) => {
  return to ? (
    <Link
      to={to}
      className={`hover:!bg-black  hover:!text-white border border-black transition-colors duration-800 group ${className}`}
    >
      {buttonText}
    </Link>
  ) : (
    <div
      className={`hover:!bg-black  hover:!text-white border border-black transition-colors duration-800 group ${className}`}
    >
      {buttonText}
    </div>
  );
};
