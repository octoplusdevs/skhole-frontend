import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useUserEnrollments() {
  return useQuery(["enrollments"], async () => {
    const response = await API.get(`/accounts/courses`);
    return response.data;
  });
}
