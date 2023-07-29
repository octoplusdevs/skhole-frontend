import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useUserInformation(userId) {
  return useQuery(["account", userId], async () => {
    const response = await API.get(`/accounts/${userId}`);
    return response.data;
  });
}
