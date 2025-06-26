"use client";
import Header from "@/components/ui/header/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {children}
    </main>
  );
}
