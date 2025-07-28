import { ICourse, ICourseReviews } from "@/utils/interfaces/course";

export const getCourseStats = (course?: ICourse | null) => {
  const totalReviews = course?.CourseReviews?.length ?? 0;
  const totalStudents = course?.enrollments?.length ?? 0;
  const guaranteeDays = course?.guarantee ?? 0;
  const totalLessons =
    course?.modules?.reduce(
      (acc, curr) => acc + curr.module.lessons.length,
      0
    ) ?? 0;

  const averageRating =
    totalReviews > 0
      ? (
          course!.CourseReviews.reduce(
            (acc: number, review: ICourseReviews) =>
              acc + review.classification,
            0
          ) / totalReviews
        ).toFixed(1)
      : "0";

  return {
    totalReviews,
    totalStudents,
    guaranteeDays,
    totalLessons,
    averageRating,
  };
};
