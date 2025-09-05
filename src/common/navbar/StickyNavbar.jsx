import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls.js";
import logoBlack from "@/assets/images/black-logo.png";
import { menuItems } from "@/constants/menuLinks";
import TranslateLogo from "@/assets/icons/translate.svg";

export const StickyNavbar = () => {
  return (
    <div className="container flex justify-between items-center">
      <div>
        <Link to={URLS.HOME}>
          <img src={logoBlack} alt="logo" className="w-5 h-2.5" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-x-20 py-6.5">
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
          <li className="text-xs font-monument hover:underline">
            <img
              src={TranslateLogo}
              alt="Translate"
              className="w-6 h-6 cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
