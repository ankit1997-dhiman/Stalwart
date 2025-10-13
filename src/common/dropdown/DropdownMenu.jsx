import { URLS } from "@/constants/Urls";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuLabel = ({ label }) => {
  return (
    <div className="font-monument text-white px-0 text-[13px] menu-label">
      {label}
    </div>
  );
};
const SubMenuLabel = ({ label, link }) => {
  return (
    <Link
      to={link ? link : "#"}
      className="font-monument text-white px-0 uppercase text-[11px]"
    >
      {label}
    </Link>
  );
};

const items = [
  {
    key: "sub1",
    label: <MenuLabel label="BUY" />,
    // icon: <MailOutlined />,
    children: [
      {
        key: "sub-1-1",
        label: <SubMenuLabel label="Properties for Sale" link={URLS.BUY} />,
      },
      {
        key: "sub-1-2",
        label: (
          <SubMenuLabel
            label="Upcoming Inspections & Auctions"
            link={URLS.UPCOMING_AUCTIONS}
          />
        ),
      },
    ],
  },
  {
    key: "sub2",
    label: <MenuLabel label="SELL" />,
    // icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: <SubMenuLabel label="SELL" link={URLS.SELL_WITH_STALWART} />,
      },
      {
        key: "g2",
        label: <SubMenuLabel label="Properties for Sale" />,
      },
      {
        key: "g3",
        label: <SubMenuLabel label="Upcoming Inspections & Auctions" />,
      },
      {
        key: "g4",
        label: <SubMenuLabel label="Sold Properties" />,
      },
    ],
  },
  {
    key: "sub3",
    label: <MenuLabel label="LEASE" />,
    // icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: <SubMenuLabel label="LEASE" link={URLS.LEASE} />,
      },
      {
        key: "g2",
        label: <SubMenuLabel label="Properties for Sale" />,
      },
      {
        key: "g3",
        label: <SubMenuLabel label="Upcoming Inspections & Auctions" />,
      },
      {
        key: "g4",
        label: <SubMenuLabel label="Sold Properties" />,
      },
    ],
  },
  {
    key: "sub4",
    label: <MenuLabel label="ABOUT" />,
  },
  {
    key: "sub5",
    label: <MenuLabel label="CONTACT" />,
  },
];
const onClick = (e) => {
  console.log("click ", e);
};

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
const levelKeys = getLevelKeys(items);

export const DropdownMenu = ({ onSelect }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["sub1", "g1"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      onClick={onClick}
      className="
      
    !bg-transparent 
    [&_.ant-menu-item]:!my-2 
    [&_.ant-menu-submenu-title]:!my-2 
    [&_.ant-menu-item]:!rounded-lg 
    [&_.ant-menu-item:hover]:!bg-[#fff] 
    [&_.ant-menu-submenu-title:hover]:!bg-[#fff] 
    [&_.ant-menu-submenu:hover]:!text-[#000] 
    [&_.ant-menu-item-selected]:!bg-[#fff] 
    [&_.ant-menu-item-selected]:!text-[#000]
    [&_.ant-menu-submenu-arrow]:!text-white 
    [&_.ant-menu-submenu-expand-icon]:!text-white 
    [&_.ant-menu-title-content a]:!text-[#fff]
    custom-menu
    
  "
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      onSelect={onSelect}
    />
  );
};
