"use client"

import { useEffect, useReducer, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckBox } from "@/components/inputs/checkbox"
import { Button } from "@/components/ui/button"
import { Books, Student } from "@phosphor-icons/react/dist/ssr"
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { calculatePercentage } from "@/utils/calculate-percentage"
import { LessonProgress } from "./percentage"
import { reducer } from "./reducer"
import { initialState } from "./data"
import { actions } from "./actions"
import { useQueryClient } from "@tanstack/react-query"
import { UseGetLesson } from "@/hooks/use-get-lesson"
import { UseGetCourseLessons } from "@/hooks/use-get-course-lessons"

const RenderModules = () => {
  const queryClient = useQueryClient()
  const lesson: any = queryClient.getQueryData(["currentLesson"])
  let course: any = queryClient.getQueryData(["currentCourse"])

  const { mutate: updateCourse } = UseGetCourseLessons()
  const { mutate: toggleLesson } = UseGetLesson()

  const [state, dispatch] = useReducer(reducer, initialState)
  const [accordionOpen, setAccordionOpen] = useState<string>(getItemLocalStorage("accordion"))

  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    if (!course) {
      const localCourse = getItemLocalStorage("currentCourse")
      if (localCourse) {
        queryClient.setQueryData(["currentCourse"], localCourse)
        course = localCourse
      } else {
        return
      }
    }

    const lessonId = params["id-aula"]
    course.modules.forEach((module: any) => {
      const found = module.lessons.find((lesson: any) => lesson.id === lessonId)
      if (found) toggleLesson({ lesson: found })
    })

    if (!lesson) {
      const firstLesson = course.modules?.[0]?.lessons?.[0]
      if (firstLesson) toggleLesson({ lesson: firstLesson })
    }
  }, [params, course])

  const handleLessonNavigation = (lesson: any) => {
    const newPath = `/learn/cursos/${params["slug-curso"]}/${lesson.id}`
    if (lesson.id === params["id-aula"]) return

    toggleLesson({ lesson })
    setItemLocalStorage("currentLesson", lesson)
    setItemLocalStorage("currentPage", newPath)
    router.replace(newPath)
  }

  const toggleLessonStatus = (selected: any) => {
    const updatedModules = course.modules.map((module: any) => ({
      ...module,
      lessons: module.lessons.map((l: any) => {
        if (l.id === selected.id) {
          const updated = { ...l, watched: !l.watched }
          if (updated.id === lesson?.id) toggleLesson({ lesson: updated })
          return updated
        }
        return l
      })
    }))

    const updatedCourse = { ...course, modules: updatedModules }
    updateCourse({ course: updatedCourse })
    queryClient.setQueryData(["currentCourse"], updatedCourse)

    const allLessons = updatedModules.flatMap((m: any) => m.lessons)
    const completed = allLessons.filter((l: any) => l.watched).length

    dispatch({
      type: actions.TOGGLE_COURSE_STATUS,
      payload: completed === allLessons.length ? "FINISHED" : "PENDING",
    })
  }

  const renderAccordionContent = (module: any, index: number) => {
    const completed = module.lessons.filter((l: any) => l.watched).length
    const total = module.lessons.length
    const percentage = calculatePercentage(completed, total)
    const color = percentage >= 75 ? "#baf722" : "#f7a622"

    return (
      <AccordionItem key={module.id} value={`item-${module.id}`} className="border-none">
        <AccordionTrigger className="bg-[#182132] px-5 py-3 rounded-none">
          <LessonProgress
            percentage={percentage}
            progressColor={color}
            title={module.title}
            lessons={module.lessons}
          />
        </AccordionTrigger>
        <AccordionContent className={`flex flex-col gap-2 p-6 ${index + 1 === course.modules.length ? "rounded-b-[8px]" : ""}`}>
          {module.lessons.map((l: any, i: number) => (
            <CheckBox
              key={i}
              duration={l.duration}
              currentLesson={l.id === lesson.id}
              watched={l.watched}
              title={l.title}
              check={() => toggleLessonStatus(l)}
              onClick={() => {
                handleLessonNavigation(l)
                setItemLocalStorage("accordion", `item-${module.id}`)
              }}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-[384px]">
      <div className="module_area flex flex-col w-full rounded-[8px] overflow-y-scroll h-[434px] bg-secondary">
        {course && lesson && (
          <Accordion
            type="single"
            collapsible
            value={accordionOpen}
            onValueChange={setAccordionOpen}
            className="flex flex-col gap-0 rounded-[8px]"
          >
            {course.modules.map((module: any, index: number) => renderAccordionContent(module, index))}
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
          disabled={state.courseStatus === "PENDING"}
          className="w-full h-[56px] rounded-[2px]"
          onClick={() => alert("Obter certificado")}
        >
          <Student color="#000" size={32} weight="fill" />
          Obter certificado
        </Button>
      </div>
    </div>
  )
}

export { RenderModules }
