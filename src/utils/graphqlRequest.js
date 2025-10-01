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
    return response.data; // contains { data, errors }
  } catch (error) {
    message.error(error.response?.data?.errors?.[0]?.message || error.message);
    throw error;
  }
};

