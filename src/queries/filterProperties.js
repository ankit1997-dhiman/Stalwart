export const GET_FILTERED_PROPOERTIES = `query GetFilteredProperties($first: Int, $filterSet: FilterSetAttributes, $status: [PropertyStatusEnum!]) {
  properties(first: $first, filterSet: $filterSet, status: $status) {
    totalCount
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
      status
       images {
        url
      }
    }
  }
}`;
