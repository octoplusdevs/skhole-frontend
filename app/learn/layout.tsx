"use client";
import Header from "@/components/ui/header/header";
import { useAuth } from "@/context/auth-context";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const currentPage = getItemLocalStorage("currentPage");
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
