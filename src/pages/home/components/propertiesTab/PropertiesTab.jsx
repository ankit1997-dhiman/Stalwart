import React from "react";
import { Tabs } from "antd";
import { Tab1 } from "./components/Tab1.jsx";
import image from "@/assets/images/black-logo.png";

const items = [
  {
    key: "1",
    label: (
      <p className="font-moderat-medium font-medium text-base">FEATURED</p>
    ),
    children: <Tab1></Tab1>,
  },
  {
    key: "2",
    label: <p className="font-moderat-medium font-medium text-base">BUY</p>,
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: <p className="font-moderat-medium font-medium text-base">SELL</p>,
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: <p className="font-moderat-medium font-medium text-base">LEASE</p>,
    children: "Content of Tab Pane 3",
  },
];

const PropertiesTab = () => {
  return (
    <section className="container py-30  xl:px-0">
      <img src={image} className="h-2.5 w-5 mx-auto" />
      <p className="text-center text-black font-normal text-[13px] md:text-[32px] py-7 md:py-16 font-monument">
        REPLACE SUBHEADING
      </p>
      <Tabs defaultActiveKey="1" centered items={items} tabBarGutter={100} />
    </section>
  );
};

export default PropertiesTab;
