import React from "react";

export const AgentCard = ({
  name = "AGENT NAME",
  phone = "000 000 000",
  image,
}) => {
  return (
    <div className="flex gap-8">
      <img src={image} className="w-[150px] lg:w-full h-full lg:h-[286px]" />
      <div className="w-full">
        <p className="pb-5 font-moderat-bold text-sm lg:text-base uppercase">
          {name}
        </p>
        <a
          href={`to:${phone}`}
          className="font-moderat-regular text-sm lg:text-base"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};
