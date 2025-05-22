"use client";
import { IButton } from "./interface";

const buttonContent = {
  ACTIVE: "Inscrever",
  DRAFT: "Indisponível",
  ARCHIVED: "Arquivado",
  ENROLLED: "Inscrito",
  PENDING: "Pendente",
};

const Button = ({ Icon, className, onClick, status, content }: IButton) => {
  return (
    <button
      disabled={status === "DRAFT" || status === "ARCHIVED" || status === "PENDING"}
      className={`duration-150 cursor-pointer py-4 px-6 flex items-center justify-center uppercase text-[14px] lg:text-[16px] tracking-[10%] font-bold rounded-[8px] ${className} ${status === "ACTIVE"
        ? "bg-background text-primary hover:bg-[#01071596]"
        : status === "ARCHIVED" || status === "DRAFT"
          ? "bg-background cursor-not-allowed pointer-events-none opacity-46"
          : status === "ENROLLED"
            ? "bg-primary text-black hover:opacity-70"
            : status === 'PENDING' ? 'bg-[#f7a522a2] text-black cursor-not-allowed pointer-events-none' : ''
        }`}
      onClick={onClick}
    >
      {content ? content : buttonContent[status]}
      {Icon && Icon}
    </button>
  );
};

export { Button };
