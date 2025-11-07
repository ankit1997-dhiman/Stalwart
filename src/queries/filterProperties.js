export const GET_FILTERED_PROPERTIES = `query GetFilteredProperties($first: Int, $filterSet: FilterSetAttributes, $status: [PropertyStatusEnum!], $orderBy: PropertyOrderEnum, $listingType: [ListingTypeEnum!]) {
  properties(
    first: $first
    filterSet: $filterSet
    status: $status
    orderBy: $orderBy
    listingType: $listingType
  ) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      formattedAddress
      status
      saleOrLease
      advertisedPrice
      address {
        street
        postcode
      }
      listingDetails {
        ... on ResidentialSale {
          bedrooms
          bathrooms
          carportSpaces
          garageSpaces
          openCarSpaces
        }
        ... on ResidentialRental {
          bedrooms
          bathrooms
          carportSpaces
          garageSpaces
          openCarSpaces
        }
      }
      price
      images {
        url
        position
      }
    }
  }
}
`;
