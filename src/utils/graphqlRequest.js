// src/utils/graphqlRequest.js
import { message } from "antd";
import api from "./api";

/**
 * Reusable GraphQL request function
 * @param {string} query - GraphQL query or mutation
 * @param {object} variables - GraphQL variables (optional)
 */
export const graphqlRequest = async (query, variables = {}) => {
  try {
    const response = await api.post("", { query, variables });
    // console.log(response, query, variables, "sdfasdf");
    return response.data; // contains { data, errors }
  } catch (error) {
    message.error("GraphQL Error:", error.response?.data || error.message);
    throw error;
  }
};
