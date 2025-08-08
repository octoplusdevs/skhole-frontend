import { IWatchedLesson } from "@/utils/interfaces/course";

interface ILesson {
  watchedLessons: IWatchedLesson[] | any;
  lessonId: string;
  courseId: string;
  moduleId: string;
  userId: string;
}

const findWatchedLesson = ({
  courseId,
  lessonId,
  moduleId,
  userId,
  watchedLessons,
}: ILesson) => {
  const watchedLesson = watchedLessons?.find(
    (w: any) =>
      w.lessonId === lessonId &&
      w.courseId === courseId &&
      w.moduleId === moduleId &&
      w.userId === userId
  );
  return watchedLesson;
};

export { findWatchedLesson };
