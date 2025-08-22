"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { CourseCard } from "../cards/course";
import { Container } from "../container";
import { SpecialTitle } from "../special-title";

import { Categories } from "@/utils/data";
import { getFirstAndLastName } from "@/utils/get-first-and-last-name";
import { verifyCourseAcess } from "@/utils/verify-course-acess";
import { levelTranslator } from "@/utils/level-translator";
import { formatEnrollment } from "@/utils/format-enrollments";

import { ICourse } from "@/utils/interfaces/course";
import { ICourseSection } from "./interface";
import { storeCourseSession } from "@/utils/localStorage/store-course-session";
import { getFirstLesson } from "@/utils/get-first-lesson";

export const RenderCourses = ({
  children,
  courses,
  title,
  enrollmentsFound,
}: ICourseSection) => {
  const router = useRouter();
  const hasCourses = Array.isArray(courses) && courses.length > 0;
  const { enrollments } = formatEnrollment(enrollmentsFound);

  const handleCourseClick = (course: ICourse, status: string) => {
    const slug = course.slug;
    const lesson = getFirstLesson(course);
    const nextPage = `cursos/${slug}/modulo${lesson?.moduleOrder}/${lesson?.id}`;

    const hasLessons = course.modules?.some((mod) => mod.module.lessons.length);

    if (status === "ENROLLED") {
      if (hasLessons && lesson) {
        storeCourseSession({
          slug,
          courseId: course.id,
          lessonId: lesson?.id,
          nextPage,
          lessonOrder: lesson?.order,
          moduleOrder: lesson?.moduleOrder,
        });
        router.push(nextPage);
      } else {
        toast("Este curso não possui aulas");
      }
    } else if (status === "PENDING") {
      toast("O seu pagamento ainda não foi aprovado");
    } else {
      storeCourseSession({ slug, courseId: course.id });
      router.push(`/cursos/${slug}`);
    }
  };

  const handleThumbnailClick = (course: ICourse) => {
    const lesson = getFirstLesson(course);
    const nextPage = `/cursos/${course.slug}`;
    storeCourseSession({
      slug: course.slug,
      courseId: course.id,
      lessonId: lesson?.id,
      nextPage,
      lessonOrder: lesson?.order,
      moduleOrder: lesson?.moduleOrder,
    });
  };

  return (
    <section className="pt-32 pb-8">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content={title} />

        {hasCourses && (
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => {
              const { buttonContent, courseStatus } = verifyCourseAcess(
                course,
                enrollments
              );

              return (
                <CourseCard.Root key={course.id}>
                  <div className="flex h-full flex-col justify-between">
                    <CourseCard.Thumbnail
                      src="/ts.png"
                      alt={course.title}
                      onClick={() => handleThumbnailClick(course)}
                      target={`/cursos/${course.slug}`}
                    />

                    <div className="h-24 overflow-hidden px-6 pt-6">
                      <CourseCard.Title content={course.title} />
                    </div>

                    <div className="flex flex-col gap-2 border-t-2 border-slate-600 px-6 py-4">
                      <CourseCard.Rate content={course.rate} />
                      <CourseCard.Author
                        subtitle="Por"
                        content={getFirstAndLastName(
                          course.authorUser?.fullName
                        )}
                      />
                      <CourseCard.Author
                        subtitle="Nível"
                        content={levelTranslator(course.level)}
                      />
                      {/* <CourseCard.Author
                        subtitle="Categoria"
                        content={Categories[course.category]}
                      /> */}
                    </div>

                    <div className="flex justify-between gap-2 border-t-2 border-slate-600 px-6 py-4 h-[74px]">
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

                    <CourseCard.Button
                      status={courseStatus}
                      content={buttonContent}
                      onClick={() => handleCourseClick(course, courseStatus)}
                    />
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
