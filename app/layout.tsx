import { AuthProvider } from "./context/auth-context";
import { ReactQueryProvider } from "./components/providers/react-query-provider";
import "styles/globals.css";
import { Toaster } from "sonner";
import { inter } from "./fonts/data";

export const metadata = {
  title: "Skholé",
  description: "Plataforma de ensino digital em Angola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthProvider>
            <main className="overflow-x-hidden">
              {children}
            </main>
          </AuthProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
