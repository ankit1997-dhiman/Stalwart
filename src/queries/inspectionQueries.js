export const GET_UPCOMING_INSPECTION = `query GetSaleProperties($ids: [ID!], $first: Int, $status: [PropertyStatusEnum!]) {
  properties(first: $first, status: $status, orderBy: CREATED_AT_DESC, ids: $ids) {
    totalCount
    nodes {
      id
      price
      formattedAddress
      status
      saleOrLease
      advertisedPrice
      createdAt
      updatedAt
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
      inspections {
        nodes {
          id
          finish
          start
        }
      }
      images {
        url
      }
    }
  }
}
`;
