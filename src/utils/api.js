import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:3001/api/graphql",  // GraphQL endpoint
  // baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
