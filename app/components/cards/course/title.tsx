import { Star } from "@phosphor-icons/react/dist/ssr";
import { IRate, ITitle } from "./interface";

const Title = ({ content, className }: ITitle) => {
  return (
    <h3 className={`text-base h-full font-bold leading-[140%] ${className}`}>
      {content}
    </h3>
  );
};

const Rate = ({ content, className }: IRate) => {
  return (
    <div className={`${className} flex gap-0.5`}>
      {Array.from({ length: 5 }).map((_, index: number) => (
        <Star
          key={index}
          color={`${index + 1 <= content ? "#f7d722c9" : "#85806592"}`}
          size={16}
          weight="fill"
        />
      ))}
    </div>
  );
};

const Author = ({ content, className, subtitle }: ITitle) => {
  return (
    <div className="flex gap-2 text-base h-full w-full">
      <p className="font-normal text-[#8799B5] text-[14px]">{subtitle}</p>{" "}
      <p className={`text-[14px] font-bold ${className} truncate`}>{content}</p>
    </div>
  );
};

export { Title, Author, Rate };
