import { API } from "@/services/data";
import { IWatchedLesson } from "@/utils/interfaces/course";
import { useQuery } from "@tanstack/react-query";

const useGetWatchedLesson = (params: { courseId: string; userId: string }) => {
  return useQuery({
    queryKey: ["watchedLesson", params],
    queryFn: async (): Promise<IWatchedLesson[] | []> => {
      const response = await API.get("/watched-lessons", {
        params,
      });
      return response.data?.watchedLessons;
    },
    enabled: !!params,
  });
};

export { useGetWatchedLesson };
