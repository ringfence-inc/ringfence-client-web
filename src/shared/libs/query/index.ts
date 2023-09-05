import { QueryClient, QueryCache } from "@tanstack/react-query";

export const queryCache = new QueryCache();

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
