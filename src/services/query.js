import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 40 * (60 * 1000), // 40 mins
      cacheTime: 45 * (60 * 1000), // 45 mins
    },
  },
});
