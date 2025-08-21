import { formatCurrency } from "@/utils/format-currency";

interface ICoursePrice {
  price: number;
  isFree: boolean;
  percentage: number
}

export const CoursePrice = ({ price, isFree, percentage }: ICoursePrice) => {

  return (
    <div className="flex flex-col gap-2">
      <div className={`gap-2 ${percentage ? "flex" : "hidden"}`}>
        <p className="text-[12px]">
          {percentage > 0 ? percentage + "% de desconto" : ""}
        </p>
        <span className="line-through text-red-500 text-[14px]">
          {percentage > 0 ? formatCurrency(price) : ""}
        </span>
      </div>
      <h3 className="font-bold text-[24px] md:text-[28px] lg:text-[32px]">
        {isFree ? "Gratuito" : formatCurrency(price - (price * percentage / 100))}
      </h3>
    </div>
  );
};
