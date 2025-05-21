import { IPrice } from "./interface";

const Price = ({ content, className }: IPrice) => {
  return (
    <p className={`text-[16px] lg:text-[18px] font-semibold${className}`}>
      Apartir de {content} kz
    </p>
  );
};

export { Price };
