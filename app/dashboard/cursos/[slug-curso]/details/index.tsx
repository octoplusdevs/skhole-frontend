"use client";
import { CourseDetails } from "@/components/cards/course-details";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ValueItem } from "./value-item";
import { ModuleDetail } from "./module-detail";
import { useState } from "react";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";
import { calculatePercentage } from "@/utils/calculate-percentage";

export const CourseDetailsArea = () => {
  const [accordionOpen, setAccordionOpen] = useState<any>(null);
  const currentCourse = getItemLocalStorage("currentCourse")

  const totalLessonWatched = currentCourse.modules.map((module: any) => {
    return module.lessons.filter((lesson: any) => lesson.watched).length
  }).reduce((prev: number, curr: any) => prev += curr, 0)

  const totalLessons = currentCourse.modules.reduce((totalModule: number, currModule: any) => totalModule += currModule.lessons.length, 0)

  const percentage = calculatePercentage(totalLessonWatched, totalLessons);

  return (
    <>
      {currentCourse ? <div className="flex flex-col gap-14 w-full lg:max-w-[800px]">
        <CourseDetails.Root>
          <div className="flex flex-col gap-6">
            <CourseDetails.Thumbnail src={currentCourse.thumbnail} alt={currentCourse.title} />
            <div className="w-full max-w-[660px] flex flex-col gap-2">
              <CourseDetails.Title content={currentCourse.title} />
              <CourseDetails.Description content={currentCourse.slug} />
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
              content={`${totalLessonWatched} - ${totalLessons} aulas assistidas por voce`}
            />
          </div>

          <div className="w-full max-w-[240px]">
            <CourseDetails.Button className="w-full bg-black text-white p-6 lg:py-8   font-semibold text-[16px] hover:text-black sm:text-[18px]">
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
            {currentCourse.modules.map((module: any) => {
              let completedLessons = module.lessons.filter((lesson: any) => lesson.watched).length
              let lessons = module.lessons.length
              return (<AccordionItem
                key={module.id}
                value={`item-${module.id}`}
                className="border-none"
              >
                <AccordionTrigger
                  className={`bg-secondary px-5 py-3 rounded-[8px] items-center ${accordionOpen === `item-${module.id}`
                    ? "rounded-b-none duration-150"
                    : "rounded-[8px] duration-300"
                    }`}
                >
                  <div className="flex gap-6 items-center w-full">
                    <ValueItem value={module.id} />
                    <ModuleDetail
                      title={module.title}
                      percentage={calculatePercentage(completedLessons, lessons)}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 p-6 bg-[#0e1728a8] rounded-b-[8px]">
                  {module.lessons.map((lesson: any, index: number) => (
                    <span key={index}>- {lesson.title}</span>
                  ))}
                </AccordionContent>
              </AccordionItem>)
            })}
          </Accordion>
        </div>
      </div> : ''}
    </>
  );
};
