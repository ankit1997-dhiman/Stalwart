import {Form,  message } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { bedrooms } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";

export function Lease() {
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
    filterForm.setFieldsValue({ status: "LEASE" });
  }, [fetchProperties]);

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="container lg:px-0 px-12.5">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="PROPERTIES FOR LEASE"
          leftText="Properties"
          midText="|"
          rightText="Inspections"
        />

        <InquiryForm
          form={filterForm}
          onFinish={handleSubmit}
          status="LEASE"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
        />
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
