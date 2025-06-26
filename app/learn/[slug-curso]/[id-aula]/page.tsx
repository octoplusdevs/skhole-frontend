"use client";

import { Container } from "@/components/container";
import { RenderModules } from "./render-modules";
import { RenderLesson } from "./render-lesson";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { UseGetLesson } from "@/hooks/use-get-lesson";
import { Lesson } from "@/utils/interfaces/course";
import { useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { useGetModulesByCourseId } from "@/hooks/use-get-modules-by-course-id";

export default function LessonPreview() {
  const { user } = useAuth();
  const userId = user?.user?.id;

  const currentLessonId = getItemLocalStorage("currentLesson");
  const currentCourseId = getItemLocalStorage("currentCourseId");

  const { data: modules } = useGetModulesByCourseId({
    courseId: currentCourseId,
    enabled: !!currentCourseId,
  });

  const {
    data: lessonFound,
    refetch,
    isLoading,
  } = UseGetLesson({
    lessonId: currentLessonId,
  });

  const lesson = lessonFound?.lesson as Lesson;

  useEffect(() => {
    refetch();
  }, [currentLessonId]);

  return (
    <section className="py-32">
      <Container className="flex flex-col gap-20 max-w-[2884px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <RenderLesson lesson={lesson} userId={userId} isLoading={isLoading} />
          <RenderModules
            modules={modules}
            lesson={lesson}
            userId={userId}
            courseId={currentCourseId}
          />
        </div>
        {/* <Quiz QUESTIONS={QUESTIONS} /> */}
      </Container>
    </section>
  );
}
