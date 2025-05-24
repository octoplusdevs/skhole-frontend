import { useMutation, useQueryClient } from "@tanstack/react-query";

const UseGetLesson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ lesson }: { lesson: any }) => lesson,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentLesson"], data);
    },
  });
};

export { UseGetLesson };
