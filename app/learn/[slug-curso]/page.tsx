"use client";

import { Container } from "@/components/container";
import { CourseDetailsArea } from "./details/course-details-area";
import { CoursePaymentArea } from "./details/course-payment-area";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { useGetCourseBySlug } from "@/hooks/use-get-course-by-slug";

export default function CourseDetailsPage() {
  const currentSlugCourse = getItemLocalStorage("currentSlugCourse");
  const currentCourseId = getItemLocalStorage("currentCourseId");
  const { data: currentCourse } = useGetCourseBySlug({
    slug: currentSlugCourse,
  });

  return (
    <section className="py-36">
      <Container className="flex flex-col lg:flex-row gap-12 max-w-[1484px]">
        <CourseDetailsArea currentCourse={currentCourse} />
        <CoursePaymentArea currentCourse={currentCourse} />
      </Container>
    </section>
  );
}
