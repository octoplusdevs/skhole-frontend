"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { RenderInput as Input } from "@/(auth)/login/input";
import { RedirectUser } from "@/components/redirect-user";
import { useGetUserByEmail } from "@/hooks/users/use-get-user-by-email";
import { useRegister } from "@/hooks/auth/useRegister";

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  username: z.string().min(3, "Mínimo 3 letras"),
  fullName: z.string().min(3, "Obrigatório"),
  country: z.string().min(2, "País inválido"),
});

type FormData = z.infer<typeof schema>;

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const { mutateAsync: findEmail } = useGetUserByEmail();
  const { mutate: registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
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
    const valid = await trigger("email");
    if (!valid) return;

    const email = getValues("email");

    try {
      const user = await findEmail({ email });
      if (user) {
        toast.error("Este e-mail já está em uso.");
      }
    } catch (err: any) {
      if (err?.response?.status === 500) {
        setStep(2);
      } else {
        toast.error("Erro ao verificar o e-mail.");
      }
    }
  };

  const nextPassword = async () => {
    const valid = await trigger("password");
    if (valid) {
      setStep(3);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      registerUser(data);
    } catch (err) {
      toast.error("Erro ao criar conta.");
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
          className={`flex flex-col gap-2 w-full transition-all duration-500 ${
            step === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Input
            errorMessage={errors?.email?.message}
            isError={errors.email}
            label="E-mail"
            placeholder="Digite seu e-mail"
            register={register}
            field="email"
            type="email"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                checkEmail();
              }
            }}
          />
          <Button type="button" className="mt-4 w-full" onClick={checkEmail}>
            Verificar e continuar
          </Button>
        </div>

        {/* Step 2 */}
        <div
          ref={step === 2 ? stepRef : null}
          className={`absolute top-0 left-0 w-full flex flex-col gap-2 transition-all duration-500 ${
            step === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Input
            errorMessage={errors?.password?.message}
            isError={errors.password}
            label="Senha"
            placeholder="Crie sua senha"
            register={register}
            type="password"
            field="password"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                nextPassword();
              }
            }}
          />
          <Button type="button" className="mt-4 w-full" onClick={nextPassword}>
            Continuar
          </Button>
        </div>

        {/* Step 3 */}
        <div
          ref={step === 3 ? stepRef : null}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ${
            step === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-5 pb-3">
            <Input
              errorMessage={errors?.username?.message}
              isError={errors.username}
              label="Nome de usuário"
              placeholder="Usuário"
              register={register}
              type="text"
              field="username"
            />
            <Input
              errorMessage={errors?.fullName?.message}
              isError={errors.fullName}
              label="Nome completo"
              placeholder="Nome completo"
              register={register}
              type="text"
              field="fullName"
            />

            <Input
              errorMessage={errors?.country?.message}
              isError={errors.country}
              label="País"
              placeholder="Angola"
              register={register}
              type="text"
              field="country"
            />
          </div>

          <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Criando..." : "Criar conta"}
          </Button>
        </div>
      </div>

      <RedirectUser
        link="/login"
        question="Já tem uma conta?"
        response="Faça login"
      />
    </form>
  );
}
