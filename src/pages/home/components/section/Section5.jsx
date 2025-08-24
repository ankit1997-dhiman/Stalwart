import React from "react";
import { Tabs } from "antd";
import { Tab1 } from "./components/Tab1.jsx";

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

const Section5 = () => {
  return (
    <section className="container py-30">
      <p className="text-center text-black font-normal text-[32px] py-16  ">REPLACE SUBHEADING</p>
      <Tabs defaultActiveKey="1" centered items={items} tabBarGutter={100} />

    </section>
  );
};

export default Section5;
