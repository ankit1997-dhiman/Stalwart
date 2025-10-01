import {
  bottomStatusOptions,
  properties,
  topStatusOptions,
} from "@/constants/constants";
import { Button, Form, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FilteredProperties } from "../buy/components/FilteredProperties";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import dummyImage from "@/assets/images/dummy-image.jpg";

export const Lease = () => {
  const [data, setData] = useState([]);
  const [filterLeaseForm] = Form.useForm();

  const onFinish = (values) => {};

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
        // ✅ pass array instead of string
        const variables = {
          // first: 10,
          status: ["DRAFT", "UNDER_OFFER", "ACTIVE"],
        };

        const res = await graphqlRequest(query, variables);

        if (res?.data?.properties?.nodes) {
          setData(res.data.properties.nodes);
        }
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch properties");
      }
    };

    fetchProperties();
  }, []);
  return (
    <div className="container xl:px-0 px-12.5">
      <div className="w-full xl:w-[999px] mx-auto">
        <WithSectionLayout
          title={" PORTA AD DOMUN"}
          leftText={"Properties"}
          midText={"|"}
          rightText={"Inspections"}
        />

        <Form
          form={filterLeaseForm}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            name: "",
            status: "BUY",
            status0: "MIN. PRICE",
            status1: "MAX. PRICE",
            status2: "BED",
            status3: "BATH",
            status4: "CAR",
          }}
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-1.5 md:gap-7.5 pb-16 md:pb-4 w-full">
            <Form.Item name="status" label={false} className="!mb-0 ">
              <Select
                className="w-full xl:!w-[180px] border-black border !rounded-none !text-black !h-[50px] !bg-white"
                onChange={() => {
                  filterLeaseForm.submit();
                }}
              >
                {topStatusOptions.map((opt) => (
                  <Select.Option
                    key={opt}
                    value={opt}
                    className=" !text-black !rounded-none font-monument"
                  >
                    <div className="font-monument text-[10px]">{opt}</div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <div className="w-full flex bg-white border-black border">
              <Form.Item
                name="name"
                label={false}
                className="!mb-0 !w-full !rounded-xl"
              >
                <Input
                  placeholder="Search..."
                  className="!h-[50px] !border-none !rounded-none !outline-0"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="!h-[50px] ml-2 flex items-center justify-center bg-white !border-none"
              >
                <FaSearch className="mr-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden xl:flex items-stretch justify-between gap-7.5 pb-4 w-full">
            {bottomStatusOptions.map((options, idx) => (
              <Form.Item
                key={idx}
                name={`status${idx}`}
                label={false}
                className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument !outline-0"
              >
                <Select
                  className={`!text-black !h-[50px] text-[10px] font-normal font-monument !border-0 !outline-none !rounded-none !bg-white ${
                    idx === 0 ? "!w-[180px]" : "!w-full"
                  }`}
                >
                  {options?.map((opt) => {
                    return (
                      <Select.Option
                        key={opt}
                        value={opt}
                        className=" !text-black !w-full !rounded-none font-monument text-[10px] font-normal bg-white"
                      >
                        <div className="font-monument text-[10px]">{opt}</div>
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            ))}
          </div>
        </Form>
      </div>

      <FilteredProperties />
      <div className="my-28">
        {Array.isArray(data) && data.length > 0 ? (
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.map((property, idx) => (
              <Property
                key={property.id || idx}
                address={property?.formattedAddress}
                image={property?.images?.[0]?.url}
                price={property?.price}
                bed={property?.listingDetails?.bedrooms ?? 0}
                bathrooms={property?.listingDetails?.bathrooms ?? 0}
                carportSpaces={property?.listingDetails?.carportSpaces ?? 0}
                property={property}
                leaseTag={false}
              />
            ))}
          </div>
        ) : (
          <PropertiesNotFound />
        )}
      </div>
    </div>
  );
};
