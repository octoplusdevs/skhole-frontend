"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { RedirectUser } from "@/components/redirect-user";
import { RenderInput as Input } from "@/(auth)/login/input";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";

const forgotPasswordSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const { mutate: forgotPassword } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      forgotPassword({ email: data.email });
    } catch (err) {
      toast.error("Erro ao enviar e-mail.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full"
    >
      <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
      <p className="text-sm font-medium text-[#8799B5]">
        Enviaremos as instruções para redefinir sua senha para o e-mail
        cadastrado.
        <br />
      </p>
      <div className="flex flex-col gap-2 pb-3">
        <Input
          errorMessage={errors?.email?.message}
          field="email"
          isError={errors.email}
          label="E-mail"
          placeholder="Digite seu e-mail"
          register={register}
          type="email"
        />
      </div>

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar link"}
      </Button>

      <RedirectUser
        link="/login"
        question="Lembrou sua senha?"
        response="Faça login"
      />
    </form>
  );
}
