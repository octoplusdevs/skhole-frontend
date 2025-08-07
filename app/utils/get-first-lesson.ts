import { ICourse } from "./interfaces/course";
import { setItemLocalStorage } from "./localStorage/set-item-local-storage";

const getFirstLesson = (course: ICourse) => {
  const firstModule = course.modules?.[0];
  const firstLesson = firstModule?.module?.lessons?.[0];
  if (!firstLesson) return null;
  setItemLocalStorage("currentModuleId", firstModule.moduleId);

  return {
    ...firstLesson.lesson,
    order: String(firstLesson.order ?? ""),
    moduleOrder: String(firstModule.order ?? ""),
  };
};

export { getFirstLesson };
