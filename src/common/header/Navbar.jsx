import React, { useEffect, useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import whiteLogo from "@/assets/images/white-logo.png";
import blackLogo from "@/assets/images/header-black-logo.png";
import { URLS } from "@/constants/Urls";
import { menuItems, nav1Paths } from "@/constants/menuLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const matchProperty = useMatch("/property/:id");

  // Define the paths where Nav1 should be shown

  const showNav1 = nav1Paths.includes(pathname) || matchProperty;

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

  return (
    <>
      {/* Navbar */}
      <div
        className={`${
          showNav1 ? "" : ""
        } container flex justify-between items-center pt-14 `}
      >
        <Link to={URLS.HOME}>
          <img
            src={showNav1 ? blackLogo : whiteLogo}
            alt="logo"
            className="w-[143px] cursor-pointer"
          />
        </Link>

        <RxHamburgerMenu
          className={`${showNav1 ? "text-black " : "text-white "}  text-xl`}
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
          <div className="flex justify-between gap-10 items-center px-6 py-10">
            <Link to={URLS.HOME}>
              <img src={whiteLogo} alt="logo" className="w-[143px]" />
            </Link>
            <IoMdClose
              onClick={onClose}
              className="text-white text-xl cursor-pointer"
            />
          </div>
        }
      >
        <div className="flex flex-col h-full justify-between px-6">
          {/* Main Menu */}
          <div className="py-4 text-white">
            <ul className="space-y-6 py-6.5 text-xs font-normal">
              {menuItems.map((item, idx) => (
                <li key={idx} className="font-monument text-white">
                  {item.link ? (
                    <Link to={item.link} className="!text-white">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Menu */}
          <div className="flex flex-col">
            <ul className="space-y-6 py-6.5 text-xs font-normal font-monument text-white">
              <li>SOCIAL MEDIA</li>
            </ul>
            <ul className="flex justify-between space-x-6">
              {footerMenu?.map((item, i) => (
                <Link key={item.key} to={item.to} target="_blank">
                  <span className="text-xs font-normal text-white font-moderat">
                    {item.key}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
