import React, { useState } from "react";
import whiteLogo from "@/assets/images/white-logo.png";
import { URLS } from "@/constants/Urls";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "antd";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container flex justify-between items-center py-14">
        <div>
          <Link to={URLS.HOME}>
            <img src={whiteLogo} alt="logo" className="w-[143px]" />
          </Link>
        </div>
        <div>
          <RxHamburgerMenu
            className="text-white text-xl"
            onClick={showDrawer}
          />
        </div>
      </div>
      <Drawer
        closable={false} // remove default close button
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
          {/* Main content */}
          <div className="py-4 text-white">
            <ul className="space-y-6 py-6.5 text-xs font-normal">
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

          {/* Footer */}
          <div className="flex flex-col">
            <ul className="space-y-6 py-6.5 text-xs font-normal text-white">
              <li>SOCIAL MEDIA</li>
            </ul>
            <ul className="flex justify-between space-x-6 py-6.5 text-xs font-normal text-white">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
