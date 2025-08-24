import React from "react";
import logo from "../../../assets/images/Stalwart_Logo.png";
import bgImage from "../../../assets/images/bg-image.png"; // import background

const HeroSection = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center px-12.5 md:px-0"
      style={{
        backgroundImage: `url(${bgImage})`, // use imported image
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="text-white uppercase">ABOUT US</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
