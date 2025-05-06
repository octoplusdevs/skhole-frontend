'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Image from 'next/image';

const schema = z
  .object({
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

export default function ResetPasswordForm() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

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
        toast.error('Token inválido ou ausente.');
        return;
      }

      // await api.post('/reset-password', { token, newPassword: data.password });
      toast.success('Senha alterada com sucesso!');
      push('/login');
    } catch (err) {
      toast.error('Erro ao redefinir a senha.');
    }
  };

  return (

    <div className="flex justify-center items-center h-screen w-full max-w-[1216px] mx-auto">
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <div className="flex justify-start items-center h-full">
          <Image src="/logo.svg" alt="Logo" width={180} height={200} className=" " priority />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[400px] flex flex-col gap-2 mx-auto bg-secondary p-8 rounded-lg space-y-4"
        >
          <h2 className="text-2xl font-bold">Criar nova senha</h2>

          <div className='flex flex-col gap-2'>
            <Label htmlFor="password">Nova senha</Label>
            <Input
              type="password"
              id="password"
              {...register('password')}
              placeholder="Nova senha"
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              placeholder="Confirme a senha"
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Redefinindo...' : 'Redefinir senha'}
          </Button>
        </form>
      </div>
    </div>

  );
}
