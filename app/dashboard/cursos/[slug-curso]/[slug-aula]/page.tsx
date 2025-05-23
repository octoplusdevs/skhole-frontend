"use client"

import { useEffect, useReducer } from "react"
import { useParams, useRouter } from "next/navigation"
import { Container } from "@/components/container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckBox } from "@/components/inputs/checkbox"
import VideoPlayer from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Books, CircleNotch, Student } from "@phosphor-icons/react/dist/ssr"
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage"
import { calculatePercentage } from "@/utils/calculate-percentage"
import { LessonProgress } from "./percentage"
import { reducer } from "./reducer"
import { initialState } from "./data"
import { actions } from "./actions"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"

export default function LessonPreview() {
  const course = getItemLocalStorage("currentCourse");
  const savedAccordion = getItemLocalStorage("accordion");

  const [state, dispatch] = useReducer(reducer, initialState)
  const router = useRouter()
  const params = useParams()

  const handleLessonNavigation = (lesson: any) => {
    const newPath = `/dashboard/cursos/${params["slug-curso"]}/${lesson.slug}`
    if (lesson.slug === params["slug-aula"]) return
    dispatch({ type: actions.GET_LESSON, payload: lesson })
    setItemLocalStorage("currentPage", newPath)
    router.replace(newPath)
  }

  const toggleLessonStatus = (selected: any) => {
    const updatedModules = state.currentCourse.modules.map((module: any) => {
      const updatedLessons = module.lessons.map((lesson: any) => {
        if (lesson.slug === selected.slug) {
          const updatedLesson = { ...lesson, watched: !lesson.watched }
          if (updatedLesson.slug === state.currentLesson.slug) {
            dispatch({ type: actions.GET_LESSON, payload: updatedLesson })
          }
          return updatedLesson
        }
        return lesson
      })
      return { ...module, lessons: updatedLessons }
    })

    const updatedCourse = { ...state.currentCourse, modules: updatedModules }
    dispatch({ type: actions.GET_COURSE, payload: updatedCourse })
    setItemLocalStorage("currentCourse", updatedCourse)

    const totalLessons = updatedModules.map((module: any) => module.lessons).length
    const completedLessons = updatedModules.map((module: any) => module.lessons).filter((lesson: any) => lesson.watched).length

    dispatch({
      type: actions.TOGGLE_COURSE_STATUS,
      payload: completedLessons === totalLessons ? "FINISHED" : "PENDING",
    })
  }

  useEffect(() => {
    const lessonSlug = params["slug-aula"]
    if (!state.currentCourse) return
    for (const module of state.currentCourse.modules) {
      const found = module.lessons.find((lesson: any) => lesson.slug === lessonSlug)
      if (found) {
        dispatch({ type: actions.GET_LESSON, payload: found })
        break
      }
    }
  }, [params, state.currentCourse])

  useEffect(() => {
    dispatch({ type: actions.GET_COURSE, payload: course })
    dispatch({ type: actions.TOGGLE_ACCORDION, payload: savedAccordion })

    const firstLesson = course.modules?.[0]?.lessons?.[0]
    if (firstLesson) {
      dispatch({ type: actions.GET_LESSON, payload: firstLesson })
    }
  }, [])

  if (!state.currentCourse || !state.currentLesson || !state.accordionOpen) {
    return (
      <section className="py-32">
        <Container className="flex items-center justify-center h-dvh">
          <CircleNotch
            color="#baf722"
            size={56}
            className="rotate-180 animate-spin duration-150"
          />
        </Container>
      </section>
    )
  }

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
                <span className="text-[#737272]">{state.currentLesson?.id + 1}</span> {state.currentLesson?.title}
              </h1>
              <p className="text-link leading-[150%]">{state.currentLesson?.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:max-w-[384px]">
            <div className="module_area flex flex-col w-full rounded-[8px] overflow-y-scroll h-[434px] bg-secondary">
              <Accordion
                type="single"
                collapsible
                value={state.accordionOpen}
                onValueChange={(value) =>
                  dispatch({ type: actions.TOGGLE_ACCORDION, payload: value })
                }
                className="flex flex-col gap-0 rounded-[8px]"
              >
                {state.currentCourse.modules.map((module: any, index: number) => {
                  const completed = module.lessons.filter((lesson: any) => lesson.watched).length
                  const total = module.lessons.length
                  const percentage = calculatePercentage(completed, total)
                  const color = percentage >= 75 ? "#baf722" : "#f7a622"

                  return (
                    <AccordionItem key={module.id} value={`item-${module.id}`} className="border-none">
                      <AccordionTrigger className="bg-[#182132] px-5 py-3 rounded-none">
                        <div className="flex gap-4 w-full">
                          <LessonProgress
                            percentage={percentage}
                            progressColor={color}
                            title={module.title}
                            lessons={module.lessons}
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={`flex flex-col gap-2 p-6 ${index + 1 === state.currentCourse.modules.length ? "rounded-b-[8px]" : ""}`}>
                        {module.lessons.map((lesson: any, i: number) => (
                          <CheckBox
                            key={i}
                            duration={lesson.duration}
                            watched={lesson.watched}
                            title={lesson.title}
                            check={() => toggleLessonStatus(lesson)}
                            onClick={() => {
                              handleLessonNavigation(lesson)
                              setItemLocalStorage("accordion", `item-${module.id}`)
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
                disabled={state.courseStatus === "PENDING"}
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
