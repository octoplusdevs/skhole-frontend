import { IDetail } from "./interface";

const Detail = ({ content, className, Icon }: IDetail) => {
  return (
    <span className={`flex gap-1 items-center text-link ${className}`}>
      {Icon && Icon}
      {content}
    </span>
  );
};

export { Detail };
