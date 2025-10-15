import { Form, message, Skeleton } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { bedrooms } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { Link } from "react-router-dom";
import { GET_FILTERED_PROPOERTIES } from "@/queries/filterProperties";

export function Buy() {
  const [data, setData] = useState([]);
  const [filterForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const fetchProperties = useCallback(async (filtersFromForm = {}) => {
    try {
      setLoading(true);

      const { bedrooms, bathrooms, carSpaces, address } = filtersFromForm;
      console.log(bedrooms, "bedrooms");

      // Build dynamic filters array (only numeric fields)
      const dynamicFilters = [];
      if (address) {
        dynamicFilters.push({
          type: "STREET",
          strategy: "CONTAINS",
          value: address,
        });
      }
      if (bedrooms) {
        dynamicFilters.push({
          type: "BEDROOM",
          strategy: "IS_GREATER_THAN",
          value: String(bedrooms),
          displayValue: null,
        });
      }
      if (bathrooms) {
        dynamicFilters.push({
          type: "BATHROOM",
          strategy: "IS_GREATER_THAN",
          value: String(bathrooms),
        });
      }
      if (carSpaces) {
        dynamicFilters.push({
          type: "CAR_SPACES",
          strategy: "IS_GREATER_THAN",
          value: String(carSpaces),
        });
      }

      // Only send filterSet if there’s at least one filter
      const variables = {
        ...(dynamicFilters.length && {
          filterSet: {
            filterGroups: [{ operand: "AND", filters: dynamicFilters }],
            operand: "AND",
          },
        }),
        status: "ACTIVE", // always fetch sold properties
        page: 1,
        order: "UPDATED_AT_NEWEST",
      };

      const res = await graphqlRequest(GET_FILTERED_PROPOERTIES, variables);
      let properties = res?.data?.properties?.nodes || [];

      setData(properties);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  }, []);

  // =========================
  // INITIAL FETCH
  // =========================
  useEffect(() => {
    fetchProperties();
    filterForm.setFieldsValue({ status: "BUY" });
  }, [fetchProperties]);

  // =========================
  // HANDLE LIVE FILTER CHANGES
  // =========================
  const handleValuesChange = (allValues) => {
    console.log(allValues, "sdfasdjfnval");
    const { address, bedrooms, bathrooms, carSpaces } = allValues;
    const allEmpty = !address && !bedrooms && !bathrooms && !carSpaces;

    if (allEmpty) {
      console.log(here);
      fetchProperties(); // show all sold properties
    } else {
      fetchProperties(allValues); // filtered
    }
  };

  return (
    <div className="container lg:px-0 px-12.5">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="PROPERTIES FOR BUY"
          leftText="Buy"
          midText="|"
          rightText="Auction"
        />

        <InquiryForm
          form={filterForm}
          onSubmit={handleValuesChange}
          status="BUY"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
        />
      </div>
      <div className="border-t border-b-black/30 my-16 "></div>
      {loading ? (
        <p className="text-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </p>
      ) : (
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
      )}

      <div className="mt-16"></div>
    </div>
  );
}
