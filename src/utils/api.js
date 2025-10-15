import axios from "axios";

const api = axios.create({
  baseURL: "http://72.60.76.204/api/graphql", // GraphQL endpoint
  // baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
