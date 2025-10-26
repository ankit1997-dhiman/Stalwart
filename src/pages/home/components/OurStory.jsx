import React from "react";
import logo from "../../../assets/images/Stalwart_Logo.png";
import bgImage from "../../../assets/images/our-story-bg-image.png";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { URLS } from "@/constants/Urls";

const Section7 = () => {
  return (
    <section
      className="relative w-full h-[364px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay (optional, for darker text visibility) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* Icon (replace with your svg/image if needed) */}
        <div className="flex justify-center">
          <img src={logo} alt="logo" />
        </div>

        {/* Title */}
        <p className="text-2xl lg:text-3xl tracking-wide pt-10 font-miller-light">
          Nostra Fabula
        </p>

        {/* Subtitle */}
        <div className="flex justify-center items-center">
          <LenisAnimatedLink
            to={URLS.ABOUT}
            className="text-[10px] lg:text-xs pt-2.5 font-normal uppercase tracking-widest font-monument text-center origin-bottom hover:scale-x-[106P%] duration-500 !block w-full"
          >
            Our Story
          </LenisAnimatedLink>
        </div>
      </div>
    </section>
  );
};

export default Section7;
