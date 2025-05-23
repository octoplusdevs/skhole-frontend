import { useMutation, useQueryClient } from "@tanstack/react-query";

const UseGetCourseLessons = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ course }: { course: any }) => {
      return course;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["currentCourse"], data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export { UseGetCourseLessons };
