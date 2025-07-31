import { setItemLocalStorage } from "./set-item-local-storage";

interface ICourseSession {
  slug?: string;
  courseId?: string;
  lessonId?: string;
  nextPage?: string;
  lessonOrder?: string;
  moduleOrder?: string;
}

const storeCourseSession = ({
  courseId,
  lessonId,
  lessonOrder,
  moduleOrder,
  nextPage,
  slug,
}: ICourseSession) => {
  const storageItems = [
    { key: "currentPage", value: nextPage },
    { key: "currentSlugCourse", value: slug },
    { key: "currentCourseId", value: courseId },
    { key: "currentLesson", value: lessonId },
    { key: "accordion", value: "" },
    { key: "lessonOrder", value: lessonOrder },
    { key: "moduleOrder", value: moduleOrder },
  ];
  storageItems.forEach(({ key, value }) => setItemLocalStorage(key, value));
};

export { storeCourseSession };
