import { RenderCourses } from "@/components/render-courses";
import { generateRandomCourses } from "@/utils/data";

export default function HomePage() {
  return (
    <main>
      <RenderCourses courses={generateRandomCourses(10)} title="Cursos disponiveis" />
    </main>
  );
}
