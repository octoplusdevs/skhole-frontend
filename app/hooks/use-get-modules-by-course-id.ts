import { API } from "@/services/data";
import { CourseModule } from "@/utils/interfaces/course";
import { useQuery } from "@tanstack/react-query";

const useGetModulesByCourseId = ({
  courseId,
  enabled,
}: {
  courseId: string;
  enabled?: boolean | any;
}) => {
  return useQuery({
    queryKey: ["currentCourseModule"],
    queryFn: async (): Promise<CourseModule[] | []> => {
      const response = await API.get(`/courses/${courseId}/modules`);
      return response.data;
    },
    enabled,
  });
};

export { useGetModulesByCourseId };
