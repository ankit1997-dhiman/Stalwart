import { Form, message } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { bedrooms } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";

export function Lease() {
  const [data, setData] = useState([]);
  const [filterForm] = Form.useForm();

  const fetchProperties = useCallback(async () => {
    try {
      const variables = { status: ["ACTIVE"] };
      const res = await graphqlRequest(GET_SALE_PROPERTIES, variables);
      const filterProperty = res?.data?.properties?.nodes.filter(
        (item) => item.saleOrLease == "LEASE"
      );
      setData(filterProperty || []);
    } catch (error) {
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
                <Link to={`/property/${id}`}>
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
                </Link>
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
