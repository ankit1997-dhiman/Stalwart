import React from "react";
import image from "../../../assets/images/work.png";

export default function WorkWithUs() {
  return (
    <section className="py-30 px-12.5 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch md:gap-60 gap-5">
        {/* Left Content */}
        <div className="md:w-4/6 flex flex-col justify-between items-stretch">
          <div>
            <h4 className="text-gray-700 text-sm uppercase mb-4 tracking-wide">
              Stalwart Careers
            </h4>
            <h2 className="text-3xl font-medium uppercase mb-6">
              Work With Us
            </h2>
          </div>
          <div className="block md:hidden py-8">
            <img
              src={image}
              alt="Work With Us"
              className="w-full h-auto object-cover "
            />
          </div>
          <div>
            <p className="text-gray-600 mb-8">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="inline-flex items-center text-black border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition font-medium">
              Apply Now <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-4/12">
          <img
            src={image}
            alt="Work With Us"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
