import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";

export function useUserInformation(userId) {
  return useQuery(
    ["account", userId],
    async () => {
      const response = await API.get(`/accounts/${userId}`);
      return response.data;
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(["account", userId]);
      },
    },
  );
}
