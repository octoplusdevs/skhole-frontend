import { ITitle } from "./interface";

const Title = ({ content, className }: ITitle) => {
  return (
    <h3
      className={`text-base h-full font-bold leading-[140%] ${className}`}
    >
      {content}
    </h3>
  );
};

const Rate = ({ content, className }: ITitle) => {
  return (
    <h3
      className={`text-base h-full font-bold leading-[140%] ${className}`}
    >
      {content}
    </h3>
  );
};

const Author = ({ content, className }: ITitle) => {
  return (
    <h3
      className="flex items-end justify-end gap-2 text-base h-full font-bold leading-[140%]"
    >
      <p className="font-normal text-[#8799B5]">Por </p> <p className={`text-[14px] h-full font-bold leading-[140%] ${className}`}>{content}</p>
    </h3>
  );
};

export { Title, Author, Rate };
