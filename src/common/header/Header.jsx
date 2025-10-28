import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../navbar/StickyNavbar.jsx";
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";
import { nav1Paths } from "@/constants/menuLinks.js";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // 👈 new state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const { pathname } = location;
  console.log(isScrolled, "is scrolled");

  const showNav1 = nav1Paths.includes(pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // For both mobile and desktop
      setIsScrolled(currentScroll > 100);

      // Only desktop sticky logic
      if (!isMobile) {
        setIsSticky(currentScroll > 176);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="relative z-50">
      {/* Desktop Sticky Navbar */}
      <div
        className={`fixed top-0 left-0 w-full transform transition-transform duration-500 ease-in-out will-change-transform ${
          !isMobile
            ? isSticky
              ? "z-50 translate-y-0 opacity-100 backdrop-blur bg-white/60"
              : "z-0 -translate-y-full opacity-0 bg-transparent"
            : "hidden"
        } xl:block hidden`}
      >
        <StickyNavbar />
      </div>

      {/* Mobile or Default Navbar */}
      <div
        className={`transition-opacity duration-300 ${
          !isMobile && isSticky
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        } ${isMobile ? "fixed top-0 left-0 w-full z-50" : ""} ${
          isScrolled ? "shadow-md backdrop-blur bg-[#4F4C45]/80" : ""
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
