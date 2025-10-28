export const GET_PROPERTY_BY_ID = `query GetSaleProperties($ids: [ID!], $first: Int, $status: [PropertyStatusEnum!]) {
  properties(first: $first, status: $status, orderBy: CREATED_AT_DESC, ids: $ids) {
    totalCount
    nodes {
      id
      price
      formattedAddress
      status
      saleOrLease
      advertisedPrice
      latitude
      longitude
      street
      headline
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
      agents {
        id
        name
        avatarUrl
        email
        phone
        mobile
      }
      inspections {
        nodes {
          id
          finish
          start
        }
      }
      floorplans {
        url
        id
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
}`;
