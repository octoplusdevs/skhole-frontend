"use client";

import { Button } from "@/components/ui/button";
import { useResendVerificationEmail } from "@/hooks/auth/use-resend-verification-email";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function EmailVerificationPage() {
  const { mutate: resendVerificationEmail } = useResendVerificationEmail();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="flex justify-center items-center h-screen w-full px-4">
      <div className="flex flex-col gap-2">
        <Image src="/logo.svg" alt="Logo" width={180} height={200} priority />
        <div className="bg-secondary rounded-lg p-8 max-w-[586px] w-full text-start space-y-4">
          <h1 className="text-xl font-bold">Verificação de e-mail pendente</h1>
          <p className="text-sm text-muted-foreground">
            Um e-mail foi enviado para <br />{" "}
            <strong className="text-white">{email}</strong>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Não recebeu o e-mail?
            </p>
            <Button
              className="text-primary font-semibold hover:underline bg-transparent text-[18px] hover:bg-transparent"
              onClick={() => {
                if (email) {
                  resendVerificationEmail({ email });
                }
              }}
            >
              Reenviar verificação de e-mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
