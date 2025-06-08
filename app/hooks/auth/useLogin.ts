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
        console.log("Login successful");

      } catch (error) {
        console.error("Login failed:", error);
        throw new Error("Login failed");

      }
    },
    onSuccess: () => {
      router.push("/learn");
    },
  });
}
