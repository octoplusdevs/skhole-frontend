import { API } from "@/services/data";
import { IPagination } from "@/utils/interfaces/pagination-schema";
import { useQuery } from "@tanstack/react-query";

const useGetCourse = ({ limit, page }: IPagination) => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await API.get(`/courses?limit=${limit}&page=${page}`);
      return response.data;
    },
  });
};

export { useGetCourse };
