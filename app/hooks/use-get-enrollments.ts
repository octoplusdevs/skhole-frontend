import { API } from "@/services/data";
import { IPagination } from "@/utils/interfaces/pagination-schema";
import { useQuery } from "@tanstack/react-query";

export const useGetEnrollments = ({ limit, page }: IPagination) => {
  return useQuery({
    queryKey: ["enrolledCourses"],
    queryFn: async () => {
      const newCourses = await API.get("/students/courses", {
        params: { limit, page },
      });

      return newCourses.data;
    },
  });
};
