"use client";

import { CourseCard } from "../cards/course";
import { Container } from "../container";
import { SpecialTitle } from "../special-title";
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { ICourseSection, IPaymentsDetails } from "./interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UseGetCourseLessons } from "@/hooks/use-get-course-lessons";
import { UseGetLesson } from "@/hooks/use-get-lesson";
import { levelTranslator } from "@/utils/level-translator";
import { Categories } from "@/utils/data";
import { getFirstAndLastName } from "@/utils/get-first-and-last-name";

export const RenderCourses = ({
  children,
  courses,
  title,
  enrolledCourses,
}: ICourseSection) => {
  const { mutate: watchedCourse } = UseGetCourseLessons();
  const { mutate: getLesson } = UseGetLesson();
  let enrollments: IPaymentsDetails[] = [];
  const router = useRouter();

  const hasCourses = Array.isArray(courses) && courses.length > 0;
  const getFirstLesson = (course: any) => course.modules?.[0]?.lessons?.[0];

  const storeCommonCourseData = (
    course: any,
    lesson: any,
    nextPage: string
  ) => {
    const storageItems = [
      { key: "currentPage", value: nextPage },
      { key: "currentCourse", value: course },
      { key: "currentLesson", value: lesson },
      { key: "accordion", value: "" },
    ];
    storageItems.forEach(({ key, value }) => setItemLocalStorage(key, value));
  };

  const handleCourseClick = (course: any) => {
    const lesson = getFirstLesson(course);
    const nextPage = `/cursos/${course.slug}/${lesson.id}`;

    switch (course.status) {
      case "ENROLLED":
        storeCommonCourseData(course, lesson, nextPage);
        watchedCourse({ course });
        getLesson({ lesson });
        router.push(nextPage);
        break;

      case "PENDING":
        toast("O seu pagamento ainda não foi aprovado");
        break;

      default:
        storeCommonCourseData(course, "", `/cursos/${course.slug}`);
        watchedCourse({ course });
        router.push(`/cursos/${course.slug}`);
        break;
    }
  };

  const handleThumbnailClick = (course: any) => {
    const lesson = getFirstLesson(course);
    const nextPage = `/cursos/${course.slug}`;
    storeCommonCourseData(course, lesson, nextPage);
    watchedCourse({ course });
    getLesson({ lesson });
  };

  if (enrolledCourses?.length > 0) {
    enrollments = enrolledCourses.map((enroll: any) => {
      return {
        courseId: enroll?.courseId,
        paymentsStatus: enroll.payments?.map((p: any) => p.status),
        amount: enroll.payments?.reduce((acc: number, curr: any) => {
          return (acc += Number(curr.amount));
        }, 0),
      };
    });
  }

  const renderCTA = (course: any) => {
    return enrollments.map((enrollment) => {
      const isEnrolled = enrollment.courseId === course.id;
      const isPaymentCompleted =
        enrollment.paymentsStatus.includes("COMPLETED") &&
        enrollment.amount === Number(course.price);
      const isPaymentPending = enrollment.paymentsStatus.includes("PENDING");

      let courseStatus = course.status;
      let buttonContent = course.price === "0" ? "Gratuito" : "Inscrever-se";

      if (isEnrolled) {
        if (isPaymentCompleted) {
          courseStatus = "ENROLLED";
          buttonContent = "Assistir";
        } else if (isPaymentPending) {
          courseStatus = "PENDING";
          buttonContent = "Pendente";
        } else {
          courseStatus = "ACTIVE";
          buttonContent = "Inscrever-se";
        }
      }

      return (
        <CourseCard.Button
          status={courseStatus}
          content={buttonContent}
          onClick={() => handleCourseClick(course)}
        />
      );
    });
  };

  return (
    <section className="pt-32 pb-8">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content={title} />

        {hasCourses && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => {
              return (
                <CourseCard.Root key={course.id}>
                  <div className="flex flex-col h-full justify-between">
                    <CourseCard.Thumbnail
                      src={"/ts.png"}
                      alt={course.title}
                      onClick={() => handleThumbnailClick(course)}
                      target={`/cursos/${course.slug}`}
                    />
                    <div className="flex flex-col gap-2 px-6 h-24 overflow-hidden pt-6">
                      <CourseCard.Title content={course.title} />
                    </div>
                    <div className="flex flex-col gap-2 px-6 border-t-2 border-slate-600 py-4">
                      <CourseCard.Rate content={course.rate} />
                      <CourseCard.Author
                        content={getFirstAndLastName(
                          course?.authorUser?.fullName
                        )}
                        subtitle="Por"
                      />
                      <CourseCard.Author
                        content={levelTranslator(course.level)}
                        subtitle="Nível"
                      />
                      <CourseCard.Author
                        content={Categories[`${course?.category}`]}
                        subtitle="Categoria"
                      />
                    </div>
                    <div className="flex justify-between gap-2 px-6 border-t-2 border-slate-600 py-4 h-[74px]">
                      <CourseCard.PriceBeforeDiscount
                        price={course.price}
                        percentage={course.discount}
                      />
                      <CourseCard.Price
                        content={course.price}
                        discount={course.discount}
                        className="mt-[-4px]"
                      />
                    </div>
                    {renderCTA(course)}
                  </div>
                </CourseCard.Root>
              );
            })}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
};
