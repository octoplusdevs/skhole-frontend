"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending, error } = useLogin();

  return (
    <div className="space-y-6 flex bg-amber-200 w-full justify-between max-w-[1216px] mx-auto max-h-[470px] h-full">
      <div className="flex-1 h-full">
        <h1 className="text-2xl font-bold">Log in to your account</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ email, password });
        }}
        className="space-y-4 bg-secondary px-8 py-8 rounded-[8px] w-full flex-1 h-full"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            placeholder="Email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Entrando..." : "Entrar"}
        </Button>
        {error && <p className="text-red-500">Erro ao fazer login</p>}
      </form>
    </div>
  );
}
