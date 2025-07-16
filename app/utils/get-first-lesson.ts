import { ICourse } from "./interfaces/course";

const getFirstLesson = (course: ICourse) => {
  const firstModule = course.modules?.[0];
  const firstLesson = firstModule?.module?.lessons?.[0];
  if (!firstLesson) return null;

  return {
    ...firstLesson.lesson,
    order: String(firstLesson.order),
    moduleOrder: String(firstModule.order),
  };
};

export { getFirstLesson };
