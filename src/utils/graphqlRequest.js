// src/utils/graphqlRequest.js
import api from "./api";

/**
 * Reusable GraphQL request function
 * @param {string} query - GraphQL query or mutation
 * @param {object} variables - GraphQL variables (optional)
 */
export const graphqlRequest = async (query, variables = {}) => {
  try {
    const response = await api.post("", { query, variables });
    return response.data; // contains { data, errors }
  } catch (error) {
    console.error("GraphQL Error:", error.response?.data || error.message);
    throw error;
  }
};
