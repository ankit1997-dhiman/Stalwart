import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import React from "react";

const JournalCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white border flex flex-col lg:flex-row ">
      <div className="lg:w-[45%] w-full">
        <img
          src={image}
          alt={title}
          className="h-full object-cover lg:w-full  "
        />
      </div>
      <div className="p-4 lg:w-[55%]">
        <p className="text-base font-medium md:text-lg font-moderat-medium">
          {title}
        </p>
        <p className="text-[10px] md:text-xs text-black pt-8 font-moderat-light">
          {description}
        </p>
        <div className="mt-2.5">
          <LenisAnimatedLink
            to={link}
            className="font-moderat-bold text-xs origin-left hover:scale-x-[104%] duration-500"
          >
            SEE MORE
          </LenisAnimatedLink>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
