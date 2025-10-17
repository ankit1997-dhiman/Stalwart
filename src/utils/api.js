import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL, "base url");
const api = axios.create({
  // baseURL: "http://localhost:3002/api/graphql",
  baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
