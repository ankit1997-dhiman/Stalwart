import React, { useCallback, useEffect, useState } from "react";
import { Form, message } from "antd";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import { bedrooms, magicText } from "@/constants/constants";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_FILTERED_PROPOERTIES } from "@/queries/filterProperties";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Preloader } from "@/common/preloader/Preloader";
import { BottomSpace } from "@/components/BottomSpace";
import { LoadMoreBtn } from "@/components/LoadMoreBtn";

export function SoldProperties() {
  const [soldFilterForm] = Form.useForm();
  const [soldProperties, setSoldProperties] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    magicText.PROPERTIES_PER_PAGE
  );

  // =========================
  // FETCH PROPERTIES (Dynamic filters)
  // =========================

  const fetchProperties = useCallback(
    async (filtersFromForm = {}) => {
      try {
        setLoading(true);
        const { bedrooms, bathrooms, carSpaces, address } = filtersFromForm;
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

        const variables = {
          first: visibleCount,
          orderBy: "SOLD_DATE_DESC",
          status: ["SOLD"],
          ...(dynamicFilters.length && {
            filterSet: {
              filterGroups: [{ operand: "AND", filters: dynamicFilters }],
              operand: "AND",
            },
          }),
        };

        const res = await graphqlRequest(
          "/api/graphql",
          GET_FILTERED_PROPOERTIES,
          variables
        );
        const properties = res?.data?.properties?.nodes || [];
        const info = res?.data?.properties?.pageInfo || {};

        setSoldProperties(properties);
        setPageInfo(info);
      } catch (error) {
        message.error("Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    },
    [visibleCount]
  );

  useEffect(() => {
    const currentFilters = soldFilterForm.getFieldsValue();
    fetchProperties(currentFilters);
  }, [fetchProperties, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

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
        <Preloader />
      ) : soldProperties.length > 0 ? (
        <>
          <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {soldProperties.map((property) => {
              const {
                id,
                formattedAddress,
                images,
                price,
                listingDetails,
                advertisedPrice,
              } = property;
              return (
                <Property
                  id={id}
                  address={formattedAddress}
                  image={images}
                  price={advertisedPrice}
                  bed={listingDetails?.bedrooms ?? 0}
                  bathrooms={listingDetails?.bathrooms ?? 0}
                  carportSpaces={listingDetails?.carportSpaces ?? 0}
                  property={property}
                  leaseTag={false}
                  soldTag={true}
                />
              );
            })}
          </div>

          {pageInfo?.hasNextPage && (
            <div className=" flex justify-center">
              <LoadMoreBtn onClick={handleLoadMore} loading={loadingMore} />
            </div>
          )}
        </>
      ) : (
        <PropertiesNotFound />
      )}

      <BottomSpace />
    </div>
  );
}
