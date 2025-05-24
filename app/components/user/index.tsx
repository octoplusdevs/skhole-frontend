import Image from "next/image";
import { IUser } from "./interface";
import { Fire, User as UserIcon } from "@phosphor-icons/react/dist/ssr";

export const User = ({ email, name, role, firstName, avatar, points }: IUser) => {
  return (
    <div className="flex gap-3 lg:gap-6 items-center">
      {points ?
        <div className="bg-background flex gap-2 items-center px-3 py-2 rounded-[8px]">
          <Fire size={24} weight="duotone" color="#baf722" />
          {points}
        </div> : ''
      }
      <div className="flex gap-2 w-full">
        <div className={`rounded-full ${avatar ? 'w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px]' : 'w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] border-[2px] flex border-solid border-primary items-center justify-center'}`}>
          {avatar ?
            <Image
              alt="user"
              src={avatar}
              width={48}
              height={48}
              className="w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px] rounded-full object-contain"
            /> :
            <UserIcon size={24} color="#788064" weight="duotone" />
          }
        </div>
        <div
          className={`flex-col gap-1 ${firstName ? "lg:flex hidden" : "flex"}`}
        >
          <p className="font-semibold text-[16px]">
            {firstName ? name.trim().split(/\s+/)[0] : name || "Visitante"}
          </p>
          <span
            className={` font-medium ${role ? "text-[14px] text-description" : "text-[12px] text-primary"
              }`}
          >
            {role ? role : "Online"}
          </span>
        </div>
      </div>
    </div>
  );
};
