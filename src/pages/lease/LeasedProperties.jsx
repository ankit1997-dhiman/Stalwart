import React, { useCallback, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { FaSearch } from "react-icons/fa";
import {
  bedrooms,
  bottomStatusOptions,
  properties,
  topStatusOptions,
} from "@/constants/constants";
// import { FilteredProperties } from "../buy/components/FilteredProperties";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { BottomSpace } from "@/components/BottomSpace";

export function LeasedProperties() {
  const [leasedFilterForm] = Form.useForm();
  const [leaseProperties, setLeaseProperties] = useState([]);
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
        status: "LEASED", // always fetch sold properties
        page: 1,
        orderBy: "SOLD_DATE_DESC",
        // totalCount,
      };

      const res = await graphqlRequest(
        "/api/graphql",
        GET_FILTERED_PROPOERTIES,
        variables
      );
      let properties = res?.data?.properties?.nodes || [];

      setLeaseProperties(properties);
    } catch (error) {
      message.error("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleValuesChange = (allValues) => {
    const { address, bedrooms, bathrooms, carSpaces } = allValues;
    const allEmpty = !address && !bedrooms && !bathrooms && !carSpaces;
    useEffect(() => {
      fetchProperties();
    }, [fetchProperties]);
    if (allEmpty) {
      fetchProperties(); // show all sold properties
    } else {
      fetchProperties(allValues); // filtered
    }
  };
  return (
    <div className="container">
      <div className="w-full xl:w-[999px] mx-auto ">
        <WithSectionLayout
          title="LEASED PROPERTIES"
          leftText=""
          midText="Switch To Stalwart (Property Management)"
          rightText=" "
        />

        <InquiryForm
          form={leasedFilterForm}
          onSubmit={handleValuesChange}
          status="LEASE"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
          showStatus={false}
        />
      </div>

      <div className="border-t border-b-black/30 my-16" />

      {loading ? (
        <Preloader />
      ) : leaseProperties.length > 0 ? (
        <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leaseProperties.map((property) => {
            const { id, formattedAddress, images, price, listingDetails } =
              property;
            return (
              <Property
                id={id}
                address={formattedAddress}
                image={images}
                price={price}
                bed={listingDetails?.bedrooms ?? 0}
                bathrooms={listingDetails?.bathrooms ?? 0}
                carportSpaces={listingDetails?.carportSpaces ?? 0}
                property={property}
                leaseTag={true}
                soldTag={false}
              />
            );
          })}
        </div>
      ) : (
        <PropertiesNotFound />
      )}
      {leaseProperties.length > 4 && <LoadMoreButton />}
      <BottomSpace />
    </div>
  );
}
