import React from "react";
import { Tabs } from "antd";
import { Tab1 } from "./components/Tab1.jsx";
import image from "@/assets/images/black-logo.png";

const items = [
  {
    key: "1",
    label: "FEATURED",
    children: <Tab1></Tab1>,
  },
  {
    key: "2",
    label: "BUY",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "SELL",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "LEASE",
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
