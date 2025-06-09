"use client";
import { Button } from "@/components/ui/button";
import { User } from "@/components/user";
import { courseAdvantages } from "./data";
import { useRouter } from "next/navigation";
import { useGetItemLocalStorage } from "@/hooks/localStorage/useGetItemLocalStorage";
import { useSetItemLocalStorage } from "@/hooks/localStorage/useSetItemLocalStorage";

export const CoursePaymentArea = () => {
  const router = useRouter();
  const slugCourse = useGetItemLocalStorage("slugCourse");

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-12 lg:gap-8 w-full lg:flex-col lg:max-w-[384px]">
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-bold text-[24px] md:text-[28px] lg:text-[32px]">
          17.000 kz
        </h3>
        <Button
          className="py-6 font-semibold text-[16px] sm:text-[18px]"
          onClick={() => {
            router.push(`/dashboard/assistir/${slugCourse}`),
              useSetItemLocalStorage(
                "currentPage",
                `/dashboard/assistir/${slugCourse}`
              );
          }}
        >
          Comprar agora
        </Button>
      </div>
      <div className="flex flex-col gap-10 w-full max-w-[384px]">
        <div className="flex flex-col gap-[18px]">
          {courseAdvantages.map(({ Icon, content, id }) => (
            <span
              key={id}
              className={`flex gap-2 items-center text-[14px] font-medium ${
                id === 0 ? "text-white font-semibold" : "text-description"
              }`}
            >
              <Icon
                size={24}
                weight="fill"
                color={id === 0 ? "#F9FD47" : "#fff"}
              />
              {content}
            </span>
          ))}
        </div>
        <User
          name="Wilmy Danguya"
          role="Instrutor do curso"
          avatar="/user.png"
          firstName={false}
        />
      </div>
    </div>
  );
};
