"use client";

import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IUseLogin {
  email: string;
  password: string;
}

const personalizedToast = (message: string, bg?: string) => {
  return toast(message, {
    position: "bottom-center",
    style: {
      background: bg ?? "",
      color: "",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px",
      border: "none",
    },
  });
};

export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ email, password }: IUseLogin) => {
      try {
        await login(email, password);
        personalizedToast("Sessão iniciada com sucesso 🎉", "#bbf722");
        router.push("/");
      } catch (error) {
        if (error.message === "Network Error") {
          toast("Sem acesso a internet", {
            description: "Verifique a sua internet!",
          });
        } else {
          personalizedToast("Credenciais Inválidas");
        }
        throw new Error("Login failed");
      }
    },
  });
}
