import React from "react";
import { useTruncateText } from "@/hooks/useTruncateText";

export default function TeamPopup({
  image,
  name,
  desc,
  inTitle,
  outTitle,
  position,
}) {
  return (
    <div className="md:flex  justify-between items-stretch gap-6 bg-[#D9D9D9]">
      <div className="w-full xl:w-[700px] bg-[#787878] overflow-hidden">
        <img src={image} className="mx-auto " />
      </div>
      <div className="w-full xl:w-3/5 p-12 flex justify-between flex-col">
        <div>
          <p className="font-moderat-medium text-xl lg:text-2xl">
            {name ? name : ""}
          </p>
          <p className="font-moderat-medium text-sm lg:text-base pt-2 md:pt-3">
            {position ? position : ""}
          </p>
        </div>
        <div className="space-y-4">
          <div className="font-moderat-bold text-xs lg:text-base uppercase pt-10">
            {inTitle}
          </div>
          <div className="font-moderat-light text-xs lg:text-base">
            {useTruncateText(desc, 140)}
          </div>
          <div className="font-moderat-bold text-xs lg:text-base uppercase">
            {outTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
