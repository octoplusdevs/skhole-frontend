import { ISpecialTitle } from "./interface";

export const SpecialTitle = ({ className, content }: ISpecialTitle) => {
  return (
    <h1
      className={`text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white ${className}`}
    >
      {content}
    </h1>
  );
};
