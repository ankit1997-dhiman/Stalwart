import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuctionCard({
  image,
  hoverAddress,
  address,
  price,
  inspection,
}) {
  return (
    <div className="contanier border-b-2 border-black">
      <div className="p-12.5 flex items-stretch justify-between">
        <div className="w-3/5 flex gap-8">
          <div>
            <img src={image} className="w-[500px]" />
          </div>
          <div className="flex items-stretch justify-between flex-col">
            <div>
              <div className="font-moderat-bold text-sm">{address}</div>
              <div className="font-moderat-medium text-xs pt-1">{price}</div>
            </div>
            <div className="font-moderat-medium text-xs">
              {hoverAddress}
              <sup>2</sup>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-between items-end">
          <div>
            <div className="font-moderat-bold text-sm uppercase">
              {inspection ? "Inspection" : "AUCTION"}
            </div>
            <div className="flex items-center gap-2 font-moderat-medium text-xs pt-1">
              08 Jul 2025 1:00 PM
              <span>
                <FaRegCalendar />
              </span>
            </div>
          </div>
          <div>
            <Link
              to="#"
              className="border px-8 py-3 font-moderat-regular text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
