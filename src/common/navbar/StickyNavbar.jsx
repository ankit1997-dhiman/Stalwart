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
          {/* <li className="text-xs font-monument hover:underline">
            <img
              src={TranslateLogo}
              alt="Translate"
              className="w-6 h-6 cursor-pointer"
            />
          </li> */}
          <GoogleTranslate />
          {/* <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <li className="text-xs font-monument hover:underline cursor-pointer flex items-center">
              <img src={TranslateLogo} alt="Translate" className="w-6 h-6" />
            </li>
          </Dropdown>
          <div id="google_translate_element" style={{ display: "none" }}></div> */}
        </ul>
      </div>
    </div>
  );
};
