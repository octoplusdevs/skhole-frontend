import { useQuery } from "react-query";
import { API } from "../services/api";

export function useModules(slug_course) {
  return useQuery(["modules", slug_course], async () => {
    if (!slug_course) {
      return null;
    }

    const response = await API.get(`/modules/course/${slug_course}`);
    return response.data;
  });
}
