import { CourseModule, Lesson } from "@/utils/interfaces/course";

interface ILessonProgress {
  progressColor: string;
  percentage: number;
  title: string;
  lessons: any[];
}

interface IRenderLesson {
  lesson: Lesson;
  isLoading: any;
  courseId: string;
  moduleId: string;
}

interface IRenderModules {
  lesson: Lesson;
  modules: CourseModule[] | null | undefined;
  userId: string;
  courseId: string;
}

interface IPendingNavigation {
  lessonId: string;
  path: string;
  lessonOrder?: number;
  moduleOrder?: number;
  moduleId: string;
}

interface ILessonNavigation {
  lesson: Lesson;
  moduleId: string;
  action: "record" | "mark" | "unmark";
  timeWatched?: number;
  watchedId?: string;
  shouldNavigate: boolean;
  lessonOrder?: number;
  moduleOrder?: number;
}

interface IPayload {
  action: "record" | "mark" | "unmark";
  courseId: string;
  moduleId: string;
  lessonId: string;
  id?: string;
  timeWatched?: number;
}

export type {
  ILessonProgress,
  IRenderModules,
  IRenderLesson,
  IPendingNavigation,
  ILessonNavigation,
  IPayload,
};
