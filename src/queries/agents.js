export const GET_AGENTS = `query GetSaleProperties() {
  properties() {
    totalCount
      agents {
        id
        name
        avatarUrl
        email
        phone
        mobile
      }
    }
  }
}`;
