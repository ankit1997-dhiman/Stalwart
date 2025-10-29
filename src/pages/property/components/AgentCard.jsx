import React from "react";

export const AgentCard = ({
  name = "AGENT NAME",
  phone = "000 000 000",
  image,
  email,
}) => {
  return (
    <div className="flex items-start gap-4 overflow-hidden">
      <img
        src={image}
        className="w-[150px] lg:w-[170px]  lg:object-cover !object-contain"
      />
      <div className="w-full">
        <p className="pb-5 font-moderat-bold text-sm lg:text-base uppercase">
          {name}
        </p>
        <a
          href={`tel:${phone}`}
          className="font-moderat-regular text-sm lg:text-base cursor-pointer text-wrap"
        >
          {phone}
        </a>
        <br></br>

        <a
          href={`mailto:${email}`}
          className="font-moderat-regular text-sm lg:text-base cursor-pointer"
        >
          {email}
        </a>
      </div>
    </div>
  );
};
