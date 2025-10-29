import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          to={`tel:${phone}`}
          className="font-moderat-regular text-sm lg:text-base cursor-pointer text-wrap"
        >
          {phone}
        </Link>
        <br></br>

        <Link
          to={`mailto:${email}`}
          className="font-moderat-regular text-sm lg:text-base cursor-pointer"
        >
          {email}
        </Link>
      </div>
    </div>
  );
};
