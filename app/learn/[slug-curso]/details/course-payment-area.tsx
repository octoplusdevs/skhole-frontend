"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { Instructor } from "@/components/instructor";
import {
  CourseModule,
  ICourse,
  ICourseReviews,
} from "@/utils/interfaces/course";
import {
  Certificate,
  SealCheck,
  Star,
  UsersThree,
  Video,
} from "@phosphor-icons/react/dist/ssr";
import { formatCurrency } from "@/utils/format-currency";
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { UseGetEnrollments } from "@/hooks/use-get-enrollments";
import { formatEnrollment } from "@/utils/format-enrollments";
import { verifyCourseAcess } from "@/utils/verify-course-acess";

export const CoursePaymentArea = ({
  currentCourse,
}: {
  currentCourse: ICourse | null | undefined;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const { data: enrollmentsFound } = UseGetEnrollments();
  const { enrollments } = formatEnrollment(enrollmentsFound?.enrollments);
  const { courseStatus } = verifyCourseAcess(currentCourse, enrollments);

  const isEnrolled = courseStatus === "ENROLLED";
  let isFree = false;
  if (currentCourse) isFree = currentCourse.type === "FREE";

  const getFirstLessonUrl = (): string => {
    if (!currentCourse) return "";
    const firstModule = currentCourse.modules?.[0];
    const firstLesson = firstModule?.module.lessons[0];
    return firstLesson ? `${pathName}/${firstLesson.lessonId}` : "";
  };

  const handleButtonClick = () => {
    const url = getFirstLessonUrl();
    let lessons = currentCourse?.modules?.reduce(
      (acc: number, curr: CourseModule) => {
        return (acc += curr.module.lessons.length);
      },
      0
    );

    if (isEnrolled) {
      if (lessons) {
        router.push(url);
        setItemLocalStorage("currentPage", url);
      } else {
        toast("Este curso nao possui aulas");
      }
    } else {
      toast("Efectuar pagamento");
    }
  };

  const totalReviews = currentCourse?.CourseReviews?.length ?? 0;

  const averageRating =
    totalReviews > 0
      ? (
          currentCourse!.CourseReviews.reduce(
            (acc: number, curr: ICourseReviews) => acc + curr.classification,
            0
          ) / totalReviews
        ).toFixed(1)
      : "0";

  const totalLessons =
    currentCourse?.modules?.reduce(
      (acc, curr) => acc + curr.module.lessons.length,
      0
    ) ?? 0;

  const totalStudents = currentCourse?.enrollments?.length ?? 0;
  const guaranteeDays = currentCourse?.guarantee ?? 0;

  const courseAdvantages = [
    {
      id: 0,
      content: `${averageRating === "0" ? "" : averageRating} (${
        totalReviews === 0 ? "" : totalReviews
      } ${
        totalReviews === 1
          ? "avaliação"
          : totalReviews === 0
          ? "Sem avaliações"
          : "avaliações"
      })`,
      Icon: Star,
    },
    {
      id: 1,
      content: `Garantia de ${guaranteeDays} ${
        guaranteeDays === 1 ? "dia" : "dias"
      }`,
      Icon: SealCheck,
    },
    {
      id: 2,
      content: `${totalLessons === 0 ? "" : totalLessons} ${
        totalLessons === 1
          ? "aula incrível"
          : totalLessons === 0
          ? "Sem aulas"
          : "aulas incríveis"
      }`,
      Icon: Video,
    },
    {
      id: 3,
      content: "Certificado de conclusão",
      Icon: Certificate,
    },
    {
      id: 4,
      content: `${totalStudents === 0 ? "" : `+${totalStudents}`} ${
        totalStudents === 1
          ? "estudante"
          : totalStudents === 0
          ? "Sem estudantes"
          : "estudantes"
      }`,
      Icon: UsersThree,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-12 lg:gap-8 w-full lg:flex-col lg:max-w-[384px]">
      <div className="flex flex-col gap-4 w-full">
        {!isEnrolled && (
          <h3 className="font-bold text-[24px] md:text-[28px] lg:text-[32px]">
            {isFree ? "Gratuito" : formatCurrency(currentCourse?.price ?? 0)}
          </h3>
        )}

        <Button
          className={`py-6 font-semibold text-[16px] sm:text-[18px] ${
            isEnrolled || isFree
              ? "bg-[#6850a2] text-white hover:bg-[#6950a2ca] hover:text-white"
              : "bg-primary"
          }`}
          onClick={handleButtonClick}
        >
          {isFree ? "Assistir" : isEnrolled ? "Assistir" : "Comprar agora"}
        </Button>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[384px]">
        <div className="flex flex-col gap-[18px]">
          {courseAdvantages.map(({ Icon, content, id }) => {
            const isHighlight = id === 0;
            return (
              <span
                key={id}
                className={`flex gap-2 items-center text-[14px] font-medium ${
                  isHighlight ? "text-white font-semibold" : "text-description"
                }`}
              >
                <Icon
                  size={24}
                  weight="fill"
                  color={isHighlight ? "#F9FD47" : "#fff"}
                />
                {content}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4 flex-col">
          {currentCourse?.Instructors?.map(({ user }, index: number) => (
            <Instructor name={user.fullName} avatar="/user.png" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
