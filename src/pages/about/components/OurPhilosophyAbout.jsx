import React from "react";
import image from "../../../assets/images/about-us.png";

const OurPhilosophyAbout = () => {
  return (
    <div>
      <section className="container py-32 bg-white px-12.5 md:px-0">
        <div className="grid md:grid-cols-2  items-stretch justify-between ">
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-black md:mb-5 mb-5.5 font-moderat">
                Our Philosophy
              </p>
              <h2 className="text-base md:text-4xl font-medium uppercase font-moderat">
                Attention to Detail Paired with the Finest Craftsmanship and
                Quality.
              </h2>
            </div>
            <div className="block md:hidden">
              <img
                src={image}
                alt="Scenic Property"
                className="w-full h-auto object-cover py-12.5"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                At Stalwart Real Estate, we help clients maximise the value of
                their property assets with minimal stress, delivering
                exceptional results through expert negotiation and thoughtful,
                strategic marketing.
              </p>

              <p className="text-gray-600 mb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <p className="text-gray-600">
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
          <div className="hidden md:block">
            <img
              src={image}
              alt="Scenic Property"
              className="w-full h-auto object-cover rounded pl-60"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPhilosophyAbout;
