import React from "react";

const JournalCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border flex ">
      <div className="w-[45%]">
        <img src={image} alt={title} className="h-full  object-cover" />
      </div>
      <div className="p-4 w-[55%]">
        <h4 className="text-base font-medium md:text-lg mb-2 font-moderat-medium">
          {title}
        </h4>
        <p className="text-[10px] md:text-sm text-black pt-7.5 mb-2.5 font-moderat-light">
          {description}
        </p>
        <a href="#" className="!font-moderat-bold !text-xs  hover:underline">
          SEE MORE
        </a>
      </div>
    </div>
  );
};

export default JournalCard;
