import React from "react";
import Team from "@/assets/images/TeamPop.png";
import { useTruncateText } from "@/hooks/useTruncateText";

export default function TeamPopup({
  image,
  name,
  desc,
  inTitle,
  outTitle,
  position,
}) {
  console.log(position, inTitle, "dkjasldkj");
  return (
    <div className=" flex flex-wrap justify-between items-stretch gap-6 bg-[#D9D9D9]">
      <div
        className="w-full xl:w-2/5 h-full  xl:h-auto  bg-[#d5b28f] overflow-hidden"
        // style={{ backgroundImage: `url(${Team})` }}
      >
        <img src={image} className="mx-auto "></img>
      </div>
      <div className="w-full xl:w-3/5 p-12 flex justify-between flex-col">
        <p className="font-moderat-medium text-xl lg:text-2xl">
          {name ? name : ""} | {position}
        </p>
        <div className="space-y-4">
          <div className="font-moderat-bold text-xs lg:text-base uppercase">
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
