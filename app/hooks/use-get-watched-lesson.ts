import { API } from "@/services/data";
import { IWatchedLesson } from "@/utils/interfaces/course";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const UseGetWatchedLesson = ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["watchedLesson", courseId, userId],
    queryFn: async (): Promise<IWatchedLesson[] | []> => {
      const response = await API.get("/watched-lesson", {
        params: {
          courseId,
          userId,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data?.watchedLessons;
    },
    enabled: !!courseId && !!userId,
  });
};
