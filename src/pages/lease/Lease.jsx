import { Form, message, Skeleton } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { magicText } from "@/constants/constants";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { graphqlRequest } from "@/utils/graphqlRequest.js";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";
import { BottomSpace } from "@/components/BottomSpace";
import { LoadMoreBtn } from "@/components/LoadMoreBtn";
import { GET_FILTERED_PROPERTIES } from "@/queries/filterProperties";

export function Lease() {
  const [filterForm] = Form.useForm();
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    magicText.PROPERTIES_PER_PAGE
  );

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
          listingType: ["RESIDENTIAL_RENTAL"],
          orderBy: "CREATED_AT_DESC",
          status: [],
          ...(dynamicFilters.length && {
            filterSet: {
              filterGroups: [{ operand: "AND", filters: dynamicFilters }],
              operand: "AND",
            },
          }),
        };

        const res = await graphqlRequest(
          "/api/graphql",
          GET_FILTERED_PROPERTIES,
          variables
        );
        const properties = res?.data?.properties?.nodes || [];
        const info = res?.data?.properties?.pageInfo || {};

        setProperties(properties);
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
    const currentFilters = filterForm.getFieldsValue();
    filterForm.setFieldsValue({ status: "LEASE" });
    fetchProperties(currentFilters);
  }, [fetchProperties, visibleCount]);

  const handleValuesChange = (allValues) => {
    const { address, bedrooms, bathrooms, carSpaces } = allValues;
    const allEmpty = !address && !bedrooms && !bathrooms && !carSpaces;

    if (allEmpty) {
      fetchProperties();
    } else {
      fetchProperties(allValues);
    }
  };
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
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
          onFinish={handleValuesChange}
          status="LEASE"
        />
      </div>
      <div className="border-t border-b-black/30 my-16 "></div>
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: properties.length }).map((_, i) => (
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
          {properties.length > 0 ? (
            <>
              <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {properties.map((property) => {
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
                    <Property
                      id={id}
                      address={formattedAddress}
                      image={
                        Array.isArray(images) && images.length > 0 ? images : []
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
        </div>
      )}
      <BottomSpace />
    </div>
  );
}
