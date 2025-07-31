import { formatCurrency } from "@/utils/format-currency";

interface ICoursePrice {
  price: number;
  isFree: boolean;
}

export const CoursePrice = ({ price, isFree }: ICoursePrice) => {
  return (
    <h3 className="font-bold text-[24px] md:text-[28px] lg:text-[32px]">
      {isFree ? "Gratuito" : formatCurrency(price)}
    </h3>
  );
};
