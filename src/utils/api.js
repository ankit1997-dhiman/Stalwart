import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL, "base url");
const api = axios.create({
<<<<<<< HEAD
  // baseURL: "http://72.60.76.204/api/graphql", // GraphQL endpoint
=======
  // baseURL: "http://localhost:3002/api/graphql", 
>>>>>>> b736b2ebd487e1e7b5efd582db874f665d221b9d
  baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
