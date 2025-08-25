import React from "react";
import logo from "@/assets/images/Stalwart_Logo.png";

const HeroSection = ({ title, bgImage }) => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed px-12.5 md:px-0"
      style={{
        backgroundImage: `url(${bgImage})`, // use imported image
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-10" />
          </div>
          <div className="text-white uppercase font-monument text-xl">
            {title ? title : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
