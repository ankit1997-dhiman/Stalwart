import React from "react";
import { aboutPageContent } from "@/constants/about/aboutPageContent";
import { S3_BASE_URL } from "@/config";

const OurPhilosophyAbout = () => {
  return (
    <section className="py-34 bg-white px-12.5 xl:px-0">
      <div className="container xl:flex gap-50 items-stretch justify-between">
        {/* Left Content */}
        <div className="flex flex-col justify-between xl:w-[845px] w-full">
          <div>
            <p className="text-xs lg:text-base uppercase tracking-widest text-black font-moderat-medium">
              {aboutPageContent.OUR_PHILOSOPY}
            </p>
            <p className="text-base md:text-2xl lg:text-[32px] font-medium uppercase font-moderat-medium pt-5.5 ">
              {aboutPageContent.OUR_PHILOSOPY_SUB_TITLE}
            </p>
          </div>
          <div className="block xl:hidden">
            <img
              src={`${S3_BASE_URL}/about-us.png`}
              alt="Scenic Property"
              className="w-full  object-cover py-12.5 h-[400px] md:h-[500px] lg:[600px]"
            />
          </div>
          <div className="xl:pt-42.5">
            <p className="text-gray-700 mb-6 font-moderat-regular pb-5">
              {aboutPageContent.OUR_PHILOSOPY_PARA_1}
            </p>

            <p className="text-gray-600 mb-4 font-moderat-regular pb-5">
              {aboutPageContent.OUR_PHILOSOPY_PARA_2}
            </p>

            <p className="text-gray-600 font-moderat-regular pb-5">
              {aboutPageContent.OUR_PHILOSOPY_PARA_3}
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="hidden xl:block bg-no-repeat bg-cover w-full lg:w-[600px] h-full lg:h-[600px]"
          style={{
            backgroundImage: `url(${S3_BASE_URL}/about-us.png)`, // use imported image
          }}
        ></div>
      </div>
    </section>
  );
};

export default OurPhilosophyAbout;
