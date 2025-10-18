import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Property } from "@/common/properties/Property";
import { GET_FILTERED_PROPOERTIES } from "@/queries/filterProperties";
import { FILTER_SUBURB_AND_STATUS } from "@/queries/filterSuburbs";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SearchResult = () => {
  const location = useLocation();
  const { activeTab, query } = location.state || {}; // Access activeTab and query
  const [type, setType] = useState(activeTab);
  const [data, setData] = useState([]);

  const fetchProperties = async () => {
    // setLoading(true);

    try {
      const dynamicFilters = [];
      if (query) {
        dynamicFilters.push({
          type: "SUBURB",
          strategy: "IS",
          value: query,
        });
      }

      const variables = {
        ...(dynamicFilters.length && {
          filterSet: {
            filterGroups: [{ operand: "AND", filters: dynamicFilters }],
            operand: "AND",
          },
        }),
        status: ["ACTIVE", "DRAFT"], // always fetch sold properties
        page: 1,
        order: "UPDATED_AT_NEWEST",
      };
      const res = await graphqlRequest(FILTER_SUBURB_AND_STATUS, variables);
      setData(res?.data?.properties?.nodes);
    } catch (err) {
      message.error(err, 4000);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [type]);

  return (
    <div className="container lg:px-0 px-12.5">
      <div className=" py-20 ">
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
    </div>
  );
};
