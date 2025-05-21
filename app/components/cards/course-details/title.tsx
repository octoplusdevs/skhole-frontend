import { inter } from "@/fonts/fonts";
import { ITitle } from "./interface";

const Title = ({ content, className }: ITitle) => {
  return (
    <h2
      className={`text-[24px] sm:text-[28px] lg:text-[32px] font-bold  ${className} ${inter}`}
    >
      {content}
    </h2>
  );
};

export { Title };
