import React from "react";

const StickyButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-10 rounded-full shadow-lg hover:bg-blue-700 transition !bg-white !text-black px-8 py-2 xl:py-6 xl:px-16 border-black border-2 uppercase z-50"
    >
      <span className="uppercase text-xs">Register</span>
    </button>
  );
};

export default StickyButton;
