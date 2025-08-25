import React from "react";
import logoBlack from "@/assets/images/black-logo.png";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls.js";

export const StickyNavbar = () => {
  return (
    <div className="container flex justify-between items-center">
      <div>
        <Link to={URLS.HOME}>
          <img src={logoBlack} alt="logo" className="w-5 h-2.5" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-20 py-6.5">
          <li>BUY</li>
          <li>SELL</li>
          <li>LEASE</li>
          <li>
            <Link to={URLS.ABOUT}>ABOUT</Link>
          </li>
          <li>CONTACT</li>
          <li>T</li>
        </ul>
      </div>
    </div>
  );
};
