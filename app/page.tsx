"use client";
import { useAuth } from "./context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "./components/ui/progress";
import { useCount } from "./hooks/useCount";
import { getItemLocalStorage } from "./utils/localStorage/get-item-local-storage";

export default function Home() {
  const { user, loading } = useAuth();
  const { count } = useCount();
  const currentPage = getItemLocalStorage("currentPage");
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
