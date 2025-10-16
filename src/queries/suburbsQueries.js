export const GET_ALL_SUBURBS = `query GetAllSuburbs($status: [PropertyStatusEnum!]) {
            properties(status: $status) {
              nodes {
                status
                address {
                  postcode {
                    ... on PostcodeAustralia {
                      suburb
                    }
                  }
                }
              }
            }
          }`;
