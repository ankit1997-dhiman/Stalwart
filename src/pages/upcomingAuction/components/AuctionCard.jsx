import React from "react";
import moment from "moment";
import { FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuctionCard({
  image,
  time,
  address,
  price,
  inspection,
  bed,
  bathrooms,
  carportSpaces,
  id,
}) {
  return (
    <div className="contanier border-b border-black/60 group">
      <div className="p-12.5 flex lg:flex-row flex-col gap-8 lg:gap-0 items-stretch justify-between hover:bg-[#4F4C45] transition-colors duration-900">
        <div className="w-full lg:w-3/5 flex  lg:flex-row flex-col gap-8">
          <div className="lg:hidden">
            <div className="font-moderat-bold text-sm group-hover:text-white uppercase">
              {address}
            </div>
            <div className="font-moderat-medium text-xs group-hover:text-white pt-2">
              {`${bed ? bed : 0} BED | ${bathrooms ? bathrooms : 0} BATH | ${
                carportSpaces ? carportSpaces : 0
              } CAR `}
            </div>
          </div>
          <div>
            <img src={image} className="w-full lg:w-[500px]" />
          </div>
          <div className="lg:flex items-stretch justify-between flex-col hidden ">
            <div>
              <div className="font-moderat-bold text-sm group-hover:text-white uppercase">
                {address}
              </div>
              <div className="font-moderat-medium text-xs pt-1 group-hover:text-white">
                {price}
              </div>
            </div>
            <div className="font-moderat-medium text-xs group-hover:text-white pt-2">
              {`${bed ? bed : 0} BED | ${bathrooms ? bathrooms : 0} BATH | ${
                carportSpaces ? carportSpaces : 0
              } CAR `}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-8 lg:gap-0 justify-between items-stretch lg:items-end">
          <div>
            <div className="font-moderat-bold text-sm uppercase group-hover:text-white ">
              {inspection ? "NEXT Inspection" : "AUCTION"}
            </div>
            <div className="flex items-center gap-2 font-moderat-medium text-xs pt-1 group-hover:text-white">
              {moment(time).format("DD MMM YYYY, h:mm A")}
              <span>
                <FaRegCalendar />
              </span>
            </div>
          </div>
          <div>
            <Link
              to={`/property/${id}`}
              className="font-moderat-regular text-sm"
            >
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
