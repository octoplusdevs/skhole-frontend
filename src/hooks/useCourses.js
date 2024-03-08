import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useCourses() {
  return useQuery(["courses"], async () => {
    const response = await API.get(`/courses`);
    return response.data;
  });
}
export function useCourse(slug_course) {
  return useQuery([slug_course], async () => {
    const response = await API.get(`/courses/${slug_course}`);
    return response.data;
  });
}
