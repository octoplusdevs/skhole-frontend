"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RenderCourses } from "@/components/render-courses";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetCourse } from "@/hooks/use-get-course";
import { UseGetEnrollments } from "@/hooks/use-get-enrollments";

export default function StudentCoursesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") || "1");
  const limit = Number(searchParams.get("limit") || "8");

  const { data: courses, refetch } = useGetCourse({
    page: String(page),
    limit: String(limit),
  });

  const { data: enrollments } = UseGetEnrollments();

  const updateURLParams = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    params.set("limit", String(limit));
    router.push(`?${params.toString()}`);
  };

  const goToPreviousPage = () => {
    const prevPage = Math.max(page - 1, 1);
    updateURLParams(prevPage);
  };

  const goToNextPage = () => {
    const totalPages = enrollments?.totalPages || 1;
    const nextPage = Math.min(page + 1, totalPages);
    updateURLParams(nextPage);
  };

  const renderVisiblePages = () => {
    const totalPages = enrollments?.totalPages || 0;

    if (page >= totalPages - 2) {
      return Array.from({ length: 3 }, (_, i) => {
        const pageNumber = totalPages - 2 + i;
        if (pageNumber <= 0) return null;
        return (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => updateURLParams(pageNumber)}
              isActive={pageNumber === page}
              className={`${
                pageNumber === page ? "bg-primary border-none text-black" : ""
              }`}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        );
      });
    }

    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      if (pageNumber >= page && pageNumber <= page + 2) {
        return (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => updateURLParams(pageNumber)}
              isActive={pageNumber === page}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    refetch();
  }, [page, limit]);

  const userCourses = courses?.courses.filter((course: any) =>
    enrollments?.enrollments.some(
      (enrollment: any) => enrollment.courseId === course.id
    )
  );

  return (
    <main className="flex flex-col gap-4 pb-32">
      <RenderCourses
        courses={userCourses}
        enrollmentsFound={enrollments?.enrollments}
        title="Meus cursos"
      />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={goToPreviousPage}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {renderVisiblePages()}

          {page < (enrollments?.totalPages || 0) - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              onClick={goToNextPage}
              className={
                page === (enrollments?.totalPages || 1)
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
