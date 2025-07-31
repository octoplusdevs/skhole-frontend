"use client";

import { useEffect } from "react";
import { RenderCourses } from "@/components/render-courses";
import { Pagination } from "@/components/pagination";
import { useGetCourse } from "@/hooks/use-get-course";
import { useGetEnrollments } from "@/hooks/use-get-enrollments";
import { usePaginationParams } from "@/hooks/use-paginations-params";
import { Loading } from "@/components/loading";

export default function HomePage() {
  const { page, limit, updateParams } = usePaginationParams();

  const {
    data: coursesFound,
    refetch,
    isLoading: isLoadingCourses,
  } = useGetCourse({ page: String(page), limit: String(limit) });

  const { data: enrollmentsFound, isLoading: isLoadingEnrollments } =
    useGetEnrollments({});


    console.log(enrollmentsFound)

  useEffect(() => {
    refetch();
  }, [page, limit, refetch]);

  const isLoading = isLoadingCourses || isLoadingEnrollments;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col gap-4 pb-32">
      <RenderCourses
        title="Cursos disponíveis"
        courses={coursesFound?.courses}
        enrollmentsFound={enrollmentsFound?.enrollments}
      />

      <Pagination
        page={page}
        totalPages={coursesFound?.totalPages || 1}
        onPageChange={updateParams}
      />
    </main>
  );
}
