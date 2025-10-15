import React, { useCallback, useEffect, useState } from "react";
import { Form, message } from "antd";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import { bedrooms } from "@/constants/constants";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_FILTERED_PROPOERTIES } from "@/queries/filterProperties";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Link } from "react-router-dom";

export function SoldProperties() {
  const [soldFilterForm] = Form.useForm();
  const [soldProperties, setSoldProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // FETCH PROPERTIES (Dynamic filters)
  // =========================
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
        status: "SOLD", // always fetch sold properties
        page: 1,
        order: "UPDATED_AT_NEWEST",
      };

      const res = await graphqlRequest(GET_FILTERED_PROPOERTIES, variables);
      let properties = res?.data?.properties?.nodes || [];

      setSoldProperties(properties);
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
  }, [fetchProperties]);

  // =========================
  // HANDLE LIVE FILTER CHANGES
  // =========================
  const handleValuesChange = (allValues) => {
    const { address, bedrooms, bathrooms, carSpaces } = allValues;
    const allEmpty = !address && !bedrooms && !bathrooms && !carSpaces;

    if (allEmpty) {
      fetchProperties(); // show all sold properties
    } else {
      fetchProperties(allValues); // filtered
    }
  };

  return (
    <div className="container px-12.5 lg:px-0">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="SOLD PROPERTIES"
          leftText=""
          midText=""
          rightText="Sell With Stalwart"
        />

        <InquiryForm
          form={soldFilterForm}
          onSubmit={handleValuesChange}
          status="BUY"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
          showStatus={false}
        />
      </div>

      <div className="border-t border-b-black/30 my-16" />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : soldProperties.length > 0 ? (
        <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {soldProperties.map((property) => {
            const { id, formattedAddress, images, price, listingDetails } =
              property;
            return (
              <Link to={`/property/${id}`} key={id}>
                <Property
                  address={formattedAddress}
                  image={images?.[0]?.url}
                  price={price}
                  bed={listingDetails?.bedrooms ?? 0}
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

      <div className="mt-16" />
    </div>
  );
}
