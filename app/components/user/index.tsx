import Image from "next/image";
import { IUser } from "./interface";

export const User = ({ email, name, role }: IUser) => {
  return (
    <div className="flex gap-2">
      <Image
        alt="user"
        src="/user.png"
        width={48}
        height={48}
        className="w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px] object-contain"
      />
      <div className="hidden flex-col gap-1 lg:flex">
        <p className="font-semibold text-[16px]">
          {name.split(" ")[0] || "Visitante"}
        </p>
        <span className="text-primary font-medium text-[12px]">Online</span>
      </div>
    </div>
  );
};
