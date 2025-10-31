import { WhiteArrow } from "@/assets/icons/WhiteArrow";
import { drawerMenuitems } from "@/constants/DrawerMenu";
import { Menu } from "antd";
import React, { useState } from "react";

const onClick = (e) => {};

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(drawerMenuitems);

export const DropdownMenu = ({ onSelect }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["sub1", "g1"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      onClick={onClick}
      className="     
        !bg-transparent 
      [&_.ant-menu-submenu-title:hover_.ant-menu-title-content]:text-black
      [&_.ant-menu-submenu-title:hover_.ant-menu-submenu-arrow]:text-black
        [&_.ant-menu-title-content]:text-white
        [&_.ant-menu-title-content:hover]:text-black
        [&_.ant-menu-item]:!my-2 
        [&_.ant-menu-submenu-title]:!my-2 
        [&_.ant-menu-submenu-title]:!rounded-none 
        [&_.ant-menu-item]:!rounded-none 
        [&_.ant-menu-item:hover]:!bg-[#fff] 
        [&_.ant-menu-submenu-title:hover]:!bg-[#fff] 
        [&_.ant-menu-submenu:hover]:!text-[#000] 
        [&_.ant-menu-item-selected]:!bg-[#fff] 
        [&_.ant-menu-item-selected]:!text-[#000]
        [&_.ant-menu-submenu-arrow]:!text-white 
        [&_.ant-menu-submenu-expand-icon]:!text-white 
        [&_.ant-menu-title-content a]:!text-[#fff]
        custom-menu !rounded-none !border-0"
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={drawerMenuitems}
      onSelect={onSelect}
    />
  );
};
