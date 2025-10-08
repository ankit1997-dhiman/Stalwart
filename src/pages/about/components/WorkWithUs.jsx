import React from "react";
import image from "../../../assets/images/work.png";
import IconImage from "@/assets/icons/black-arrow-right.svg"
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";
import { Link } from "react-router-dom";

export default function WorkWithUs() {
  return (
    <section className="py-30 px-12.5 xl:px-0 bg-[#F4F2F0]">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch xl:gap-60 gap-5">
        {/* Left Content */}
        <div className="xl:w-4/6 flex flex-col justify-between items-stretch">
          <div>
            <p className="text-[10px] md:text-[10px] lg:text-sm uppercase tracking-wide font-moderat-medium">
              Stalwart Careers
            </p>
            <p className="text-xl lg:text-[32px] font-medium uppercase font-moderat-medium pt-5">
              Work With Us
            </p>
          </div>
          <div className="block xl:hidden py-8">
            <img
              src={image}
              alt="Work With Us"
              className="w-full object-cover h-[300px] md:h-[350px] lg:[350px] "
            />
          </div>
          <div>
            <p className="font-moderat-regular text-sm w-full lg:w-[845px]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              to="#"
              className="mt-6 lg:mt-7.5 inline-flex items-center font-semibold text-sm text-black"
            >
              <ButtonWithIcon
                text="APPLY NOW"
                iconPosition="right"
                iconImage={IconImage}
                className="border-none font-bold font-moderat uppercase"
              />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden xl:block md:w-4/12">
          <img
            src={image}
            alt="Work With Us"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
