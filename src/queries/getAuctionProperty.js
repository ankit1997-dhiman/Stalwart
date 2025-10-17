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
