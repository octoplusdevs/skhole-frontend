"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import { useResetPassword } from "@/hooks/auth/use-reset-password";
import { RenderInput as Input } from "../login/input";
import { schema, FormData } from "./schema";

export default function ResetPasswordForm() {
  const { mutate: resetPassword } = useResetPassword();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (!token) {
        toast.error("Token inválido ou ausente.");
        return;
      }
      resetPassword({ token, newPassword: data.password });
    } catch (err) {
      toast.error("Erro ao redefinir a senha.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full max-w-[1216px] mx-auto px-5">
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <div className="flex justify-start items-center h-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={180}
            height={200}
            className=" "
            priority
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[400px] flex flex-col gap-2 mx-auto bg-secondary p-8 rounded-lg space-y-4"
        >
          <h2 className="text-2xl font-bold">Criar nova senha</h2>

          <Input
            errorMessage={errors?.password?.message}
            isError={errors.password}
            label="Nova senha"
            placeholder="Nova senha"
            register={register}
            type="password"
            field="password"
          />

          <Input
            errorMessage={errors?.confirmPassword?.message}
            isError={errors.confirmPassword}
            label="Confirmar senha"
            placeholder="Confirme a senha"
            register={register}
            type="password"
            field="confirmPassword"
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Redefinindo..." : "Redefinir senha"}
          </Button>
        </form>
      </div>
    </div>
  );
}
