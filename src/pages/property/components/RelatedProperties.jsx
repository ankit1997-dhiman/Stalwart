import { Property } from "@/common/properties/Property";
import { GET_FILTERED_PROPOERTIES } from "@/queries/filterProperties";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RelatedProperties = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const fetchProperties = async () => {
    const variables = { first: 3, status: ["ACTIVE"] };
    try {
      const res = await graphqlRequest("/api/graphql",GET_FILTERED_PROPOERTIES, variables);

      if (res.data) {
        const variables = { status: ["ACTIVE"] };
        const res = await graphqlRequest("/api/graphql",GET_SALE_PROPERTIES, variables);

        if (res.data) {
          const allProperties = res?.data?.properties?.nodes;
          setPropertiesData(allProperties.slice(0, 3) || []);
        }
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <section className="pb-20">
      <p className="text-2xl font-moderat-medium uppercase py-10">
        Related Listings
      </p>
      <hr className="pb-10" />
      <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* You can map related properties here later */}
        {propertiesData.map((property, idx) => (
          <Link to={`/property/${property.id}`}>
            <Property
              key={idx}
              id={property.id}
              address={property?.formattedAddress}
              image={property?.images}
              price={property?.advertisedPrice}
              bed={property?.listingDetails?.bedrooms}
              bathrooms={property?.listingDetails?.bathrooms}
              carportSpaces={property?.listingDetails?.carportSpaces}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
