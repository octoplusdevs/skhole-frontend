"use client"

import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import VideoPlayer from "@/components/video-player"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { UseGetLesson } from "@/hooks/use-get-lesson"

export const RenderLesson = () => {
  const queryClient = useQueryClient()
  const { mutate: updateLesson } = UseGetLesson()
  const lesson: any = queryClient.getQueryData(["currentLesson"])

  useEffect(() => {
    if (!lesson) {
      const lessonStorage = getItemLocalStorage("currentLesson")
      updateLesson({ lesson: lessonStorage })
    }
  }, [])

  const lessonId = typeof lesson?.id === "number" ? lesson.id + 1 : ""
  const lessonTitle = lesson?.title ?? ""
  const lessonDescription = lesson?.description ?? ""

  return (
    <div className="flex flex-col gap-8 w-full lg:max-w-[800px]">
      <div className="w-full rounded-[8px] bg-secondary">
        <VideoPlayer isLoading={false} url="/intro-octoplus.mp4" video_id="84323232" />
      </div>

      <div className="flex flex-col gap-4 max-w-[800px] w-full">
        <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-logo leading-[140%]">
          <span className="text-[#737272]">{lessonId}</span> {lessonTitle}
        </h1>
        <p className="text-link leading-[150%]">{lessonDescription}</p>
      </div>
    </div>
  )
}
