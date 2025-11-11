import { S3_BASE_URL } from "@/config.js";
import { magicText } from "@/constants/constants.jsx";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries.js";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import { message, Tabs } from "antd";
import { useEffect, useState } from "react";
import LeaseTab from "./components/LeaseTab.jsx";
import SellTab from "./components/SellTab.jsx";
import { Tab1 } from "./components/Tab1.jsx";
import Tab2 from "./components/Tab2.jsx";

const tabListingTypes = {
  1: ["ACTIVE", "UNDER_OFFER"],
  2: ["ACTIVE"],
  3: ["SOLD"],
  4: ["LEASED"],
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
      const res = await graphqlRequest(
        "/api/graphql",
        GET_SALE_PROPERTIES,
        variables
      );
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
        <p className="font-moderat-medium text-[10px] lg:text-base">
          {magicText.HOMEPAGE.FEATURED_TAB}
        </p>
      ),
      children: <Tab1 tabdata={data} />,
    },
    {
      key: "2",
      label: (
        <p className="font-moderat-medium text-[10px] lg:text-base hover:text-black active:text-black">
          {magicText.HOMEPAGE.BUY_TAB}
        </p>
      ),
      children: <Tab2 tabdata={data} activeTab={activeTab} />,
    },
    {
      key: "3",
      label: (
        <p className="font-moderat-medium text-[10px] lg:text-base hover:text-black active:text-black">
          {magicText.HOMEPAGE.SOLD_TAB}
        </p>
      ),
      children: <SellTab tabdata={data} activeTab={activeTab} />,
    },
    {
      key: "4",
      label: (
        <p className="font-moderat-medium text-[10px] lg:text-base hover:text-black active:text-black">
          {magicText.HOMEPAGE.LEASE_TAB}
        </p>
      ),
      children: <LeaseTab tabdata={data} activeTab={activeTab} />,
    },
  ];

  return (
    <section className="container py-22 xl:px-0">
      <img
        src={S3_BASE_URL + "/black-logo.png "}
        className="h-4 w-7.5 mx-auto"
      />
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
