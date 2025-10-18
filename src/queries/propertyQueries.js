export const GET_SALE_PROPERTIES = `
  query GetSaleProperties($status: [PropertyStatusEnum!]) {
    properties(
      status: $status
    ) {
      nodes {
        id
        price
        formattedAddress
        status
        saleOrLease
        advertisedPrice
        latitude
        longitude
        description
        featured
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
        vendors {
          contact {
            firstName
            lastName
          }
        }
        images{
          url
          position
        }
      }
    }
  }
`;
