import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../navbar/StickyNavbar.jsx";
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";
import { nav1Paths } from "@/constants/menuLinks.js";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  // Define the paths where Nav1 should be shown

  const showNav1 = nav1Paths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="px-12.5 xl:px-0 ">
      {isSticky ? (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white xl:block hidden`}
        >
          <StickyNavbar />
        </div>
      ) : (
        <div className={`${showNav1 ? "" : "-mb-36"} bg-transparent  !z-50`}>
          {/* Normal Header */}
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Header;
