const getCompletedLessonIds = (
  moduleId: string,
  watchedLessons: any
): string[] => {
  return (
    watchedLessons
      ?.filter(
        (lesson: any) =>
          lesson.moduleId === moduleId && lesson.status === "COMPLETED"
      )
      .map((lesson: any) => lesson.lessonId) ?? []
  );
};

export { getCompletedLessonIds };
