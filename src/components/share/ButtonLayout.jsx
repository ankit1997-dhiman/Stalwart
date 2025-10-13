import React from "react";
import { Link } from "react-router-dom";

export const ButtonLayout = ({ shareLink, buttonText, logo }) => {
  return (
    <Link
      to={shareLink}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-400 block py-4 px-3 outline-0 border-b-0 hover:"
    >
      <div className="flex justify-between items-center">
        <div className="text-black">{buttonText}</div>
        <div className="text-black text-xl">{logo}</div>
      </div>
    </Link>
  );
};
