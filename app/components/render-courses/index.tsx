"use client";
import { Clock, Star, Video } from "@phosphor-icons/react/dist/ssr";
import { CourseCard } from "../cards/course";
import { Container } from "../container";
import { SpecialTitle } from "../special-title";
import { setItemLocalStorage } from "@/utils/localStorage/set-item-local-storage";
import { formatTime } from "@/utils/format-time";
import { ICourseSection } from "./interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const RenderCourses = ({ children, courses, title }: ICourseSection) => {
  const router = useRouter()
  const showCourses = courses && typeof courses === "object" && courses.length > 0

  const redirectUser = (course: any) => {
    const slugLesson = course.modules[0].lessons[0].slug
    const nextPage = `/dashboard/cursos/${course.slug}/${slugLesson}`

    const storageItems = [
      { key: "currentPage", value: nextPage },
      { key: "currentCourse", value: course },
    ]

    switch (course.status) {
      case 'ENROLLED': {
        storageItems.some(({ key, value }) => {
          setItemLocalStorage(key, value)
        })
        router.push(nextPage)
        break
      }
      case 'PENDING': {
        toast("O seu pagamento ainda não foi aprovado")
        break
      }
      default: {
        toast("Efectuar pagamento")
        break
      }
    }
  }

  const goCourseDetailsPage = (course: any) => {
    const storageItems = [
      { key: "currentPage", value: `/dashboard/cursos/${course.slug}` },
      { key: "currentCourse", value: course }
    ]

    storageItems.some(({ key, value }) => {
      setItemLocalStorage(key, value)
    })
  }

  return (
    <section className="py-32">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content={title} />

        {showCourses ? <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(
            (course) => (
              <CourseCard.Root key={course.id}>
                <div className="flex flex-col gap-4">
                  <CourseCard.Thumbnail src={course.thumbnail} alt={course.title} onClick={() => goCourseDetailsPage(course)}
                    target={`/dashboard/cursos/${course.slug}`}
                  />
                  <div className="flex flex-col gap-2">
                    <CourseCard.Title content={course.title} />
                    <CourseCard.Price content={course.price} />
                  </div>
                  <div className="flex justify-between items-center">
                    <CourseCard.Detail
                      Icon={<Clock size={24} />}
                      content={formatTime(
                        course.modules.reduce((acc: number, curr: any) => {
                          return acc + curr.lessons.reduce((sum: number, lesson: any) => sum + lesson.duration, 0);
                        }, 0)
                      )}
                    />
                    <CourseCard.Detail
                      Icon={<Video size={24} />}
                      content={course.modules.reduce((prev: number, curr: any) => prev += curr.lessons.length, 0)}
                    />
                    <CourseCard.Detail
                      Icon={<Star weight="fill" color="#FDB447" size={24} />}
                      content={course.details.evaluation}
                    />
                  </div>
                </div>
                <CourseCard.Button
                  status={course.status}
                  content={course.status === 'ENROLLED' ? 'Assistir' : ''}
                  onClick={() => redirectUser(course)}
                />
              </CourseCard.Root>
            )
          )}
        </div> : ''}
        {children}
      </Container>
    </section>
  );
};
