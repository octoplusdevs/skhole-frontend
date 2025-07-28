"use client";

import { useState } from "react";
import { CourseDetails } from "@/components/cards/course-details";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ValueItem } from "./value-item";
import { ModuleDetail } from "./module-detail";
import { calculatePercentage } from "@/utils/calculate-percentage";
import { useAuth } from "@/context/auth-context";
import { CourseModule, ICourse } from "@/utils/interfaces/course";
import { useGetWatchedLesson } from "@/hooks/use-get-watched-lesson";

interface ICourseDetailsArea {
  currentCourse: ICourse | null | undefined;
}

export const CourseDetailsArea = ({ currentCourse }: ICourseDetailsArea) => {
  const { user } = useAuth();
  const [accordionOpen, setAccordionOpen] = useState<any>(null);

  const { data: watchedLessons } = useGetWatchedLesson({
    courseId: currentCourse?.id,
    userId: user?.user?.id,
  });

  if (!currentCourse) return null;

  const totalLessonWatched = watchedLessons
    ? watchedLessons.filter((lesson: any) => lesson.status === "COMPLETED")
        .length
    : 0;

  const totalLessons = currentCourse?.modules?.reduce(
    (acc: number, modules: CourseModule) =>
      (acc += modules.module.lessons.length),
    0
  );

  const percentage = totalLessons
    ? calculatePercentage(totalLessonWatched, totalLessons)
    : 0;

  return (
    <div className="flex flex-col gap-14 w-full lg:max-w-[800px]">
      <CourseDetails.Root>
        <div className="flex flex-col gap-6">
          <CourseDetails.Thumbnail src={`/ts.png`} alt={currentCourse.title} />
          <div className="w-full max-w-[660px] flex flex-col gap-2">
            <CourseDetails.Title content={currentCourse.title} />
            <CourseDetails.Description content={currentCourse.description} />
          </div>
        </div>

        <div className="w-full max-w-[449px] flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <CourseDetails.Description
              content={`${percentage}%`}
              className="text-white"
            />
            <CourseDetails.Progress
              value={percentage}
              content={`${percentage}%`}
              className="rounded-[8px] bg-background"
            />
          </div>
          <CourseDetails.Description
            content={`${totalLessonWatched ?? 0} - ${
              totalLessons ?? 0
            } aulas assistidas por você`}
          />
        </div>

        <div className="w-full max-w-[240px]">
          <CourseDetails.Button className="w-full bg-black text-white p-6 lg:py-8 font-semibold text-[16px] hover:text-black sm:text-[18px]">
            Assistir amostra
          </CourseDetails.Button>
        </div>
      </CourseDetails.Root>

      <div id="modules" className="flex flex-col gap-8">
        <h4 className="font-semibold text-[20px] sm:text-[24px]">
          Todos os conteúdos
        </h4>

        <Accordion
          type="single"
          collapsible
          value={accordionOpen}
          onValueChange={setAccordionOpen}
          className="flex flex-col gap-3"
        >
          {currentCourse.modules?.map(({ module, order, id }) => {
            const completedLessons = watchedLessons
              ? watchedLessons?.filter(
                  (lesson) =>
                    module.id === lesson.moduleId &&
                    lesson.status === "COMPLETED"
                ).length
              : 0;

            const percentageModule = calculatePercentage(
              completedLessons,
              module.lessons.length
            );

            return (
              <AccordionItem
                key={id}
                value={`item-${id}`}
                className="border-none"
              >
                <AccordionTrigger
                  className={`bg-secondary px-5 py-3 rounded-[8px] items-center ${
                    accordionOpen === `item-${order}`
                      ? "rounded-b-none duration-150"
                      : "rounded-[8px] duration-300"
                  }`}
                >
                  <div className="flex gap-6 items-center w-full">
                    <ValueItem value={order} />
                    <ModuleDetail
                      title={module.title}
                      percentage={
                        module.lessons.length > 0 ? percentageModule : 0
                      }
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 p-6 bg-[#0e1728a8] rounded-b-[8px]">
                  {module.lessons.map(({ lesson }) => (
                    <span key={lesson.id}>- {lesson.title}</span>
                  ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
