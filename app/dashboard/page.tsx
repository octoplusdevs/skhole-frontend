"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) return <p>Carregando...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Bem-vindo, {user.name}</h1>
      <button onClick={logout} className="mt-4 underline text-red-500">
        Sair
      </button>
    </div>
  );
}
