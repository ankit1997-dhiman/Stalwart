export const GET_AUCTION_PROPERTY = `
    query GetProperties($filterSet: FilterSetAttributes!) {
    properties(filterSet: $filterSet) {
        nodes {
        id
        formattedAddress
        status
        auctionDatetime
        authority
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
        vendors {
            contact {
            firstName
            lastName
            }
        }
        images {
            url
            position
        }
        }
    }
 }
`;
