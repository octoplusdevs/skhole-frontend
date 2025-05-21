"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { modules } from "@/utils/data"
import { Container } from "@/components/container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckBox } from "@/components/inputs/checkbox"
import VideoPlayer from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Books, Student } from "@phosphor-icons/react/dist/ssr"
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { calculatePercentage } from "@/utils/calculate-percentage"
import { LessonProgress } from "./percentage"

export default function LessonPreview() {
  const savedAccordion = getItemLocalStorage("accordion")
  const [accordionOpen, setAccordionOpen] = useState<string>(savedAccordion)
  const [currentLesson, setCurrentLesson] = useState<any>(modules[0].lessons[0])
  const [courseStatus, setCourseStatus] = useState<"PENDING" | "FINISHED">("PENDING")
  const [, refresh] = useState(0)
  const router = useRouter()
  const params = useParams()

  const handleLessonNavigation = (lesson: any) => {
    const newPath = `/dashboard/cursos/${params["slug-curso"]}/${lesson.slug}`
    if (lesson.slug === params["slug-aula"]) return
    setCurrentLesson(lesson)
    setItemLocalStorage("currentPage", newPath)
    router.replace(newPath)
  }

  const toggleLessonStatus = (selected: any) => {
    for (const module of modules) {
      const target = module.lessons.find(lesson => lesson.slug === selected.slug)
      if (target) {
        target.watched = !target.watched
        if (target.slug === currentLesson.slug) setCurrentLesson({ ...target })
        refresh(prev => prev + 1)
      }

      const completed = module.lessons.filter(lesson => lesson.watched).length
      const total = module.lessons.length
      setCourseStatus(completed === total ? "FINISHED" : "PENDING")
    }
  }

  useEffect(() => {
    const lessonSlug = params["slug-aula"]
    for (const module of modules) {
      const found = module.lessons.find(lesson => lesson.slug === lessonSlug)
      if (found) setCurrentLesson(found)
    }
  }, [params])

  return (
    <section className="py-32">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-8 w-full lg:max-w-[800px]">
            <div className="w-full rounded-[8px] bg-secondary">
              <VideoPlayer isLoading={true} url="/intro-octoplus.mp4" video_id="84323232" />
            </div>
            <div className="flex flex-col gap-4 max-w-[800px] w-full">
              <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-logo leading-[140%]">
                <span className="text-[#737272]">{currentLesson.id}</span> {currentLesson?.title}
              </h1>
              <p className="text-link leading-[150%]">{currentLesson?.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:max-w-[384px]">
            <div id="modules" className="module_area flex flex-col w-full rounded-[8px] overflow-y-scroll h-[434px] bg-secondary">
              <Accordion
                type="single"
                collapsible
                value={accordionOpen}
                onValueChange={setAccordionOpen}
                className="flex flex-col gap-0 rounded-[8px]"
              >
                {modules.map(({ id, lessons, title }, idx) => {
                  const completed = lessons.filter(l => l.watched).length
                  const total = lessons.length
                  const percentage = calculatePercentage(completed, total)
                  const color = percentage >= 75 ? "#baf722" : "#f7a622"

                  return (
                    <AccordionItem key={id} value={`item-${id}`} className="border-none">
                      <AccordionTrigger className="bg-[#182132] px-5 py-3 rounded-none">
                        <div className="flex gap-4 w-full">
                          <LessonProgress
                            percentage={percentage}
                            progressColor={color}
                            title={title}
                            lessons={lessons}
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={`flex flex-col gap-2 p-6 ${idx + 1 === modules.length ? "rounded-b-[8px]" : ""}`}>
                        {lessons.map((lesson, i) => (
                          <CheckBox
                            key={i}
                            duration={lesson.duration}
                            watched={lesson.watched}
                            title={lesson.title}
                            check={() => toggleLessonStatus(lesson)}
                            onClick={() => {
                              handleLessonNavigation(lesson)
                              setItemLocalStorage("accordion", `item-${id}`)
                            }}
                          />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
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
                disabled={courseStatus === "PENDING"}
                className="w-full h-[56px] rounded-[2px]"
                onClick={() => alert("Obter certificado")}
              >
                <Student color="#000" size={32} weight="fill" />
                Obter certificado
              </Button>
            </div>
          </div>
        </div>

        <div>Quiz</div>
      </Container>
    </section>
  )
}
