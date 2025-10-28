import React from "react";
import image from "../../../assets/images/work.png";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { URLS } from "@/constants/Urls";
import { BlackArrow } from "@/assets/icons/BlackArrow";

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
              At Stalwart Real Estate, we are building a culture defined by
              discipline, collaboration and genuine care. Our people share a
              commitment to excellence in service, presentation and negotiation
              and take pride in the details that set our work apart.
            </p>
            <p className="font-moderat-regular text-sm w-full lg:w-[845px] pt-2">
              We look for individuals who value integrity, precision and
              continuous growth. Whether in sales, property management or
              support, every role at Stalwart contributes to the same purpose:
              elevating the experience of real estate for every client we
              represent.
            </p>

            <LenisAnimatedLink
              to={URLS.CAREERS}
              iconPosition="right"
              icon={<BlackArrow />}
              className="mt-6 lg:mt-7.5 inline-flex items-center font-semibold text-sm text-black"
            >
              APPLY NOW
            </LenisAnimatedLink>
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
