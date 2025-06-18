import { formatCurrency } from "@/utils/format-currency";
import { IPrice } from "./interface";

const Price = ({ content, className }: IPrice) => {
  return (
    <p className={`text-[16px] lg:text-[18px] font-semibold ${className}`}>
      {formatCurrency((content - 34 / 100 * content))}
    </p>
  );
};

const PriceBeforeDiscount = ({ price, percentage, className }: {
  price: number;
  percentage: number;
  className?: string;
}) => {
  return (
    <p className={`lg:text-[18px] font-semibold ${className}`}>
      <p className="text-[12px]">
        {percentage > 0 ? percentage + "% de desconto" : ""}
      </p>
      <span className="line-through text-red-500 text-[14px]">
        {percentage > 0 ? price : ""}
      </span>
    </p>
  );
};

export { Price, PriceBeforeDiscount };
