import React from "react";
import Team from "@/assets/images/TeamPop.png";
import { useTruncateText } from "@/hooks/useTruncateText";

export default function TeamPopup({ image, name }) {
  return (
    <div className="block xl:flex justify-between items-stretch gap-6 bg-[#D9D9D9]">
      <div
        className="w-full xl:w-2/5 h-full md:h-[450px] xl:h-auto  bg-[#d5b28f] overflow-hidden"
        // style={{ backgroundImage: `url(${Team})` }}
      >
        <img src={image} className="mx-auto "></img>
      </div>
      <div className="w-full xl:w-3/5 p-18 flex justify-between flex-col">
        <p className="font-moderat-medium text-xl lg:text-2xl">
          {name ? name : ""} | POSITION
        </p>
        <div className="mt-16 xl:mt-30 font-moderat-light text-xs lg:text-base">
          {useTruncateText(
            "Ut enim ad minim veniam,ext quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            70
          )}
        </div>
      </div>
    </div>
  );
}
