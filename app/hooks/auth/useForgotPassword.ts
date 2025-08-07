import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { API } from "@/services/data";

export function useForgotPassword() {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const response = await API.post("/users/request-password-reset", {
        email,
      });
      return response.data;
    },
    onSuccess: () => {
      toast("Email enviado", {
        description: "Verifique sua caixa de entrada para redefinir a senha.",
      });
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data.details;

      if (errorMessage === "The user was not found.") {
        toast.error("E-mail não encontrado");
      } else if (error.message === "Network Error") {
        toast("Sem acesso a internet", {
          description: "Verifique a sua internet!",
        });
      }
    },
  });
}
