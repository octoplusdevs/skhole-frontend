import { API } from "@/services/data";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IUseResetPassword {
  token: string;
  newPassword: string;
}

const useResetPassword = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (data: IUseResetPassword) => {
      const response = await API.post("/users/reset-password", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Senha alterada com sucesso!");
      push("/login");
    },
    onError: (error: any) => {
      const errorMessage = error?.response?.data?.details;
      if (errorMessage === "The token is invalid.") {
        toast.error("Token Inválido");
      } else if (error.message === "Network Error") {
        toast("Sem acesso a internet", {
          description: "Verifique a sua internet!",
        });
      }
    },
  });
};

export { useResetPassword };
