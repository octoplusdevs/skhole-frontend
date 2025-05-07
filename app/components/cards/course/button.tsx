import Link from "next/link";
import { IButton } from "./interface";

const Button = ({ content, target, Icon, className }: IButton) => {
  return (
    <Link
      href={target}
      className={`bg-background duration-150 cursor-pointer text-primary py-4 px-6 flex items-center justify-center uppercase text-[14px] lg:text-[16px] tracking-[10%] font-bold rounded-[8px] hover:bg-[#01071596] ${className}`}
    >
      {content}
      {Icon && Icon}
    </Link>
  );
};

export { Button };
