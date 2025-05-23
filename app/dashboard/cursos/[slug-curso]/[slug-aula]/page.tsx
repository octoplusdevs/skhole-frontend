"use client"

import { Container } from "@/components/container"
import { RenderModules } from "./render-modules"
import { RenderLesson } from "./render-lesson"

export default function LessonPreview() {
  return (
    <section className="py-32">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <RenderLesson />
          <RenderModules />
        </div>

        <div>Quiz</div>
      </Container>
    </section>
  )
}
