import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../navbar/StickyNavbar.jsx";
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";
import { nav1Paths } from "@/constants/menuLinks.js";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const showNav1 = nav1Paths.includes(pathname);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 10 && currentScroll > lastScrollY) {
        setIsSticky(true);
      } else if (currentScroll < lastScrollY - 5) {
        setIsSticky(false);
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-12.5 xl:px-0 relative z-50">
      {/* Always render both navbars, just animate visibility */}
      {/* <div
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out will-change-transform ${
          isSticky ? "translate-y-0 opacity-100 bg-white shadow-md" : "-translate-y-full opacity-0 bg-transparent"
        } xl:block hidden`}
      > */}
      <div
        className={`fixed top-0 left-0 w-full transform transition-transform duration-500 ease-in-out will-change-transform ${
          isSticky
            ? "z-50 translate-y-0 opacity-100 bg-white"
            : "z-0 -translate-y-full opacity-0 bg-transparent"
        } xl:block hidden`}
      >
        <StickyNavbar />
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
