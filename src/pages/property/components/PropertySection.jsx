import React from "react";

export const PropertySection = ({
  image,
  address,
  listingDetails,
  buttonText,
  onClick,
}) => {
  const sortedImages =
    Array.isArray(image) && image.length
      ? [...image].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [];

  // ✅ Get first image or fallback to dummy image
  const firstImage = sortedImages?.[0]?.url || DummyImage;

  return (
    <>
      <div className="mx-auto rounded overflow-hidden flex flex-col-reverse lg:flex-col gap-12">
        {/* Content */}
        <div className="flex flex-wrap  items-start justify-between lg:px-12.5 xl:px-0 w-full px-12.5">
          <div className="w-full xl:w-4/5">
            {address && (
              <p className="text-base md:text-2xl font-medium font-moderat-medium uppercase">
                {address}
              </p>
            )}
            <div className="font-moderat-medium text-sm pt-5">
              {`${
                listingDetails.bedrooms ? listingDetails.bedrooms : 0
              } BED | ${
                listingDetails.bathrooms ? listingDetails.bathrooms : 0
              } BATH | ${
                listingDetails.garageSpaces ? listingDetails.garageSpaces : 0
              } CAR `}
            </div>
          </div>
          {buttonText && (
            <div className="hidden lg:block">
              <button
                onClick={onClick}
                className="bg-white text-center h-[70px] border-black my-auto"
              >
                <p className=" w-full lg:w-[262px] lg:py-5 text-black border font-moderat-regular text-base uppercase">
                  {buttonText}
                </p>
              </button>
            </div>
          )}
        </div>
        {/* Image */}
        <div className="w-full h-[900px]  overflow-hidden ">
          <img
            src={firstImage}
            alt={address}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
