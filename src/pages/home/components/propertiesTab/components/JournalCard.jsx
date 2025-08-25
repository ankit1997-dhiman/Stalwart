import React from "react";

const JournalCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border flex ">
      <div className="w-[45%]">
        <img src={image} alt={title} className="h-full  object-cover" />
      </div>
      <div className="p-4 w-[55%]">
        <h4 className="text-base font-medium md:text-lg mb-2">{title}</h4>
        <p className="text-[10px] md:text-sm text-black pt-7.5">
          {description}
        </p>
        <a
          href="#"
          className="text-sm mt-4 inline-block font-medium hover:underline"
        >
          SEE MORE
        </a>
      </div>
    </div>
  );
};

export default JournalCard;
