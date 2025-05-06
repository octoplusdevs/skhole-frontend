'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  username: z.string().min(3, 'Mínimo 3 letras'),
  fullName: z.string().min(3, 'Obrigatório'),
  country: z.string().min(2, 'País inválido'),
});

type FormData = z.infer<typeof schema>;

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    shouldUnregister: true,
  });

  const stepRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>();

  useEffect(() => {
    if (stepRef.current) {
      setContainerHeight(stepRef.current.offsetHeight);
    }
  }, [step]);

  const checkEmail = async () => {
    const valid = await trigger('email');
    if (!valid) return;

    const email = getValues('email');
    try {
      const emailExists = false; // simulação
      if (emailExists) {
        toast.error('E-mail já está em uso.');
      } else {
        setStep(2);
      }
    } catch (err) {
      toast.error('Erro ao verificar o e-mail.');
    }
  };

  const nextPassword = async () => {
    const valid = await trigger('password');
    if (valid) {
      setStep(3);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // await api.post('/register', data)
      toast.success('Conta criada!');
      router.push(`/verificacao-email?email=${data.email}`);
    } catch (err) {
      toast.error('Erro ao criar conta.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-[400px] bg-secondary px-8 py-10 rounded-lg flex flex-col"
    >
      <h1 className="text-2xl font-bold mb-4">Criar conta</h1>

      <div
        className="relative transition-all duration-500"
        style={{ height: containerHeight }}
      >
        {/* Step 1 */}
        <div
          ref={step === 1 ? stepRef : null}
          className={`absolute top-0 left-0 flex flex-col gap-2 w-full transition-all duration-500 ${step === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="Digite seu e-mail"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
          <Button type="button" className="mt-4 w-full" onClick={checkEmail}>
            Verificar e continuar
          </Button>
        </div>

        {/* Step 2 */}
        <div
          ref={step === 2 ? stepRef : null}
          className={`absolute top-0 left-0 w-full flex flex-col gap-2 transition-all duration-500 ${step === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Crie sua senha"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <Button type="button" className="mt-4 w-full" onClick={nextPassword}>
            Continuar
          </Button>
        </div>

        {/* Step 3 */}
        <div
          ref={step === 3 ? stepRef : null}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ${step === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col gap-3">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input
              id="username"
              {...register('username')}
              placeholder="Usuário"
            />
            {errors.username && (
              <span className="text-sm text-red-500">
                {errors.username.message}
              </span>
            )}

            <Label htmlFor="fullName">Nome completo</Label>
            <Input
              id="fullName"
              {...register('fullName')}
              placeholder="Nome completo"
            />
            {errors.fullName && (
              <span className="text-sm text-red-500">
                {errors.fullName.message}
              </span>
            )}

            <Label htmlFor="country">País</Label>
            <Input
              id="country"
              {...register('country')}
              placeholder="Angola"
            />
            {errors.country && (
              <span className="text-sm text-red-500">
                {errors.country.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Criando...' : 'Criar conta'}
          </Button>
        </div>
      </div>

      <p className="text-sm font-medium text-[#8799B5]">
        Já tem uma conta?{' '}
        <a href="/login" className="text-primary font-bold">
          Faça login
        </a>
      </p>
    </form>
  );
}
