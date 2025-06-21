// import { API } from "@/lib/api";
// import { UseMutationResult, useMutation } from "@tanstack/react-query";

// export function useLogin(): UseMutationResult<any, Error, { email: string; password: string }> {
//   return useMutation({
//     mutationFn: async (data) => {
//       const res = await API.post("/auth/login", data);
//       localStorage.setItem("token", res.data.token);
//       return res.data;
//     },
//   });
// }

// hooks/auth/useLogin.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const personalizedToast = (message: string) => {
  return toast(message, {
    position: "top-center",
    style: {
      background: "",
      color: "",
      alignItems: "center",
      justifyContent: "center",
      padding: "2px",
    },
  });
};

export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      try {
        await login(email, password);
        personalizedToast("Sessão iniciada com sucesso 🎉");
      } catch (error) {
        personalizedToast("Credenciais Inválidas");
        throw new Error("Login failed");
      }
    },
    onSuccess: () => {
      router.push("/");
    },
  });
}
