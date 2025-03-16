import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @param {object} options - Additional options (queryKey, config)
 */
export const useApi = (endpoint, method = "GET", options = {}) => {
  const queryClient = useQueryClient();
  const queryKey = options.queryKey || [endpoint];

  const queryResult = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.get(endpoint);
      return response.data;
    },
    enabled: method === "GET" && !!endpoint,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 2, // Retry failed requests twice
    ...options.config, // Allow additional configs
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const response = await api({
        method,
        url: endpoint,
        data: payload,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {
      console.error("API Error:", error.response?.data || error.message);
    },
  });

  return {
    ...queryResult, 
    mutate: mutation.mutate, 
    isMutating: mutation.isPending, 
    error: mutation.isError,
  };
};
