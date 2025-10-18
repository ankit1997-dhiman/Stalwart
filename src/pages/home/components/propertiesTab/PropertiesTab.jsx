import React, { useEffect, useState } from "react";
import { message, Tabs } from "antd";
import { Tab1 } from "./components/Tab1.jsx";
import image from "@/assets/images/black-logo.png";
import Tab2 from "./components/Tab2.jsx";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import SellTab from "./components/SellTab.jsx";
import LeaseTab from "./components/LeaseTab.jsx";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries.js";

// Map tab key → status
const tabListingTypes = {
  1: ["ACTIVE"], // FEATURED (no filter)
  2: ["ACTIVE"], // BUY
  3: ["SOLD"], // SELL (adjust if needed)
  4: ["LEASED"], // LEASE
};

const PropertiesTab = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState([]);
  const fetchProperties = async () => {
    try {
      const status = tabListingTypes[activeTab];
      const variables = {
        first: 50,
        ...(status ? { status } : {}),
      };
      const res = await graphqlRequest(GET_SALE_PROPERTIES, variables);
      let nodes = res?.data?.properties?.nodes || [];

      // Apply filtering on client side
      if (activeTab === "1") {
        nodes = nodes.filter((p) => p.featured === true);
      }

      setData(nodes);
    } catch (error) {
      message.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [activeTab]);

  const items = [
    {
      key: "1",
      label: (
        <p className="font-moderat-medium font-medium text-base">FEATURED</p>
      ),
      children: <Tab1 tabdata={data} />,
    },
    {
      key: "2",
      label: <p className="font-moderat-medium font-medium text-base">BUY</p>,
      children: <Tab2 tabdata={data} activeTab={activeTab} />,
    },
    {
      key: "3",
      label: <p className="font-moderat-medium font-medium text-base">SOLD</p>,
      children: <SellTab tabdata={data} activeTab={activeTab} />,
    },
    {
      key: "4",
      label: <p className="font-moderat-medium font-medium text-base">LEASE</p>,
      children: <LeaseTab tabdata={data} activeTab={activeTab} />,
    },
  ];

  return (
    <section className="container py-22 xl:px-0">
      <img src={image} className="h-4 w-7.5 mx-auto" />
      <p className="text-center text-black font-normal text-[13px] md:text-[32px] py-[64px] font-monument uppercase">
        A Door To Home
      </p>
      <div className="custom-tabs">
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          centered
          items={items}
          tabBarGutter={107}
          className=""
        />
      </div>
    </section>
  );
};

export default PropertiesTab;
