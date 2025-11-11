import { HeaderLogo } from "@/assets/icons/HeaderLogo.jsx";
import { HeaderWhiteLogo } from "@/assets/icons/HeaderWhiteLogo.jsx";
import { S3_BASE_URL } from "@/config.js";
import { URLS } from "@/constants/Urls";
import { nav1Paths } from "@/constants/menuLinks";
import { useTheme } from "@/context/ThemeContext.jsx";
import { Drawer } from "antd";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useMatch } from "react-router-dom";
import { DropdownMenu } from "../dropdown/DropdownMenu.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const matchProperty = useMatch("/property/:id");
  const { isDark, setDark } = useTheme();

  const showNav1 = Boolean(nav1Paths.includes(pathname) || matchProperty);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const footerMenu = [
    {
      key: "Instagram",
      to: URLS.INSTAGRAM,
    },
    {
      key: "Facebook",
      to: URLS.FACEBOOK,
    },
    {
      key: "LinkedIn",
      to: URLS.LINKED_IN,
    },
  ];

  const onSelect = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`${showNav1 ? "bg-white " : ""} lg:px-0 px-12.5`}
        onClick={() => setDark(false)}
      >
        <div
          className={`${
            showNav1 ? "bg-white" : ""
          }  flex justify-between items-center py-8 lg:py-14 container`}
        >
          <Link to={URLS.HOME}>
            {isDark || showNav1 ? <HeaderLogo /> : <HeaderWhiteLogo />}
          </Link>

          <RxHamburgerMenu
            className={`${
              isDark || showNav1 ? "text-black " : "text-white "
            }  text-xl cursor-pointer`}
            onClick={showDrawer}
          />
        </div>

        {/* Drawer */}
        <Drawer
          closable={false}
          placement="left"
          onClose={onClose}
          open={open}
          className="!bg-[#4F4C45] !p-0"
          title={
            <div className="flex justify-between gap-10 items-center px-6 py-4 lg:py-10">
              <Link to={URLS.HOME}>
                <img
                  src={`${S3_BASE_URL}/white-logo.png`}
                  alt="logo"
                  className="w-[143px]"
                  onClick={() => setOpen(false)}
                />
              </Link>
              <IoMdClose
                onClick={onClose}
                className="text-white text-xl cursor-pointer"
              />
            </div>
          }
        >
          <div className="flex flex-col h-full justify-between ">
            <DropdownMenu
              onSelect={(item) => {
                onSelect(item);
                onClose(); // 👈 closes the drawer right after selection
              }}
            />

            {/* Footer Menu */}
            <div className="flex flex-col px-6">
              <ul className="space-y-6 py-6.5 text-xs font-normal font-monument text-white">
                <li>SOCIAL MEDIA</li>
              </ul>
              <ul className="flex justify-between space-x-6">
                {footerMenu?.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    target="_blank"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-xs font-normal text-white font-moderat">
                      {item.key}
                    </span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}
