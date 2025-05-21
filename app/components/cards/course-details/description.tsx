import { IDescription } from "./interface";

const Description = ({ content, className }: IDescription) => {
  return (
    <p
      className={`text-description font-medium text-[16px] leading-[150%] ${className}`}
    >
      {content}
    </p>
  );
};

export { Description };
