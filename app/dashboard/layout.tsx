"use client";
import Header from "@/components/ui/header/header";
import { useAuth } from "@/context/auth-context";
import { useGetItemLocalStorage } from "@/hooks/localStorage/useGetItemLocalStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const currentPage = useGetItemLocalStorage("currentPage");
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (currentPage) {
        router.push(currentPage);
      }
    }
  }, [loading, user, currentPage, router]);

  if (loading || !user) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      {children}
    </main>
  );
}
