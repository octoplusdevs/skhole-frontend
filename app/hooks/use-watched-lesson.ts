import { API } from "@/services/data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface IWatchedLesson {
  courseId?: string;
  lessonId?: string;
  moduleId?: string;
  timeWatched?: number;
  action: "mark" | "unmark" | "record";
  id?: string;
}

const useWatchedLesson = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IWatchedLesson) => {
      const response = await API.put(`/watched-lessons/${data.id ?? ""}`, data);

      return response.data;
    },
    onSuccess: (data: any) => {
      queryClient.setQueryData(["watchedLesson"], data);
    },
    onError: (error: any) => {
      const errorMessage = error.response.data.details;
      const toastStyle = {
        background: "#f7a622",
        border: "none",
        color: "#000",
      };
      if (
        errorMessage === "You must watch the previous lesson before continuing"
      ) {
        toast(
          "Você precisa concluir a aula anterior para ter acesso a esta aula!",
          { style: toastStyle }
        );
      } else if (
        errorMessage === "It is mandatory to watch at least 95% of the class."
      ) {
        toast("É obrigatório assistir 95% da aula, para marcar como vista", {
          style: toastStyle,
        });
      } else {
        toast("Ocorreu um erro!");
      }
    },
  });
};

export { useWatchedLesson };
