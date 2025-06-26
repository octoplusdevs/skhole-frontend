"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckBox } from "@/components/inputs/checkbox";
import { Button } from "@/components/ui/button";
import { Books, Student } from "@phosphor-icons/react/dist/ssr";

import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { calculatePercentage } from "@/utils/calculate-percentage";

import { LessonProgress } from "./percentage";
import { IRenderModules } from "./interface";

import { UseGetWatchedLesson } from "@/hooks/use-get-watched-lesson";
import { UseWatchedLesson } from "@/hooks/use-watched-lesson";

import { useParams, useRouter } from "next/navigation";
import { CourseModule, Lesson } from "@/utils/interfaces/course";

const RenderModules = ({
  modules,
  lesson,
  userId,
  courseId,
}: IRenderModules) => {
  const { mutate: markLesson, isSuccess } = UseWatchedLesson();
  const { data: watchedLessons, refetch } = UseGetWatchedLesson({
    courseId,
    userId,
  });

  const [accordionOpen, setAccordionOpen] = useState<string>(
    getItemLocalStorage("accordion")
  );
  const [pendingNavigation, setPendingNavigation] = useState<{
    lessonId: string;
    path: string;
    lessonOrder?: number;
    moduleOrder?: number;
  } | null>(null);

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      refetch();

      if (pendingNavigation) {
        const storageItems = [
          { key: "currentLesson", value: pendingNavigation.lessonId },
          { key: "currentPage", value: pendingNavigation.path },
          { key: "lessonOrder", value: pendingNavigation.lessonOrder },
          { key: "moduleOrder", value: pendingNavigation.moduleOrder },
        ];
        storageItems.map(({ key, value }) => {
          setItemLocalStorage(key, value);
        });
        router.replace(pendingNavigation.path);
        setPendingNavigation(null);
      }
    }
  }, [isSuccess]);

  const handleLessonNavigation = (
    lesson: Lesson,
    moduleId: string,
    action: "record" | "mark" | "unmark",
    timeWatched?: number,
    watchedId?: string,
    shouldNavigate = false,
    lessonOrder?: number,
    moduleOrder?: number
  ) => {
    const payload: any = {
      action,
      courseId,
      moduleId,
      lessonId: lesson.id,
      id: watchedId,
    };

    if (timeWatched) {
      payload.timeWatched = Number(timeWatched);
    }

    markLesson(payload);

    if (shouldNavigate) {
      const isSameLesson = lesson.id === params["id-aula"];
      const newPath = `/learn/${params["slug-curso"]}/${lesson.id}`;

      if (!isSameLesson) {
        setPendingNavigation({
          lessonId: lesson.id,
          path: newPath,
          lessonOrder,
          moduleOrder,
        });
      }
    }
  };

  const getCompletedLessonIds = (moduleId: string): string[] => {
    return (
      watchedLessons
        ?.filter(
          (lesson) =>
            lesson.moduleId === moduleId && lesson.status === "COMPLETED"
        )
        .map((lesson) => lesson.lessonId) ?? []
    );
  };

  const handleCheckboxClick = (
    currentLesson: Lesson,
    moduleId: string,
    lessonId: string,
    shouldNavigate = false
  ) => {
    const watched = watchedLessons?.find(
      (w) =>
        w.lessonId === lessonId &&
        w.courseId === courseId &&
        w.moduleId === moduleId &&
        w.userId === userId
    );

    if (watched) {
      const action = watched.status === "COMPLETED" ? "unmark" : "mark";
      handleLessonNavigation(
        currentLesson,
        moduleId,
        action,
        watched.timeWatched,
        watched.id,
        shouldNavigate
      );
    }
  };

  const renderLessons = (course: CourseModule, completedLessonIds: string[]) =>
    course.module.lessons.map(({ lesson: currentLesson }, i) => (
      <CheckBox
        key={i}
        duration={Number(currentLesson.duration)}
        currentLesson={currentLesson.id === lesson.id}
        watched={completedLessonIds.includes(currentLesson.id)}
        title={currentLesson.title}
        check={() =>
          handleCheckboxClick(
            currentLesson,
            course.module.id,
            currentLesson.id,
            false
          )
        }
        onClick={() => {
          handleLessonNavigation(
            currentLesson,
            course.module.id,
            "record",
            undefined,
            undefined,
            true,
            course.module.lessons[i].order,
            course.order
          );
          setItemLocalStorage("accordion", `item-${course.module.id}`);
        }}
      />
    ));

  const renderAccordionContent = (course: CourseModule, index: number) => {
    const moduleId = course.module.id;
    const lessons = course.module.lessons;
    const completedIds = getCompletedLessonIds(moduleId);

    const percentage = calculatePercentage(completedIds.length, lessons.length);
    const progressColor = percentage >= 75 ? "#baf722" : "#f7a622";

    return (
      <AccordionItem
        key={moduleId}
        value={`item-${moduleId}`}
        className="border-none"
      >
        <AccordionTrigger className="bg-[#182132] px-5 py-3 rounded-none">
          <LessonProgress
            percentage={percentage}
            progressColor={progressColor}
            title={course.module.title}
            lessons={lessons}
          />
        </AccordionTrigger>

        <AccordionContent
          className={`flex flex-col gap-2 p-6 ${
            index + 1 === lessons.length ? "rounded-b-[8px]" : ""
          }`}
        >
          {renderLessons(course, completedIds)}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-[384px] xl:max-w-[1600px] xl:w-[30%]">
      <div className="module_area flex flex-col w-full rounded-[8px] overflow-y-scroll h-[434px] bg-secondary">
        {modules && lesson && (
          <Accordion
            type="single"
            collapsible
            value={accordionOpen}
            onValueChange={setAccordionOpen}
            className="flex flex-col gap-0 rounded-[8px]"
          >
            {modules.map((module, index) =>
              renderAccordionContent(module, index)
            )}
          </Accordion>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Button
          className="w-full h-[56px] bg-secondary text-white rounded-[2px] hover:bg-[#182132] hover:text-white"
          onClick={() => alert("Recursos da aula")}
        >
          <Books color="#fff" size={32} weight="fill" />
          Recursos da aula
        </Button>

        <Button
          disabled
          className="w-full h-[56px] rounded-[2px]"
          onClick={() => alert("Obter certificado")}
        >
          <Student color="#000" size={32} weight="fill" />
          Obter certificado
        </Button>
      </div>
    </div>
  );
};

export { RenderModules };
