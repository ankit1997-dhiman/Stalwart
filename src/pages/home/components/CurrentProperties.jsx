import React, { useEffect, useState } from "react";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/black-arrow-right.svg";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";

export const CurrentProperties = ({ title }) => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [images, setImage] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const variables = { status: ["ACTIVE"] };
        const res = await graphqlRequest(GET_SALE_PROPERTIES, variables);

        if (res.data) {
          const allProperties = res?.data?.properties?.nodes;
          console.log(allProperties, "askdfjalksjdfkl");
          setPropertiesData(allProperties.slice(0, 4) || []);
        }
      } catch (error) {
        message.error(error.message);
      }
    };
    fetchProperties();
  }, []);
  console.log(propertiesData, "propertiesData");

  return (
    <section className="container flex flex-col lg:flex-row justify-between gap-16 lg:gap-7.5 px-12.5 xl:px-0 ">
      {/* Left Section */}
      <div className="w-full lg:w-[553px]">
        <p className="text-base md:text-2xl font-medium font-moderat-medium">
          {title ? title : null}
        </p>
        <p className="text-black text-xs md:text-sm font-moderat-regular pt-7">
          We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich,
          Redland City and Toowoomba.
        </p>

        <Link
          to="#"
          className="mt-6 lg:mt-16 inline-flex items-center font-semibold text-sm text-black"
        >
          <ButtonWithIcon
            text="See All"
            iconPosition="right"
            iconImage={IconImage}
            className="border-none font-bold font-moderat uppercase"
          />
        </Link>
      </div>

      {/* Right Grid */}
      <div className=" w-full lg:w-[1136px] grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5">
        {propertiesData.map((property, idx) => {
          console.log(property, "proooooo");

          return (
            <Link to={`/property/${property.id}`} className="w-full">
              <Property
                address={property.formattedAddress}
                // property={property}
                key={idx}
                image={property.images.length > 0 ? property.images : ""}
                price={property.price}
                bed={property.listingDetails.bedrooms}
                bathrooms={property.listingDetails.bathrooms}
                carportSpaces={property.listingDetails.garageSpaces}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
