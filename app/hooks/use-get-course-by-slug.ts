import { API } from "@/services/data";
import { ICourse } from "@/utils/interfaces/course";
import { useQuery } from "@tanstack/react-query";

const useGetCourseBySlug = ({
  slug,
  enabled,
}: {
  slug: string;
  enabled?: boolean | any;
}) => {
  return useQuery({
    queryKey: ["currentCourse"],
    queryFn: async (): Promise<ICourse | null> => {
      const response = await API.get(`/courses/slug/${slug}`);
      return response.data;
    },
    enabled,
  });
};

export { useGetCourseBySlug };
