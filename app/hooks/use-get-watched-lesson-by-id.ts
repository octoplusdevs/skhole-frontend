import { API } from "@/services/data";
import { IWatchedLesson } from "@/utils/interfaces/course";
import { useQuery } from "@tanstack/react-query";

interface IWatchedLessonById {
  courseId?: string;
  lessonId?: string;
  moduleId?: string;
  id?: string;
}

const useGetWatchedLessonById = (params: IWatchedLessonById) => {
  return useQuery({
    queryKey: ["currentWatchedLesson"],
    queryFn: async (): Promise<IWatchedLesson | null> => {
      const response = await API.get("/watched-lesson", {
        params,
      });
      return response.data?.watchedLesson;
    },
    enabled: !!params,
  });
};

export { useGetWatchedLessonById };
