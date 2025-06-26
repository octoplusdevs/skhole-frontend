"use client";

import { CourseCard } from "../cards/course";
import { Container } from "../container";
import { SpecialTitle } from "../special-title";
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { ICourseSection, IPaymentsDetails } from "./interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { levelTranslator } from "@/utils/level-translator";
import { Categories } from "@/utils/data";
import { getFirstAndLastName } from "@/utils/get-first-and-last-name";
import { CourseModule, ICourse } from "@/utils/interfaces/course";
import { verifyCourseAcess } from "@/utils/verify-course-acess";
import { formatEnrollment } from "@/utils/format-enrollments";

export const RenderCourses = ({
  children,
  courses,
  title,
  enrollmentsFound,
}: ICourseSection) => {
  const router = useRouter();

  const hasCourses = Array.isArray(courses) && courses.length > 0;
  const getFirstLesson = (course: ICourse) => {
    const courseModule = course.modules;
    let lesson;
    if (course.modules.length > 0) {
      lesson = {
        ...courseModule?.[0].module?.lessons[0]?.lesson,
        order: String(courseModule[0].module.lessons[0].order),
        moduleOrder: String(courseModule[0].order),
      };
      return lesson;
    }
  };

  const storeCommonCourseData = (
    slug: string,
    lesson: string,
    nextPage: string,
    courseId: string,
    lessonOrder: string,
    moduleOrder: string
  ) => {
    const storageItems = [
      { key: "currentPage", value: nextPage },
      { key: "currentSlugCourse", value: slug },
      { key: "currentCourseId", value: courseId },
      { key: "currentLesson", value: lesson },
      { key: "accordion", value: "" },
      { key: "lessonOrder", value: lessonOrder },
      { key: "moduleOrder", value: moduleOrder },
    ];
    storageItems.forEach(({ key, value }) => setItemLocalStorage(key, value));
  };

  const handleCourseClick = (course: ICourse, courseStatus: any) => {
    const lesson = getFirstLesson(course);
    const slug = course.slug;
    const nextPage = `/learn/${slug}/${lesson?.id}`;
    let lessons = course.modules?.reduce((acc: number, curr: CourseModule) => {
      return (acc += curr.module.lessons.length);
    }, 0);

    switch (courseStatus) {
      case "ENROLLED":
        if (lessons) {
          storeCommonCourseData(
            slug,
            lesson?.id ?? "",
            nextPage,
            course.id,
            lesson?.order ?? "",
            lesson?.moduleOrder ?? ""
          );
          router.push(nextPage);
        } else {
          toast("Este curso não possui aulas");
        }
        break;
      case "PENDING":
        toast("O seu pagamento ainda não foi aprovado");
        break;
      default:
        storeCommonCourseData(slug, "", `/learn/${slug}`, course.id, "", "");
        router.push(`/learn/${slug}`);
        break;
    }
  };

  const handleThumbnailClick = (course: ICourse) => {
    const lesson = getFirstLesson(course);
    const nextPage = `/learn/${course.slug}`;
    storeCommonCourseData(
      course.slug,
      lesson?.id ?? "",
      nextPage,
      course.id,
      lesson?.order ?? "",
      lesson?.moduleOrder ?? ""
    );
  };

  const { enrollments } = formatEnrollment(enrollmentsFound);

  return (
    <section className="pt-32 pb-8">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content={title} />

        {hasCourses && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => {
              const { buttonContent, courseStatus } = verifyCourseAcess(
                course,
                enrollments
              );
              return (
                <CourseCard.Root key={course.id}>
                  <div className="flex flex-col h-full justify-between">
                    <CourseCard.Thumbnail
                      src={"/ts.png"}
                      alt={course.title}
                      onClick={() => handleThumbnailClick(course)}
                      target={`/learn/${course.slug}`}
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
