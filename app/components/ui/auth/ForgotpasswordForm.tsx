'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const forgotPasswordSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      // Aqui você pode chamar sua API ou função
      console.log(data);
      toast.success("Link de recuperação enviado!");
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
        Enviaremos as instruções para redefinir sua senha para o e-mail cadastrado.
        <br />
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

      <Button type="submit" className="w-full h-10" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar link"}
      </Button>
      <p className="text-sm font-medium text-[#8799B5]">
        Lembrou sua senha?{' '}
        <a href="/login" className="text-primary font-bold">
          Faça login
        </a>
      </p>
    </form>
  );
}
