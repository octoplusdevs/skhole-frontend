import { API } from "@/services/data";
import { useQuery } from "@tanstack/react-query";

const useGetLesson = ({ lessonId }: { lessonId: string }) => {
  return useQuery({
    queryKey: ["currentLesson"],
    queryFn: async () => {
      const response = await API.get("/lessons/lesson", {
        params: { lessonId },
      });

      return response.data;
    },
    enabled: !!lessonId,
  });
};

export { useGetLesson };
