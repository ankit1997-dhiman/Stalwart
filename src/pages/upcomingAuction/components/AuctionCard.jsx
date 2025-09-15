import { Button } from "antd";
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
    <div className="contanier border-b-2 border-black group">
      <div className="p-12.5 flex items-stretch justify-between hover:bg-[#4F4C45]">
        <div className="w-3/5 flex gap-8">
          <div>
            <img src={image} className="w-[500px]" />
          </div>
          <div className="flex items-stretch justify-between flex-col">
            <div>
              <div className="font-moderat-bold text-sm group-hover:text-white">
                {address}
              </div>
              <div className="font-moderat-medium text-xs pt-1 group-hover:text-white">
                {price}
              </div>
            </div>
            <div className="font-moderat-medium text-xs group-hover:text-white">
              {hoverAddress}
              <sup>2</sup>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-between items-end">
          <div>
            <div className="font-moderat-bold text-sm uppercase group-hover:text-white">
              {inspection ? "Inspection" : "AUCTION"}
            </div>
            <div className="flex items-center gap-2 font-moderat-medium text-xs pt-1 group-hover:text-white">
              08 Jul 2025 1:00 PM
              <span>
                <FaRegCalendar />
              </span>
            </div>
          </div>
          <div>
            <Link to="#" className="font-moderat-regular text-sm">
              <p className="border-black border px-8 py-3 group-hover:text-white group-hover:border-white">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
