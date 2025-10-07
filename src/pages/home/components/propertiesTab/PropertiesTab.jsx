import React, { useEffect, useState } from "react";
import { message, Tabs } from "antd";
import { Tab1 } from "./components/Tab1.jsx";
import image from "@/assets/images/black-logo.png";
import Tab2 from "./components/Tab2.jsx";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import SellTab from "./components/SellTab.jsx";
import LeaseTab from "./components/LeaseTab.jsx";

// Map tab key → status
const tabListingTypes = {
  1: null, // FEATURED (no filter)
  2: ["DRAFT", "UNDER_OFFER", "ACTIVE"], // BUY
  3: ["SOLD"], // SELL (adjust if needed)
  4: ["LEASED"], // LEASE
};

const PropertiesTab = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const query = `
        query GetSaleProperties($first: Int, $status: [PropertyStatusEnum!]) {
          properties(
            first: $first
            status: $status
            orderBy: CREATED_AT_DESC
          ) {
            totalCount
            nodes {
              id
              price
              formattedAddress
              status
              saleOrLease
              status
              advertisedPrice
              latitude
              longitude
              description
              featured
              createdAt
              updatedAt

              listingDetails {
                ... on ResidentialSale {
                  bedrooms
                  bathrooms
                  carportSpaces
                  garageSpaces
                  openCarSpaces
                }
                ... on ResidentialRental {
                  bedrooms
                  bathrooms
                  carportSpaces
                  garageSpaces
                  openCarSpaces
                }
              }

              vendors {
                contact {
                  firstName
                  lastName
                }
              }

              images {
                url
              }
            }
          }
        }
      `;

      try {
        const status = tabListingTypes[activeTab];
        const variables = {
          first: 10,
          ...(status ? { status } : {}), // ✅ only include if not null
        };

        const res = await graphqlRequest(query, variables);

        if (res?.data?.properties?.nodes) {
          setData(res.data.properties.nodes);
        }
        console.log(data);
      } catch (error) {
        message.error(error);
      }
    };

    fetchProperties();
  }, [activeTab]);

  const items = [
    {
      key: "1",
      label: (
        <p className="font-moderat-medium font-medium text-base">FEATURED</p>
      ),
      children: <Tab1 />,
    },
    {
      key: "2",
      label: <p className="font-moderat-medium font-medium text-base">BUY</p>,
      children: <Tab2 tabdata={data} />,
    },
    {
      key: "3",
      label: <p className="font-moderat-medium font-medium text-base">SELL</p>,
      children: <SellTab tabdata={data} />,
    },
    {
      key: "4",
      label: <p className="font-moderat-medium font-medium text-base">LEASE</p>,
      children: <LeaseTab tabdata={data} />,
    },
  ];

  return (
    <section className="container py-22 xl:px-0">
      <img src={image} className="h-4 w-7.5 mx-auto" />
      <p className="text-center text-black font-normal text-[13px] md:text-[32px] py-[64px] font-monument">
        REPLACE SUBHEADING
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
