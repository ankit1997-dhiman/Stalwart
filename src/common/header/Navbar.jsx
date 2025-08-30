import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import whiteLogo from "@/assets/images/white-logo.png";
import { URLS } from "@/constants/Urls";
import { menuItems } from "@/constants/menuLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const footerMenu = [
    { name: "Instagram" },
    { name: "Facebook" },
    { name: "LinkedIn" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="container flex justify-between items-center py-14">
        <Link to={URLS.HOME}>
          <img src={whiteLogo} alt="logo" className="w-[143px]" />
        </Link>
        <RxHamburgerMenu className="text-white text-xl" onClick={showDrawer} />
      </div>

      {/* Drawer */}
      <Drawer
        closable={false}
        placement="left"
        onClose={onClose}
        open={open}
        className="!bg-[#4F4C45] !p-0"
        title={
          <div className="flex justify-between items-center px-6 py-10">
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
            <ul className="space-y-6 py-6.5 text-xs font-normal font-monument  text-white">
              <li>SOCIAL MEDIA</li>
            </ul>
            <ul className="flex justify-between space-x-6 py-6.5 text-xs font-normal text-white font-moderat">
              {footerMenu.map((item, idx) => (
                <li key={idx}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
