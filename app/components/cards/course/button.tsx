"use client";
import Link from "next/link";
import { IButton } from "./interface";

const buttonContent = {
  ACTIVE: "Inscrever",
  DRAFT: "Inscrever",
  ARCHIVED: "Inscrever",
  ENROLLED: "Inscrito",
};

const Button = ({ target, Icon, className, onClick, status }: IButton) => {
  return (
    <Link
      href={target}
      className={`duration-150 cursor-pointer py-4 px-6 flex items-center justify-center uppercase text-[14px] lg:text-[16px] tracking-[10%] font-bold rounded-[8px] ${className} ${
        status === "ACTIVE"
          ? "bg-background text-primary hover:bg-[#01071596]"
          : status === "ARCHIVED" || status === "DRAFT"
          ? "bg-background cursor-not-allowed pointer-events-none opacity-46"
          : status === "ENROLLED"
          ? "bg-primary text-black hover:opacity-70"
          : ""
      }`}
      onClick={onClick}
    >
      {buttonContent[status]}
      {Icon && Icon}
    </Link>
  );
};

export { Button };
