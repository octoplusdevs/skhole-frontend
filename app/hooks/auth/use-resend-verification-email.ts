import { API } from "@/services/data";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useResendVerificationEmail = () => {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const response = await API.post("/users/resend-verification-token", {
        email,
      });
      return response.data;
    },
    onSuccess: () => {
      try {
        toast("E-mail renviado com sucesso");
      } catch (error) {
        toast.error("Erro ao renviar e-mail");
      }
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data.details;

      if (errorMessage === "The user was not found.") {
        toast.error("E-mail não encontrado");
      } else if (errorMessage === "The user already verified error.") {
        toast.error("Este e-mail já foi verificado");
      } else if (errorMessage === "Tente novamente mais tarde.") {
        toast.error("Tente novamente mais tarde.");
      } else if (error.message === "Network Error") {
        toast("Sem acesso a internet", {
          description: "Verifique a sua internet!",
        });
      }
    },
  });
};

export { useResendVerificationEmail };
