import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3002/api/graphql",
  baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


// // src/utils/api.js
// import axios from "axios";
// import { message } from "antd";

// /**
//  * Unified API caller function
//  * Handles REST + GraphQL requests dynamically.
//  *
//  * @param {object} options
//  * @param {string} options.endpoint - API endpoint (e.g. "/api/graphql" or "/api/send-email")
//  * @param {string} [options.method="POST"] - HTTP method ("GET", "POST", etc.)
//  * @param {object} [options.data={}] - Payload for REST or variables for GraphQL
//  * @param {string} [options.query] - GraphQL query (if applicable)
//  * @param {string} [options.baseURL=import.meta.env.VITE_BASE_URL] - Custom base URL (optional)
//  * @returns {Promise<object>} - API response
//  */
// export const apiRequest = async ({
//   endpoint,
//   method = "POST",
//   data = {},
//   query,
//   baseURL = import.meta.env.VITE_BASE_URL,
// }) => {
//   try {
//     const api = axios.create({
//       baseURL,
//       headers: { "Content-Type": "application/json" },
//     });

//     let payload = data;

//     // If it's a GraphQL request, structure the body accordingly
//     if (query) {
//       payload = { query, variables: data };
//     }

//     const response = await api.request({
//       url: endpoint,
//       method,
//       data: payload,
//     });

//     return response.data;
//   } catch (error) {
//     const errorMessage =
//       error.response?.data?.errors?.[0]?.message || // GraphQL error
//       error.response?.data?.message || // REST API error
//       error.message;

//     // message.error(errorMessage);
//     console.log(errorMessage + " <<<<<<<<<<<<");
//     throw error;
//   }
// };
// export default apiRequest;
