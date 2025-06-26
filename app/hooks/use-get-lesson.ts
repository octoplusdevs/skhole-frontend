import { API } from "@/services/data";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const UseGetLesson = ({ lessonId }: { lessonId: string }) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["currentLesson"],
    queryFn: async () => {
      const response = await API.get("/lessons/lesson", {
        params: { lessonId },
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    },
    enabled: !!lessonId,
  });
};

export { UseGetLesson };
