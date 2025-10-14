import axios from "axios";

const api = axios.create({
  // baseURL: " https://e7a133872ebf.ngrok-free.app", // GraphQL endpoint
  baseURL: import.meta.env.VITE_BASE_URL, // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
