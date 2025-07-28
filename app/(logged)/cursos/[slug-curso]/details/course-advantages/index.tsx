"use client";

import { useRouter, usePathname } from "next/navigation";

import { toast } from "sonner";
import { Instructor } from "@/components/instructor";
import { CourseModule, ICourse } from "@/utils/interfaces/course";
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { formatEnrollment } from "@/utils/format-enrollments";
import { verifyCourseAcess } from "@/utils/verify-course-acess";
import { useGetEnrollments } from "@/hooks/use-get-enrollments";
import { CourseAdvantages } from "./course-advantage";
import { CoursePrice } from "./course-price";
import { CourseActionButton } from "./course-action-button";
import { getCourseStats } from "./utils/calculate-course-stats";

interface ICoursePaymentArea {
  currentCourse: ICourse | null | undefined;
}

export const CoursePaymentArea = ({ currentCourse }: ICoursePaymentArea) => {
  const router = useRouter();
  const pathName = usePathname();
  const { data: enrollmentsFound } = useGetEnrollments({});
  const { enrollments } = formatEnrollment(enrollmentsFound?.enrollments);
  const { courseStatus } = verifyCourseAcess(currentCourse, enrollments);

  const isEnrolled = courseStatus === "ENROLLED";
  const isFree = currentCourse?.type === "FREE";

  const getFirstLessonUrl = (): string => {
    const firstLesson = currentCourse?.modules?.[0]?.module.lessons[0];
    return firstLesson ? `${pathName}/${firstLesson.lessonId}` : "";
  };

  const handleAccess = () => {
    const url = getFirstLessonUrl();
    const lessons = currentCourse?.modules?.reduce(
      (acc, curr: CourseModule) => acc + curr.module.lessons.length,
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

  const {
    averageRating,
    guaranteeDays,
    totalLessons,
    totalReviews,
    totalStudents,
  } = getCourseStats(currentCourse);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-12 lg:gap-8 w-full lg:flex-col lg:max-w-[384px]">
      <div className="flex flex-col gap-4 w-full">
        {!isEnrolled && (
          <CoursePrice price={currentCourse?.price ?? 0} isFree={isFree} />
        )}
        <CourseActionButton
          isEnrolled={isEnrolled}
          isFree={isFree}
          onClick={handleAccess}
        />
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[384px]">
        <CourseAdvantages
          averageRating={averageRating}
          totalReviews={totalReviews}
          totalLessons={totalLessons}
          totalStudents={totalStudents}
          guaranteeDays={guaranteeDays}
        />

        <div className="flex gap-4 flex-col">
          {currentCourse?.Instructors?.map(({ user }, index: number) => (
            <Instructor name={user.fullName} avatar="/user.png" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
