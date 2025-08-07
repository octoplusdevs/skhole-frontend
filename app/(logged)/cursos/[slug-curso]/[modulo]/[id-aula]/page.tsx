"use client";

import { useEffect } from "react";
import { Container } from "@/components/container";
import { RenderModules } from "./render-modules";
import { RenderLesson } from "./render-lesson";

import { useAuth } from "@/context/auth-context";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { useGetLesson } from "@/hooks/use-get-lesson";
import { useGetModulesByCourseId } from "@/hooks/use-get-modules-by-course-id";

import { Lesson } from "@/utils/interfaces/course";

export default function LessonPreview() {
  const { user } = useAuth();
  const userId = user?.id;

  const currentLessonId = getItemLocalStorage("currentLesson");
  const currentCourseId = getItemLocalStorage("currentCourseId");
  const currentModuleId = getItemLocalStorage("currentModuleId");

  const { data: modules } = useGetModulesByCourseId({
    courseId: currentCourseId,
    enabled: !!currentCourseId,
  });

  const {
    data: lessonFound,
    refetch,
    isLoading,
  } = useGetLesson({ lessonId: currentLessonId });

  const lesson = lessonFound?.lesson as Lesson;

  useEffect(() => {
    if (currentLessonId) {
      refetch();
    }
  }, [currentLessonId, refetch]);

  return (
    <section className="py-32">
      <Container className="flex flex-col gap-20 max-w-[2884px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {lesson && (
            <RenderLesson
              lesson={lesson}
              isLoading={isLoading}
              courseId={currentCourseId}
              moduleId={currentModuleId}
            />
          )}
          <RenderModules
            modules={modules}
            lesson={lesson}
            userId={userId ?? ""}
            courseId={currentCourseId}
          />
        </div>
        {/* <Quiz QUESTIONS={QUESTIONS} /> */}
      </Container>
    </section>
  );
}
