import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls.js";
import logoBlack from "@/assets/images/black-logo.png";
import { menuItems } from "@/constants/menuLinks";
import GoogleTranslate from "@/pages/GoogleTranslate";

export const StickyNavbar = () => {
  return (
    <div className="container justify-between items-center xl:flex hidden">
      <div>
        <Link to={URLS.HOME}>
          <img src={logoBlack} alt="logo" className="w-6 h-3" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-x-20 py-6.5 !m-0">
          {menuItems.map((item, index) => (
            <li key={index} className="text-xs font-monument hover:underline">
              {item.link ? (
                <Link to={item.link} className="text-xs">
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </li>
          ))}

          <GoogleTranslate />
        </ul>
      </div>
    </div>
  );
};
