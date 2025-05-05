import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { ForgotPasswordSchema } from "@/schemas/authSchema";

export function useForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordSchema) => {
      const response = await axios.post("/api/auth/forgot-password", data);
      return response.data;
    },
    onSuccess: () => {
      toast("Email enviado",{
        description: "Verifique sua caixa de entrada para redefinir a senha.",
      });
    },
    onError: (error: any) => {
      toast("Erro",{
        description:
          error?.response?.data?.message || "Ocorreu um erro. Tente novamente.",
      });
    },
  });
}
