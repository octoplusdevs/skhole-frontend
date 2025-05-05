"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type RegisterData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      // Chamada à API aqui
      console.log(data);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar conta.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full"
    >
      <h1 className="text-2xl font-bold">Criar conta</h1>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Criando conta..." : "Registrar"}
      </Button>

      <p className="text-sm font-medium text-[#8799B5]">
        Já tem uma conta?{" "}
        <a href="/login" className="text-primary font-bold">
          Faça login
        </a>
      </p>
    </form>
  );
}
