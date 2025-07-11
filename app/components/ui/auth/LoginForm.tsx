"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import { RenderInput as Input } from "@/(auth)/login/input";
import { RedirectUser } from "@/components/redirect-user";
import { LoginData, loginSchema } from "@/(auth)/login/interface";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate } = useLogin();

  const onSubmit = async (data: LoginData) => {
    try {
      mutate(data);
    } catch (err) {
      toast.error("Erro ao fazer login.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full"
    >
      <h1 className="text-2xl font-bold">Entrar</h1>
      <p className="text-sm font-medium text-[#8799B5]">
        Acesse sua conta com seu e-mail e senha.
      </p>

      <div className="flex flex-col gap-6 pb-2">
        <Input
          errorMessage={errors?.email?.message}
          isError={errors.email}
          label="E-mail"
          placeholder="Digite seu e-mail"
          register={register}
          type="email"
        />
        <Input
          errorMessage={errors?.password?.message}
          isError={errors.password}
          label="Senha"
          placeholder="Digite sua senha"
          register={register}
          type="password"
        />
      </div>

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>

      <RedirectUser
        question="Esqueceu sua senha?"
        response="Recuperar senha"
        link="/forgot-password"
      />
      <RedirectUser
        question="Ainda não tem uma conta?"
        response="Criar conta"
        link="/register"
      />
    </form>
  );
}
