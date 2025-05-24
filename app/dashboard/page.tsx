import { RenderCourses } from "@/components/render-courses";
import { courses } from "@/utils/data";

export default function DashboardPage() {
  return (
    <main>
      <RenderCourses courses={courses} title="Cursos disponiveis" />
    </main>
  );
}
