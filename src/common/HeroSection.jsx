import React, { useEffect, useState } from "react";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { topSpace } from "@/constants/constants";
import { S3_BASE_URL } from "@/config";

const HeroSection = ({ title, bgImage, bgImageMobile }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const topMargin = useResponsiveMargin(topSpace, 0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
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
      className={`h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed px-12.5 xl:px-0 `}
      style={{
        backgroundImage: selectedBg ? `url('${selectedBg}')` : "none",
        backgroundColor: "#000", // Fallback color
        marginTop: `-${topMargin}px`,
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={`${S3_BASE_URL}/Stalwart_Logo.png`}
              alt="logo"
              className="w-5 lg:w-10"
            />
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
