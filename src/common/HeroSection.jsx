import React from "react";
import logo from "@/assets/images/Stalwart_Logo.png";

const HeroSection = ({ title, bgImage }) => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-contain bg-center bg-fixed px-12.5 xl:px-0 -mt-[86px]"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : "none", // Added quotes around the URL
        backgroundColor: "#000", // Fallback color while loading
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-5 lg:w-10" />
          </div>
          <div className="text-white uppercase font-monument text-sm lg:text-xl">
            {title ? title : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
