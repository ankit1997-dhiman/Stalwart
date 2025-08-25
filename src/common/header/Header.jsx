import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../navbar/StickyNavbar.jsx";
import Navbar from "./Navbar.jsx";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    <div className="px-12.5 md:px-0">
      {isSticky ? (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white md:block hidden`}
        >
          <StickyNavbar />
        </div>
      ) : (
        <div className="bg-transparent -mb-36">
          {/* Normal Header */}
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Header;
