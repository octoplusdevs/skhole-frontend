import { AuthProvider } from "./context/auth-context";
import { ReactQueryProvider } from "./components/providers/react-query-provider";
import 'styles/globals.css';
import { Toaster } from "sonner";
import { inter } from "./fonts/fonts";

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
          <AuthProvider>{children}</AuthProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
