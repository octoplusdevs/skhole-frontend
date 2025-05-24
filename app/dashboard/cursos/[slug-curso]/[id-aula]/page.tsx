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
    <section className="py-32">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <RenderLesson />
          <RenderModules />
        </div>
        <Quiz QUESTIONS={QUESTIONS} />
      </Container>
    </section>
  )
}
