import { Form, message, Skeleton } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { bedrooms } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";
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

      const res = await graphqlRequest(
        "/api/graphql",
        GET_FILTERED_PROPOERTIES,
        variables
      );
      let properties = res?.data?.properties?.nodes || [];

      setData(properties);
    } catch (error) {
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
    console.log(allValues, "allValues");
    const { address, bedrooms, bathrooms, carSpaces } = allValues;

    console.log(address, bedrooms - 1, bathrooms, carSpaces, "asdas");
    const allEmpty = !address && !bedrooms && !bathrooms && !carSpaces;

    if (allEmpty) {
      fetchProperties(); // show all sold properties
    } else {
      fetchProperties(allValues); // filtered
    }
  };

  return (
    <div className="bg-white">
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
          />
        </div>
        <div className="border-t border-b-black/30 my-16 "></div>
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: data.length }).map((_, i) => (
              <div className="relative border border-gray-300 rounded overflow-hidden h-[300px] lg:h-[450px] p-5">
                <Skeleton.Image active className="!w-full !h-[200px]" />
                <div className="pt-5">
                  <Skeleton active paragraph={{ rows: 2 }} title={false} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            {data.length > 0 ? (
              <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.map((property) => {
                  if (!property || !property.id) return null; // skip invalid entries

                  const {
                    id,
                    formattedAddress = "No address available",
                    images = [],
                    advertisedPrice = 0,
                    listingDetails = {},
                  } = property;

                  const {
                    bedrooms = 0,
                    bathrooms = 0,
                    carportSpaces = 0,
                    garageSpaces = 0,
                    openCarSpaces = 0,
                  } = listingDetails || {};

                  return (
                    <Link to={`/property/${id}`} key={id}>
                      <Property
                        id={id}
                        address={formattedAddress}
                        image={
                          Array.isArray(images) && images.length > 0
                            ? images
                            : []
                        }
                        price={advertisedPrice}
                        bed={bedrooms}
                        bathrooms={bathrooms}
                        carportSpaces={carportSpaces}
                        garageSpaces={garageSpaces}
                        openCarSpaces={openCarSpaces}
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

        <div className="pt-16"></div>
      </div>
    </div>
  );
}
