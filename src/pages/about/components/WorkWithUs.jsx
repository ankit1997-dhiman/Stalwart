import React from "react";
import image from "../../../assets/images/work.png";
import { CgArrowLongRight } from "react-icons/cg";

export default function WorkWithUs() {
  return (
    <section className="py-30 px-12.5 xl:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch xl:gap-60 gap-5">
        {/* Left Content */}
        <div className="xl:w-4/6 flex flex-col justify-between items-stretch">
          <div>
            <p className="text-[10px] md:text-[10px] xl:text-sm uppercase mb-4 tracking-wide font-moderat-medium pb-2.5 md:pb-5">
              Stalwart Careers
            </p>
            <p className="text-xl xl:text-3xl font-medium uppercase mb-6 font-moderat-medium pb-2.5 md:pb-5">
              Work With Us
            </p >
          </div>
          <div className="block xl:hidden py-8">
            <img
              src={image}
              alt="Work With Us"
              className="w-full object-cover h-[300px] md:h-[350px] lg:[350px] "
            />
          </div>
          <div>
            <p className="mb-8 font-moderat-regular text-sm pb-2.5 md:pb-5">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a className="flex transition py-7.5 md:py-0 font-moderat-bold uppercase text-sm">
              Apply Now
              <span className="pl-3">
                <CgArrowLongRight className="text-xl " />
              </span>
            </a>
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
