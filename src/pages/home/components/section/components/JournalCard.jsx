import React from "react";

const JournalCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border flex ">
      <div>
        <img src={image} alt={title} className="h-full w-[268px] object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-sm text-gray-600 pt-7.5">{description}</p>
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
