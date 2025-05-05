'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try {
      // Aqui você chama sua API de login
      console.log(data);
      toast.success("Login efetuado com sucesso!");
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

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-sm text-red-500">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register('password')}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>

      <p className="text-sm font-medium text-[#8799B5]">
        Esqueceu sua senha?{' '}
        <a href="/forgot-password" className="text-primary font-bold">
          Recuperar senha
        </a>
      </p>

      <p className="text-sm font-medium text-[#8799B5]">
        Ainda não tem uma conta?{' '}
        <a href="/register" className="text-primary font-bold">
          Criar conta
        </a>
      </p>
    </form>
  );
}
