import { ITitle } from "./interface";

const Title = ({ content, className }: ITitle) => {
  return (
    <h3
      className={`text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[140%] ${className}`}
    >
      {content}
    </h3>
  );
};

export { Title };
