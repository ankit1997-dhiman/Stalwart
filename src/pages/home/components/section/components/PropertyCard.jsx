import React from "react";

const PropertyCard = ({ image, title, subtitle, buttonText, onClick }) => {
  return (
    <>
      <div className="mx-auto rounded overflow-hidden pt-16.5">
        {/* Image */}
        <div className="w-full h-full overflow-hidden pb-18">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}

        <div className="flex items-center justify-center mt-2 ">
          <div className="w-4/5">
            <h2 className="text-xl font-bold  ">{title}</h2>
            <p className="w-3/5 text-gray-600 pt-10">{subtitle}</p>
          </div>
          <button
            onClick={onClick}
            className="w-[262px] bg-white text-black px-4 py-8.5 rounded ml-2 border border-black "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
