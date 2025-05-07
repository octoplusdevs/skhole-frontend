"use client";
import { useAuth } from "./context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetItemLocalStorage } from "./hooks/localStorage/useGetItemLocalStorage";
import { Progress } from "./components/ui/progress";
import { useCount } from "./hooks/useCount";

export default function Home() {
  const { user, loading } = useAuth();
  const { count } = useCount();
  const currentPage = useGetItemLocalStorage("currentPage");
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else {
        router.push(currentPage);
      }
    }
  }, [loading, user, currentPage, router]);

  if (loading) {
    return <Progress value={count} />;
  }

  return null;
}
