import { API } from "@/services/data";
import { ICourse } from "@/utils/interfaces/course";
import { IPagination } from "@/utils/interfaces/pagination-schema";
import { useQuery } from "@tanstack/react-query";

export type CoursesResponse = {
  courses: ICourse[];
  page: number;
  total: number;
  totalPages: number;
  totalResults: number;
};

const useGetCourse = ({ limit, page }: IPagination) => {
  return useQuery<CoursesResponse>({
    queryKey: ["courses", page, limit],
    queryFn: async () => {
      const response = await API.get<CoursesResponse>(
        `/courses?limit=${limit}&page=${page}`
      );
      return response.data;
    },
  });
};

export { useGetCourse };
