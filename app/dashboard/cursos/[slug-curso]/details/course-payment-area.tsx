"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { User } from "@/components/user"
import { courseAdvantages } from "./data"
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage"
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage"
import { UseGetCourseLessons } from "@/hooks/use-get-course-lessons"
import { toast } from "sonner"

export const CoursePaymentArea = () => {
  const queryClient = useQueryClient()
  const { mutate: getCourse } = UseGetCourseLessons()
  const currentCourse: any = queryClient.getQueryData(["currentCourse"])
  const router = useRouter()
  const pathName = usePathname()

  const isEnrolled = false
  let isFree = false
  if (currentCourse) isFree = currentCourse.type === 'FREE'

  const getFirstLessonUrl = (): string => {
    if (!currentCourse) return ""
    const firstModule = currentCourse.modules?.[0]
    const firstLesson = firstModule?.lessons?.[0]
    return firstLesson ? `${pathName}/${firstLesson.id}` : ""
  }

  const handleButtonClick = () => {
    const url = getFirstLessonUrl()
    if (isFree) {
      router.push(url)
      setItemLocalStorage("currentPage", url)
    } else {
      toast("Efectuar pagamento")
    }
  }

  useEffect(() => {
    if (!currentCourse) {
      const courseStorage = getItemLocalStorage("currentCourse")
      getCourse({ course: courseStorage })
    }
  }, [])

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-12 lg:gap-8 w-full lg:flex-col lg:max-w-[384px]">
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-bold text-[24px] md:text-[28px] lg:text-[32px]">
          {isFree ? "Gratuito" : "17.000 kz"}
        </h3>

        <Button
          className={`py-6 font-semibold text-[16px] sm:text-[18px] ${isEnrolled || isFree
            ? "bg-[#6850a2] text-white hover:bg-[#6950a2ca] hover:text-white"
            : "bg-primary"
            }`}
          onClick={handleButtonClick}
        >
          {isFree ? "Assisir" : isEnrolled ? 'Assistir' : "Comprar agora"}
        </Button>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[384px]">
        <div className="flex flex-col gap-[18px]">
          {courseAdvantages.map(({ Icon, content, id }) => {
            const isHighlight = id === 0
            return (
              <span
                key={id}
                className={`flex gap-2 items-center text-[14px] font-medium ${isHighlight ? "text-white font-semibold" : "text-description"
                  }`}
              >
                <Icon
                  size={24}
                  weight="fill"
                  color={isHighlight ? "#F9FD47" : "#fff"}
                />
                {content}
              </span>
            )
          })}
        </div>

        <User
          name="Wilmy Danguya"
          role="Instrutor do curso"
          avatar="/user.png"
          firstName={false}
        />
      </div>
    </div>
  )
}
