import { CourseModule, Lesson } from "@/utils/interfaces/course";

interface ILessonProgress {
  progressColor: string;
  percentage: number;
  title: string;
  lessons: any[];
}

interface IRenderLesson {
  lesson: Lesson;
  userId: string;
  isLoading: any;
}

interface IRenderModules {
  lesson: Lesson;
  modules: CourseModule[] | null | undefined;
  userId: string;
  courseId: string;
}

export type { ILessonProgress, IRenderModules, IRenderLesson };
