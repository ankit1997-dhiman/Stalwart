import React, { useCallback, useEffect, useState } from "react";
import { Form, message } from "antd";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import { bedrooms } from "@/constants/constants";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Link } from "react-router-dom";

export function SoldProperties() {
  const [soldFilterForm] = Form.useForm();
  const [soldProperties, setSoldProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const fetchProperties = useCallback(async () => {
    try {
      const variables = { status: ["SOLD"] };
      const res = await graphqlRequest(GET_SALE_PROPERTIES, variables);

      const properties = res?.data?.properties?.nodes || [];
      setSoldProperties(properties);
      setFilteredProperties(properties); // show all initially
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch properties");
    }
  }, []);

  useEffect(() => {
    fetchProperties();
    soldFilterForm.setFieldsValue({ status: "BUY" });
  }, [fetchProperties]);

  // 🧩 Handle filter form submit
  const handleSubmit = (values) => {
    console.log("Filter submitted:", values);

    const { address, bedrooms, bathrooms, carSpaces } = values;

    const filtered = soldProperties.filter((property) => {
      const matchesAddress = address
        ? property.formattedAddress
            ?.toLowerCase()
            .includes(address.toLowerCase())
        : true;

      const matchesBedrooms = bedrooms
        ? property.listingDetails?.bedrooms === Number(bedrooms)
        : true;

      const matchesBathrooms = bathrooms
        ? property.listingDetails?.bathrooms === Number(bathrooms)
        : true;

      const totalCarSpaces =
        (property.listingDetails?.carportSpaces || 0) +
        (property.listingDetails?.garageSpaces || 0) +
        (property.listingDetails?.openCarSpaces || 0);

      const matchesCarSpaces = carSpaces
        ? totalCarSpaces === Number(carSpaces)
        : true;

      // ✅ Return true only if all filters match
      return (
        matchesAddress &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesCarSpaces
      );
    });

    console.log("Filtered properties:", filtered);
    setFilteredProperties(filtered);
  };

  console.log("Form submitted:", filteredProperties);

  return (
    <div className="container">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="SOLD PROPERTIES"
          leftText=""
          midText=""
          rightText="Sell With Stalwart"
        />

        <InquiryForm
          form={soldFilterForm}
          onFinish={handleSubmit}
          status="BUY"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
        />
      </div>

      <div className="border-t border-b-black/30 my-16 "></div>
      <div className="">
        {filteredProperties.length > 0 ? (
          <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProperties.map((property) => {
              const { id, formattedAddress, images, price, listingDetails } =
                property;
              return (
                <Link to={`/property/${id}`}>
                  <Property
                    key={id}
                    address={formattedAddress}
                    image={images?.[0]?.url}
                    price={price}
                    bed={
                      listingDetails?.bedrooms ? listingDetails?.bedrooms : 0
                    }
                    bathrooms={listingDetails?.bathrooms ?? 0}
                    carportSpaces={listingDetails?.carportSpaces ?? 0}
                    property={property}
                    leaseTag={false}
                    soldTag={true}
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
