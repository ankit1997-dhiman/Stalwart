import React from "react";

const PropertyCard = ({ image, title, subtitle, buttonText, onClick }) => {
  return (
    <>
      <div className="mx-auto rounded overflow-hidden pt-16.5">
        {/* Image */}
        <div className="w-full h-full overflow-hidden md:pb-18">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}

        <div className="flex xl:flex-row flex-col items-start justify-center mt-5 md:mt-2  px-12.5 xl:px-0">
          <div className="w-full xl:w-4/5">
            <h2 className="text-base md:text-2xl font-medium font-moderat-medium">
              {title}
            </h2>
            <p className="w-full xl:w-3/5 text-black text-xs font-normal py-9 sm:py-6 xl:pt-10 font-moderat">
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
