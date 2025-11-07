import { useState, useCallback } from "react";
import { message } from "antd";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_FILTERED_PROPERTIES } from "@/queries/filterProperties";
import { magicText } from "@/constants/constants";

export const usePropertiesFetcher = ({
  listingType = [],
  status = [],
  orderBy = "CREATED_AT_DESC",
}) => {
  const [properties, setProperties] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    magicText.PROPERTIES_PER_PAGE
  );

  const buildFilters = (filtersFrom = {}) => {
    const { bedrooms, bathrooms, carSpaces, address } = filtersFrom;
    const dynamicFilters = [];

    if (address)
      dynamicFilters.push({
        type: "STREET",
        strategy: "CONTAINS",
        value: address,
      });
    if (bedrooms)
      dynamicFilters.push({
        type: "BEDROOM",
        strategy: "IS_GREATER_THAN",
        value: String(bedrooms),
      });
    if (bathrooms)
      dynamicFilters.push({
        type: "BATHROOM",
        strategy: "IS_GREATER_THAN",
        value: String(bathrooms),
      });
    if (carSpaces)
      dynamicFilters.push({
        type: "CAR_SPACES",
        strategy: "IS_GREATER_THAN",
        value: String(carSpaces),
      });

    return dynamicFilters.length
      ? {
          filterSet: {
            filterGroups: [{ operand: "AND", filters: dynamicFilters }],
            operand: "AND",
          },
        }
      : {};
  };

  const fetchProperties = useCallback(
    async (filtersFrom = {}, customCount = null) => {
      try {
        setLoading(true);
        const filterSet = buildFilters(filtersFrom);

        const variables = {
          first: customCount !== null ? customCount : visibleCount,
          listingType,
          orderBy,
          status,
          ...filterSet,
        };

        const res = await graphqlRequest(
          "/api/graphql",
          GET_FILTERED_PROPERTIES,
          variables
        );

        const fetchedProps = res?.data?.properties?.nodes || [];
        const info = res?.data?.properties?.pageInfo || {};

        setProperties(fetchedProps);
        setPageInfo(info);
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    },
    [listingType, orderBy, status, visibleCount]
  );

  const loadMore = useCallback(() => {
    if (!loading && pageInfo?.hasNextPage) {
      const newCount = visibleCount + 4;
      setVisibleCount(newCount);
      // Pass the new count directly to fetchProperties
      fetchProperties({}, newCount);
    }
  }, [loading, pageInfo?.hasNextPage, visibleCount, fetchProperties]);

  return { properties, pageInfo, loading, fetchProperties, loadMore };
};
