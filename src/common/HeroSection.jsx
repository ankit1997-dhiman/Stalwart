import React, { useEffect, useState } from "react";
import logo from "@/assets/images/Stalwart_Logo.png";
import { topMargin } from "@/constants/constants";

const HeroSection = ({ title, bgImage, bgImageMobile }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      console.log(`Device type: ${mobile ? "Mobile" : "Desktop"}`);
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose correct image based on device
  const selectedBg = isMobile ? bgImageMobile || bgImage : bgImage;

  return (
    <section
      className={`h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-12.5 xl:px-0 -mt-[${topMargin}px]`}
      style={{
        backgroundImage: selectedBg ? `url('${selectedBg}')` : "none",
        backgroundColor: "#000", // Fallback color
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-5 lg:w-10" />
          </div>
          <div className="text-white uppercase font-monument text-sm lg:text-xl">
            {title || ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
