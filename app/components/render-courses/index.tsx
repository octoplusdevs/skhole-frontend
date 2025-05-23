"use client"

import { Clock, Star, Video } from "@phosphor-icons/react/dist/ssr"
import { CourseCard } from "../cards/course"
import { Container } from "../container"
import { SpecialTitle } from "../special-title"
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage"
import { formatTime } from "@/utils/format-time"
import { ICourseSection } from "./interface"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { UseGetCourseLessons } from "@/hooks/use-get-course-lessons"
import { UseGetLesson } from "@/hooks/use-get-lesson"

export const RenderCourses = ({ children, courses, title }: ICourseSection) => {
  const { mutate: watchedCourse } = UseGetCourseLessons()
  const { mutate: getLesson } = UseGetLesson()
  const router = useRouter()

  const hasCourses = Array.isArray(courses) && courses.length > 0
  const getFirstLesson = (course: any) => course.modules?.[0]?.lessons?.[0]

  const storeCommonCourseData = (course: any, lesson: any, nextPage: string) => {
    const storageItems = [
      { key: "currentPage", value: nextPage },
      { key: "currentCourse", value: course },
      { key: "currentLesson", value: lesson },
      { key: "accordion", value: '' }
    ]
    storageItems.forEach(({ key, value }) => setItemLocalStorage(key, value))
  }

  const handleCourseClick = (course: any) => {
    const lesson = getFirstLesson(course)
    const nextPage = `/dashboard/cursos/${course.slug}/${lesson.id}`

    switch (course.status) {
      case 'ENROLLED':
        storeCommonCourseData(course, lesson, nextPage)
        watchedCourse({ course })
        getLesson({ lesson })
        router.push(nextPage)
        break

      case 'PENDING':
        toast("O seu pagamento ainda não foi aprovado")
        break

      default:
        storeCommonCourseData(course, "", `/dashboard/cursos/${course.slug}`)
        watchedCourse({ course })
        router.push(`/dashboard/cursos/${course.slug}`)
        break
    }
  }

  const handleThumbnailClick = (course: any) => {
    const lesson = getFirstLesson(course)
    const nextPage = `/dashboard/cursos/${course.slug}`
    storeCommonCourseData(course, lesson, nextPage)
    watchedCourse({ course })
    getLesson({ lesson })
  }

  const calculateTotalDuration = (course: any) =>
    course.modules.reduce((acc: number, module: any) =>
      acc + module.lessons.reduce((sum: number, lesson: any) => sum + lesson.duration, 0)
      , 0)

  const calculateTotalLessons = (course: any) =>
    course.modules.reduce((total: number, module: any) => total + module.lessons.length, 0)

  return (
    <section className="py-32">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content={title} />

        {hasCourses && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => {
              const totalDuration = formatTime(calculateTotalDuration(course))
              const totalLessons = calculateTotalLessons(course)

              return (
                <CourseCard.Root key={course.id}>
                  <div className="flex flex-col gap-4">
                    <CourseCard.Thumbnail
                      src={'/ts.png'}
                      alt={course.title}
                      onClick={() => handleThumbnailClick(course)}
                      target={`/dashboard/cursos/${course.slug}`}
                    />
                    <div className="flex flex-col gap-2">
                      <CourseCard.Title content={course.title} />
                      <CourseCard.Price content={course.price} />
                    </div>
                    <div className="flex justify-between items-center">
                      <CourseCard.Detail Icon={<Clock size={24} />} content={totalDuration} />
                      <CourseCard.Detail Icon={<Video size={24} />} content={totalLessons} />
                      <CourseCard.Detail Icon={<Star weight="fill" color="#FDB447" size={24} />} content={totalLessons} />
                    </div>
                  </div>
                  <CourseCard.Button
                    status={course.status}
                    content={course.status === 'ENROLLED' ? 'Assistir' : ''}
                    onClick={() => handleCourseClick(course)}
                  />
                </CourseCard.Root>
              )
            })}
          </div>
        )}

        {children}
      </Container>
    </section>
  )
}
