import Image from "next/image";
import { IUser } from "./interface";

export const User = ({ email, name, role, firstName, avatar }: IUser) => {
  return (
    <div className="flex gap-2">
      <Image
        alt="user"
        src={avatar}
        width={48}
        height={48}
        className="w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px] object-contain"
      />
      <div
        className={`flex-col gap-1 ${firstName ? "lg:flex hidden" : "flex"}`}
      >
        <p className="font-semibold text-[16px]">
          {firstName ? name.trim().split(/\s+/)[0] : name || "Visitante"}
        </p>
        <span
          className={` font-medium ${
            role ? "text-[14px] text-description" : "text-[12px] text-primary"
          }`}
        >
          {role ? role : "Online"}
        </span>
      </div>
    </div>
  );
};
