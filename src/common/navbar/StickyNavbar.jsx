import { S3_BASE_URL } from "@/config";
import { menuItems } from "@/constants/menuLinks";
import { URLS } from "@/constants/Urls.js";
import GoogleTranslate from "@/pages/GoogleTranslate";
import { Link } from "react-router-dom";

export const StickyNavbar = () => {
  return (
    <div className="container justify-between items-center xl:flex hidden">
      <div>
        <Link to={URLS.HOME}>
          <img
            src={`${S3_BASE_URL}/black-logo.png`}
            alt="logo"
            className="w-6 h-3"
          />
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
