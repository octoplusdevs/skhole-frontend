import { useQuery } from "react-query";
import { API } from "../services/api";

export function useUserInformation(userId) {
  return useQuery(["userInformation", userId], async () => {
    const response = await API.get(`/accounts/${userId}`);
    return response.data;
  });
}
