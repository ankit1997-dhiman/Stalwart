import { useCallback, useEffect, useState } from "react";
import { graphqlRequest } from "@/utils/graphqlRequest"; // adjust path if needed
import { GET_AGENTS } from "@/queries/agents";
// adjust path if needed

const useFetchAgent = (member, variables) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAgent = useCallback(async () => {
    if (!member) return; // ✅ Prevent unnecessary calls
    setLoading(true);
    setError(null);
    try {
      const res = await graphqlRequest("/api/graphql", GET_AGENTS, variables);
      setData(res);
    } catch (err) {
      console.error("❌ Failed to fetch agent:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [member, variables]);

  useEffect(() => {
    fetchAgent();
  }, [fetchAgent]);

  return { data, loading, error, refetch: fetchAgent };
};

export default useFetchAgent;
