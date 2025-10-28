import React from "react";

export const AgentCard = ({
  name = "AGENT NAME",
  phone = "000 000 000",
  image,
}) => {
  return (
    <div className="flex gap-8">
      <img src={image} className="lg:w-full h-[250px] object-contain" />
      <div className="">
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
