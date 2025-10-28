import React from "react";

const StickyButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 rounded-full shadow-lg hover:bg-bblack transition bg-white !text-black px-8 py-2 xl:py-6 xl:px-16 border-black border-2 uppercase z-[999]"
    >
      <span className="uppercase text-xs">Register</span>
    </button>
  );
};

export default StickyButton;
