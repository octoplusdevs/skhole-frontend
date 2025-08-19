"use client";

import { useEffect } from "react";

import { RenderCourses } from "@/components/render-courses";
import { Pagination } from "@/components/pagination";
import { usePaginationParams } from "@/hooks/use-paginations-params";
import { ICourse } from "@/utils/interfaces/course";
import { Loading } from "@/components/loading";
import { useGetEnrollments } from "@/hooks/use-get-enrollments";

export default function StudentCoursesPage() {
  const { page, limit, updateParams } = usePaginationParams();
  const {
    data: enrollmentsData,
    refetch,
    isLoading,
  } = useGetEnrollments({ page: String(page), limit: String(limit) });

  useEffect(() => {
    refetch();
  }, [page, limit, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  const enrollments: any[] = enrollmentsData?.enrollments || [];

  const enrolledCourses: ICourse[] = enrollments
    .filter((enrollment) => enrollment.course)
    .map((enrollment) => enrollment.course);

  return (
    <main className="flex flex-col gap-4 pb-32">
      <RenderCourses
        title="Meus cursos"
        courses={enrolledCourses}
        enrollmentsFound={enrollments}
      />

      <Pagination
        page={page}
        totalPages={enrollmentsData?.totalPages || 1}
        onPageChange={updateParams}
      />
    </main>
  );
}
