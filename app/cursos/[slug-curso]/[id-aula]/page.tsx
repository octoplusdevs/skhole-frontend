"use client"

import { Container } from "@/components/container"
import { RenderModules } from "./render-modules"
import { RenderLesson } from "./render-lesson"
import Quiz from "@/components/quiz"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { UseGetLesson } from "@/hooks/use-get-lesson"

export default function LessonPreview() {
  const useQuery = useQueryClient()
  const { mutate: updateLesson } = UseGetLesson()
  const lessons: any = useQuery.getQueryData(["currentLesson"])
  let QUESTIONS: any

  if (lessons) {
    QUESTIONS = lessons.quizzes
  }

  useEffect(() => {
    if (!lessons) {
      const lessonsStorage = getItemLocalStorage("currentLesson")
      updateLesson({ lesson: lessonsStorage })
    }
  }, [])

  return (
    <section className="py-20">
      <main className="lg:grid grid-cols-[1fr_350px] grid-rows-[auto_auto] min-h-screen w-full">
        {/* RenderLesson ocupa col 1, row 1 */}
        <div className="col-start-1 row-start-1">
          <RenderLesson />
          <Quiz QUESTIONS={QUESTIONS} />
        </div>

        {/* RenderModules ocupa col 2, row 1 */}
        <div className="col-start-2 row-start-1 row-end-2">
          <h3 className="px-4 pt-4">Conteúdo</h3>
          <RenderModules />
        </div>

        {/* Quiz fica abaixo do RenderLesson */}

      </main>



    </section>
  )
}
