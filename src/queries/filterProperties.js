export const GET_FILTERED_PROPOERTIES = `query GetFilteredProperties($first: Int, $filterSet: FilterSetAttributes, $status: [PropertyStatusEnum!]) {
  properties(first: $first, filterSet: $filterSet, status: $status) {
    totalCount
    nodes {
      id
      formattedAddress
      address {
        street
        postcode
      }
      listingDetails {
        ... on ResidentialSale {
          bedrooms
          bathrooms
        }
        ... on ResidentialRental {
          bedrooms
          bathrooms
        }
      }
      price
      status
       images {
        url
      }
    }
  }
}`;
