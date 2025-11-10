import React from "react";
import DummyImage from "@/assets/images/dummy-image.jpg";
import { Link } from "react-router-dom";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { Badge } from "antd";

export function Property({ property, soldTag = false, leaseTag = false }) {
  if (!property) return null;

  const {
    id,
    formattedAddress = "Address not available",
    images = [],
    listingDetails = {},
    advertisedPrice,
  } = property;

  const sortedImages = Array.isArray(images)
    ? [...images].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [];

  const firstImage = sortedImages[0]?.url || DummyImage;

  const bedrooms = listingDetails?.bedrooms || 0;
  const bathrooms = listingDetails?.bathrooms || 0;
  const totalCarSpaces =
    (listingDetails?.carportSpaces || 0) +
    (listingDetails?.garageSpaces || 0) +
    (listingDetails?.openCarSpaces || 0);

  return (
    <Link to={`/property/${id}`} className="block">
      <div className="relative border border-gray-300 rounded overflow-hidden group h-[300px] lg:h-[450px]">
        {/* 🏷️ Sold or Leased tag */}
        {(soldTag || leaseTag) && (
          <div className="absolute left-0 top-6 z-10 uppercase text-white text-xs font-moderat-bold flex items-center">
            {soldTag ? (
              <span className="bg-black px-3 py-1">Sold</span>
            ) : (
              <span className="bg-black px-3 py-1">Leased</span>
            )}
          </div>
        )}

        {/* 🖼️ Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500  "
          style={{ backgroundImage: `url(${firstImage})` }}
        />

        {/* 📍 Default Address */}
        <div className="absolute bottom-0 left-0 w-full p-5 text-xs font-moderat-bold uppercase text-gray-800 bg-white border-t transition-opacity duration-300 group-hover:opacity-0">
          {formattedAddress}
        </div>

        {/* 🧭 Hover Details */}
        <div className="absolute bottom-0 left-0 w-full p-5 text-xs text-gray-800 bg-white/90 backdrop-blur-md transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="font-moderat-bold uppercase">
                {formattedAddress}
              </div>
              <div className="font-moderat-medium text-xs pt-2">
                {`${bedrooms} BED | ${bathrooms} BATH | ${totalCarSpaces} CAR`}
              </div>
              {advertisedPrice && (
                <div className="py-2 text-xs font-moderat-medium uppercase">
                  {advertisedPrice.toLocaleString("en-AU")}
                </div>
              )}
            </div>
            <ViewMoreButton className="text-black px-4 py-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
