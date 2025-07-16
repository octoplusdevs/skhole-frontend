import { API } from "@/services/data";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useGetEnrollments = () => {
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["enrolledCourses"],
    queryFn: async () => {
      const newCourses = await API.get("/students/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return newCourses.data;
    },
  });
};
