import { URLS } from "./Urls";
import TranslateLogo from "@/assets/icons/translate.svg"

export const menuItems = [
    { name: "BUY" ,link: URLS.BUY},
    { name: "SELL",},
    { name: "LEASE" ,link: URLS.LEASE},
    { name: "ABOUT", link: URLS.ABOUT },
    { name: "CONTACT", link: URLS.CONTACT_US },
    // { name: <img src={TranslateLogo} alt="Translate" className="w-4 h-4" />,link:URLS.LEASE_PROPERTIES},
  ];


   export const nav1Paths = [
    "/ucoming-auction",
    "/upcoming-inspection",
    "/buy",
    "/lease",
    "/leased-properties",
    "/sold-properties",
  ];