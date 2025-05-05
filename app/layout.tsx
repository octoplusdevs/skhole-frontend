import { AuthProvider } from "./context/auth-context";
import { ReactQueryProvider } from "./components/providers/react-query-provider";
import 'styles/globals.css';
import { Toaster } from "sonner";

export const metadata = {
  title: 'Skholé',
  description: 'Plataforma de ensino digital em Angola',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
