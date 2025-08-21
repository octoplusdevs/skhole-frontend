import { RegisterForm } from "@/components/ui/auth/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen w-full max-w-[1216px] mx-auto px-5">
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <div className="flex justify-start items-center h-full">
          <Image src="/logo.svg" alt="Logo" width={180} height={200} priority />
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
