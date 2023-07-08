import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useCourses() {
  return useQuery(["courses"], async () => {
    const response = await API.get(`/courses`);
    return response.data;
  });
}
