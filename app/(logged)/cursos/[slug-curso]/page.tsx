"use client";

import { Container } from "@/components/container";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { useGetCourseBySlug } from "@/hooks/use-get-course-by-slug";
import { CourseDetailsArea } from "./details/course-details-area";
import { CoursePaymentArea } from "./details/course-advantages";
import { Loading } from "@/components/loading";
import { useEffect } from "react";

export default function CourseDetailsPage() {
  const currentSlugCourse = getItemLocalStorage("currentSlugCourse");
  const { data: currentCourse, isLoading } = useGetCourseBySlug({
    slug: currentSlugCourse,
  });

  if (isLoading) {
    return <Loading />
  }

  return (
    <section className="py-36">
      <Container className="flex flex-col lg:flex-row gap-12 max-w-[1484px]">
        <CourseDetailsArea currentCourse={currentCourse} />
        <CoursePaymentArea currentCourse={currentCourse} />
      </Container>
    </section>
  );
}
