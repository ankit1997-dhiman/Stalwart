export const FILTER_SUBURB_AND_STATUS = `query GetProperties($filterSet: FilterSetAttributes!) {
  properties(filterSet: $filterSet) {
    nodes {
      id
      formattedAddress
      status
      address {
        postcode {
          ... on PostcodeAustralia {
            suburb
          }
        }
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
      vendors {
        contact {
          firstName
          lastName
        }
      }
      images {
        url
      }
    }
  }
}
`;
