import React from "react";

const PropertyCard = ({ image, title, subtitle, buttonText, onClick }) => {
  return (
    <>
      <div className="mx-auto rounded overflow-hidden">
        {/* Image */}
        <div className="w-full h-[400px] lg:h-[900px]  overflow-hidden ">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}

        <div className="flex xl:flex-row flex-col items-start justify-between w-full pt-12.5 lg:pt-[72px] px-12.5 lg:px-0 gap-9">
          <div className="w-full xl:w-4/5">
            <p className="text-base md:text-2xl font-medium font-moderat-medium uppercase">
              {title}
            </p>
            <p className="w-full xl:w-3/5 text-black text-xs font-normal font-moderat pt-10">
              {subtitle}
            </p>
          </div>
          <button
            onClick={onClick}
            className="w-[262px] bg-white text-black px-4 py-3 xl:py-8.5 rounded-none xl:ml-2 border border-black"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
