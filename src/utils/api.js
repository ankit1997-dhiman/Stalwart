import axios from "axios";

const api = axios.create({
  baseURL: "http://srv1034383.hstgr.cloud:3001/api/graphql", // GraphQL endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
