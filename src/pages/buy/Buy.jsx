import { Button, Form, Input, message, Select } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import searchImage from "@/assets/icons/search.svg";
import { bedrooms } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { FilterSelectDropdown } from "@/components/select/FilterSelectDropdown";

export function Buy() {
  const [data, setData] = useState([]);
  const [filterForm] = Form.useForm();

  const fetchProperties = useCallback(async () => {
    const query = `
      query GetSaleProperties($status: [PropertyStatusEnum!]) {
        properties(
          status: $status
          orderBy: CREATED_AT_DESC
        ) {
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
      const variables = { status: ["DRAFT", "UNDER_OFFER", "ACTIVE"] };
      const res = await graphqlRequest(query, variables);
      setData(res?.data?.properties?.nodes || []);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch properties");
    }
  }, []);

  useEffect(() => {
    fetchProperties();
    filterForm.setFieldsValue({ status: "BUY" });
  }, [fetchProperties]);

  const onFinish = (values) => {
    console.log("Filters applied:", values);
    // Implement filter-based fetching if needed
  };

  const renderSelectOptions = (options) =>
    options.map((opt) => (
      <Select.Option
        key={opt}
        value={opt}
        className="!text-black !rounded-none font-monument text-[10px] font-normal"
      >
        <div className="font-monument text-[10px]">{opt}</div>
      </Select.Option>
    ));

  return (
    <div className="container lg:px-0 px-12.5">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="PROPERTIES FOR SALE"
          leftText="Buy"
          midText="|"
          rightText="Auctions"
        />

        <Form
          form={filterForm}
          onFinish={onFinish}
          layout="vertical"
          className="!pt-11 "
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between pb-0 md:pb-4 w-full">
            <Form.Item
              name="status"
              label={false}
              className="!mb-0 inquiry-form !h-[50px] w-full lg:!w-[260px]"
            >
              <Input className="!h-[50px] px-3" value="BUY" disabled />
            </Form.Item>

            <div className="w-full flex items-center bg-white border-black border ">
              <Form.Item
                name="name"
                label={false}
                className="!w-full !rounded-xl !my-auto outline-0"
              >
                <Input className="!border-none !rounded-none !outline-0 !border-0 !shadow-none !font-monument !text-[13px]" />
              </Form.Item>
              <Button
                htmlType="submit"
                className="ml-2 flex items-center justify-center bg-white !border-none"
              >
                <img src={searchImage} />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden xl:flex items-stretch justify-between gap-7.5 pb-4 w-full inquiry-form">
            <FilterSelectDropdown
              name="bedrooms"
              placeholder="BED"
              options={bedrooms}
            />
            <FilterSelectDropdown
              name="bathrooms"
              placeholder="BATH"
              options={bedrooms}
            />
            <FilterSelectDropdown
              name="car"
              placeholder="CAR"
              options={bedrooms}
            />
          </div>
        </Form>
      </div>
      <div className="border-t border-b-black/30 my-16 "></div>
      <div className="">
        {data.length > 0 ? (
          <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((property) => {
              const { id, formattedAddress, images, price, listingDetails } =
                property;
              return (
                <Property
                  key={id}
                  address={formattedAddress}
                  image={images?.[0]?.url}
                  price={price}
                  bed={listingDetails?.bedrooms ?? 0}
                  bathrooms={listingDetails?.bathrooms ?? 0}
                  carportSpaces={listingDetails?.carportSpaces ?? 0}
                  property={property}
                  leaseTag={false}
                />
              );
            })}
          </div>
        ) : (
          <PropertiesNotFound />
        )}
      </div>
      <div className="mt-16"></div>
    </div>
  );
}
