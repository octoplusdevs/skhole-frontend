import { RenderCourses } from "@/components/render-courses";
import { courses } from "@/utils/data";

export default function StudentCoursesPage() {
  const enrolledCourses = courses.filter(course => course.status === 'ENROLLED')
  return (
    <RenderCourses
      title="Meus Cursos"
      courses={enrolledCourses}
    />
  );
}
