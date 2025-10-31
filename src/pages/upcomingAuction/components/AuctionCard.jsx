import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import DummyImage from "@/assets/images/dummy-image.jpg";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { magicText } from "@/constants/constants";
import { addToGoogleCalendar } from "@/utils/addToCalendar";

export default function AuctionCard({
  images,
  time,
  address,
  price,
  inspection,
  bed,
  bathrooms,
  carportSpaces,
  id,
}) {
  const sortedImages =
    Array.isArray(images) && images.length
      ? [...images].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [];
  console.log(time);

  const firstImage = sortedImages?.[0]?.url || DummyImage;

  return (
    <div className="container border-b border-black/60 group relative">
      <div className="p-12.5 flex lg:flex-row flex-col gap-8 lg:gap-0 items-stretch justify-between hover:bg-[#4F4C45] transition-colors duration-700 relative">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 flex lg:flex-row flex-col gap-8">
          {/* Mobile Info */}
          <div className="lg:hidden">
            <div className="font-moderat-bold text-sm group-hover:text-white uppercase">
              {address}
            </div>
            <div className="font-moderat-medium text-xs group-hover:text-white pt-2">
              {`${bed || 0} BED | ${bathrooms || 0} BATH | ${
                carportSpaces || 0
              } CAR`}
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={firstImage}
              className="w-full lg:w-[500px] lg:h-[300px] object-cover"
              alt="Property"
            />
          </div>

          {/* Desktop Info */}
          <div className="lg:flex flex-col justify-between hidden">
            <div>
              <div className="font-moderat-bold text-sm group-hover:text-white uppercase">
                {address}
              </div>
              <div className="font-moderat-medium text-xs pt-1 group-hover:text-white">
                {price}
              </div>
            </div>
            <div className="font-moderat-medium text-xs group-hover:text-white pt-2">
              {`${bed || 0} BED | ${bathrooms || 0} BATH | ${
                carportSpaces || 0
              } CAR`}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between items-start lg:items-end relative">
          <div className="relative">
            <div className="font-moderat-bold text-sm uppercase group-hover:text-white">
              {inspection ? "NEXT Inspection" : "AUCTION"}
            </div>
            {Array.isArray(time) &&
              time
                .filter((item) => {
                  const eventTime = moment.tz(item.start, "Australia/Brisbane");
                  const now = moment.tz("Australia/Brisbane");
                  return eventTime.isSameOrAfter(now); // ✅ show only future or current
                })
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-end gap-2 font-moderat-medium text-xs pt-1 group-hover:text-white text-right"
                  >
                    {moment
                      .tz(item.start, "Australia/Brisbane")
                      .format("DD MMM YYYY, h:mm A")}
                    <FaRegCalendar
                      className="cursor-pointer hover:text-[#E6D7B1] transition"
                      onClick={() =>
                        addToGoogleCalendar(item.start, item.finish)
                      }
                    />
                  </div>
                ))}
          </div>

          <Link to={`/property/${id}`}>
            <p className="border border-black px-8 py-3 text-sm font-moderat-regular group-hover:text-black group-hover:bg-white group-hover:border-white">
              {magicText.view_more_text}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
