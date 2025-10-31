import { magicText } from "@/constants/constants";
import React from "react";

export const ViewMoreButton = ({ className }) => {
  return (
    <div
      className={`${className} cursor-pointer text-black hover:bg-black  hover:text-white duration-800 transition-colors border-black border `}
    >
      {magicText.view_more_text}
    </div>
  );
};
