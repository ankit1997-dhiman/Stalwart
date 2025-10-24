import React from "react";
import image from "../../../assets/images/about-us.png";
import bgImage from "../../../assets/images/about-us.png"; // import background

const OurPhilosophyAbout = () => {
  return (
      <section className="py-34 bg-white  px-12.5 xl:px-0">
        <div className="container flex gap-50 items-stretch justify-between">
          {/* Left Content */}
          <div className="flex flex-col justify-between lg:w-[845px] w-full">
            <div>
              <p className="text-xs lg:text-base uppercase tracking-widest text-black font-moderat-medium">
                Our Philosophy
              </p>
              <p className="text-base md:text-2xl lg:text-[32px] font-medium uppercase font-moderat-medium pt-5.5 ">
                Attention to detail combined with the finest craftsmanship and quality. 
              </p>
            </div>
            <div className="block xl:hidden">
              <img
                src={image}
                alt="Scenic Property"
                className="w-full  object-cover py-12.5 h-[400px] md:h-[500px] lg:[600px]"
              />
            </div>
            <div className="lg:pt-42.5">
              <p className="text-gray-700 mb-6 font-moderat-regular pb-5">
                At Stalwart Real Estate, we help clients maximise the value of
                their property assets with minimal stress, delivering
                exceptional results through expert negotiation and thoughtful,
                strategic marketing.
              </p>

              <p className="text-gray-600 mb-4 font-moderat-regular pb-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <p className="text-gray-600 font-moderat-regular pb-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="hidden lg:block bg-no-repeat bg-cover w-full lg:w-[600px] h-full lg:h-[600px]"
            style={{
              backgroundImage: `url(${bgImage})`, // use imported image
            }}
          >
            
          </div>
        </div>
      </section>
  );
};

export default OurPhilosophyAbout;
