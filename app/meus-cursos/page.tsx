import { RenderCourses } from "@/components/render-courses";
import { generateRandomCourses } from "@/utils/data";

export default function StudentCoursesPage() {
  let courses = generateRandomCourses(10);
  const enrolledCourses = courses.filter(course => course.status === 'ENROLLED')
  return (
    <RenderCourses
      title="Meus Cursos"
      courses={enrolledCourses}
    />
  );
}
