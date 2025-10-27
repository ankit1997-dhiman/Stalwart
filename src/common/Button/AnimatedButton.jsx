import React from "react";
import { Link } from "react-router-dom";

export const AnimatedButton = ({ to, buttonText, className }) => {
  return (
    <Link
      to={to}
      className={`hover:!bg-black  hover:!text-white border border-black transition-colors duration-800 group ${className}`}
    >
      <span className="">{buttonText}</span>
    </Link>
  );
};
