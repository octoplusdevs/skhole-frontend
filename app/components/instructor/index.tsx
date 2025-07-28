import Image from "next/image";
import { User as UserIcon } from "@phosphor-icons/react/dist/ssr";
import { IUser } from "./interface";
import { getFirstAndLastName } from "@/utils/get-first-and-last-name";

export const Instructor = ({ name, avatar }: IUser) => {
  return (
    <div className="flex gap-3 lg:gap-6 items-center">
      <div className="flex gap-2 w-full">
        <div
          className={`rounded-full ${
            avatar
              ? "w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px]"
              : "w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] border-[2px] flex border-solid border-primary items-center justify-center"
          }`}
        >
          {avatar ? (
            <Image
              alt="user"
              src={avatar}
              width={48}
              height={48}
              className="w-full max-w-[40px] h-[40px] sm:max-w-[48px] sm:h-[48px] rounded-full object-contain"
            />
          ) : (
            <UserIcon size={24} color="#788064" weight="duotone" />
          )}
        </div>
        <div className={`flex-col gap-1 flex`}>
          <p className="font-semibold text-[16px]">
            {getFirstAndLastName(name)}
          </p>
          <p className="text-[14px] text-gray-400">Instructor do curso</p>
        </div>
      </div>
    </div>
  );
};
