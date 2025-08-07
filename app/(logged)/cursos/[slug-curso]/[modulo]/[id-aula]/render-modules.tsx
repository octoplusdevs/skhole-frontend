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
import {
  ILessonNavigation,
  IPayload,
  IPendingNavigation,
  IRenderModules,
} from "./interface";

import { useGetWatchedLesson } from "@/hooks/use-get-watched-lesson";
import { useWatchedLesson } from "@/hooks/use-watched-lesson";

import { useParams, useRouter } from "next/navigation";
import { CourseModule, Lesson } from "@/utils/interfaces/course";
import { getCompletedLessonIds } from "./utils/get-completed-lesson-ids";
import { storeNavigationItems } from "./utils/store-navigation-items";
import { findWatchedLesson } from "./utils/find-watched-lesson";

const RenderModules = ({
  modules,
  lesson,
  userId,
  courseId,
}: IRenderModules) => {
  const params = useParams();
  const router = useRouter();
  const { mutate: watchLesson, isSuccess } = useWatchedLesson();
  const { data: watchedLessons, refetch } = useGetWatchedLesson({
    courseId,
    userId,
  });

  const [accordionOpen, setAccordionOpen] = useState<string>(
    getItemLocalStorage("accordion")
  );
  const [pendingNavigation, setPendingNavigation] =
    useState<IPendingNavigation | null>(null);

  useEffect(() => {
    if (isSuccess) {
      refetch();

      if (pendingNavigation) {
        storeNavigationItems(pendingNavigation);
        router.replace(pendingNavigation.path);
        setPendingNavigation(null);
      }
    }
  }, [isSuccess]);

  const updateUrl = (
    lesson: any,
    moduleId: string,
    moduleOrder?: number,
    lessonOrder?: number
  ) => {
    const isSameLesson =
      lesson.id === params["id-aula"] &&
      String(moduleOrder) === params["modulo"];

    if (!isSameLesson) {
      const newPath = `/cursos/${params["slug-curso"]}/modulo${moduleOrder}/${lesson.id}`;
      setPendingNavigation({
        lessonId: lesson.id,
        path: newPath,
        lessonOrder,
        moduleOrder,
        moduleId,
      });
    }
  };

  const handleLessonNavigation = ({
    action,
    lesson,
    moduleId,
    shouldNavigate = false,
    lessonOrder,
    moduleOrder,
    timeWatched,
    watchedId,
  }: ILessonNavigation) => {
    const payload: IPayload = {
      action,
      courseId,
      moduleId,
      lessonId: lesson.id,
      id: watchedId,
    };

    if (timeWatched) {
      payload.timeWatched = Number(timeWatched);
    }

    watchLesson(payload);

    if (shouldNavigate) {
      updateUrl(lesson, moduleId, moduleOrder, lessonOrder);
    }
  };

  const handleCheckboxClick = (
    currentLesson: Lesson,
    moduleId: string,
    lessonId: string,
    shouldNavigate = false
  ) => {
    const watched = findWatchedLesson({
      courseId,
      lessonId,
      moduleId,
      userId,
      watchedLessons,
    });

    if (watched) {
      const action = watched.status === "COMPLETED" ? "unmark" : "mark";
      handleLessonNavigation({
        lesson: currentLesson,
        moduleId,
        action,
        timeWatched: watched.timeWatched,
        watchedId: watched.id,
        shouldNavigate,
      });
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
          handleLessonNavigation({
            lesson: currentLesson,
            moduleId: course.module.id,
            action: "record",
            timeWatched: undefined,
            watchedId: undefined,
            shouldNavigate: true,
            lessonOrder: course.module.lessons[i].order,
            moduleOrder: course.order,
          });
          setItemLocalStorage("accordion", `item-${course.module.id}`);
        }}
      />
    ));

  const renderAccordionContent = (course: CourseModule, index: number) => {
    const moduleId = course.module.id;
    const lessons = course.module.lessons;
    const completedIds = getCompletedLessonIds(moduleId, watchedLessons);

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
