import Header from "@/components/ui/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {children}
    </main>
  );
}
