"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, error } = useLogin();

  return (
    <div className="flex w-full justify-center max-w-[1216px] mx-auto items-center h-screen flex-column ">
      <div className="flex flex-col w-full max-w-[420px] p-2 gap-1">
        <div className="flex-1 flex justify-start items-start h-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            priority
            className="w-full h-auto object-contain size-6 scale-50"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate({ email, password });
          }}
          className="space-y-4 bg-secondary px-13 py-10 rounded-[8px] w-full flex-1 h-full"
        >
          <h1 className="text-2xl font-bold">Bem-vindo ao Skholé</h1>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              placeholder="Email"
              className="h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Senha</Label>
            <Input
              type="password"
              placeholder="Senha"
              className="h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d">
            <Link href="/auth/forgot-password">
              <p className="text-sm text-left text-primary hover:underline">
                Esqueci minha senha
              </p>
            </Link>
          </div>
          <Button type="submit" className="w-full h-10" disabled={isPending}>
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
          <div className="d">
            <Link className="text-sm flex gap-1 items-center" href="/auth/register">
              Novo na Skholé?{" "}<p className="text-left text-primary hover:underline">Cria uma conta
              </p>
            </Link>
          </div>
          {error && <p className="text-red-500">Erro ao fazer login</p>}
        </form>
      </div>
    </div>
  );
}
