import React from "react";

const StickyButton = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="group fixed bottom-5 rounded-full shadow-lg hover:bg-black transition bg-white !text-black px-8 py-2 xl:py-6 xl:px-16 border-black border-2 uppercase z-[999] cursor-pointer"
    >
      <span className="group-hover:text-white uppercase text-xs">Register</span>
    </div>
  );
};

export default StickyButton;
