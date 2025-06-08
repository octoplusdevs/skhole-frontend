"use client"

import { useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { CourseDetails } from "@/components/cards/course-details"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ValueItem } from "./value-item"
import { ModuleDetail } from "./module-detail"
import { calculatePercentage } from "@/utils/calculate-percentage"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { UseGetCourseLessons } from "@/hooks/use-get-course-lessons"

export const CourseDetailsArea = () => {
  const queryClient = useQueryClient()
  const [accordionOpen, setAccordionOpen] = useState<any>(null)
  const { mutate: getCourse } = UseGetCourseLessons()

  const currentCourse: any = queryClient.getQueryData(["currentCourse"])

  useEffect(() => {
    if (!currentCourse) {
      const storedCourse = getItemLocalStorage("currentCourse")
      getCourse({ course: storedCourse })
    }
  }, [])

  if (!currentCourse) return null

  const totalLessonWatched = currentCourse.modules
    .map((module: any) =>
      module.lessons.filter((lesson: any) => lesson.watched).length
    )
    .reduce((acc: number, count: number) => acc + count, 0)

  const totalLessons = currentCourse.modules
    .reduce((acc: number, module: any) => acc + module.lessons.length, 0)

  const percentage = calculatePercentage(totalLessonWatched, totalLessons)

  return (
    <div className="flex flex-col gap-14 w-full lg:max-w-[800px]">
      <CourseDetails.Root>
        <div className="flex flex-col gap-6">
          <CourseDetails.Thumbnail
            src={`/ts.png`}
            alt={currentCourse.title}
          />
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
            content={`${totalLessonWatched} - ${totalLessons} aulas assistidas por você`}
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
          {currentCourse.modules.map((module: any) => {
            const completedLessons = module.lessons.filter(
              (lesson: any) => lesson.watched
            ).length

            const percentageModule = calculatePercentage(
              completedLessons,
              module.lessons.length
            )

            return (
              <AccordionItem
                key={module.id}
                value={`item-${module.id}`}
                className="border-none"
              >
                <AccordionTrigger
                  className={`bg-secondary px-5 py-3 rounded-[8px] items-center ${accordionOpen === `item-${module.order}`
                    ? "rounded-b-none duration-150"
                    : "rounded-[8px] duration-300"
                    }`}
                >
                  <div className="flex gap-6 items-center w-full">
                    <ValueItem value={module.order} />
                    <ModuleDetail
                      title={module.title}
                      percentage={percentageModule}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 p-6 bg-[#0e1728a8] rounded-b-[8px]">
                  {module.lessons.map((lesson: any, index: number) => (
                    <span key={index}>- {lesson.title}</span>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
