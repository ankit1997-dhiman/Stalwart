import React from "react";
import top from "@/assets/videos/top.png";
import bottom from "@/assets/videos/bottom.png";

export const HoverSection = () => {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <img src={top} />
      </div>
      <div className="absolute bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bottom-0 right-18">
        <img src={bottom} />
      </div>
    </>
  );
};
