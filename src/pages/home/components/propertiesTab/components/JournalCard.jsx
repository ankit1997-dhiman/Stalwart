import React from "react";
import { Link } from "react-router-dom";

const JournalCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border flex ">
      <div className="w-[45%]">
        <img src={image} alt={title} className="h-full object-cover" />
      </div>
      <div className="p-4 w-[55%]">
        <p className="text-base font-medium md:text-lg font-moderat-medium">
          {title}
        </p>
        <p className="text-[10px] md:text-xs text-black pt-8 font-moderat-light">
          {description}
        </p>
        <div className="mt-2.5">
          <Link to="#" className="font-moderat-bold text-xs ">
            SEE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
