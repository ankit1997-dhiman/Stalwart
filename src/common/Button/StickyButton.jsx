import React from "react";

const StickyButton = ({handleClick}) => {
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-10  left-[45%] bg-blue-600  px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition !bg-white !text-black py-6 px-16 border-black border-2 uppercase"
    >
      <span className="uppercase">Register</span>
    </button>
  );
};

export default StickyButton;
