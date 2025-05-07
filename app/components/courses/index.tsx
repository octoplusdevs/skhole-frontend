"use client";
import { Clock, Star, Video } from "@phosphor-icons/react/dist/ssr";
import { CourseCard } from "../cards/course";
import { Container } from "../container";
import { SpecialTitle } from "../special-title";
import { courses } from "./data";
import { useSetItemLocalStorage } from "@/hooks/localStorage/useSetItemLocalStorage";

export const CoursesSection = () => {
  return (
    <section className="py-32">
      <Container className="flex flex-col gap-8">
        <SpecialTitle content=" Cursos disponiveis" />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(
            ({ details, id, slug, price, thumbnail, title, status }) => (
              <CourseCard.Root key={id}>
                <div className="flex flex-col gap-4">
                  <CourseCard.Thumbnail src={thumbnail} alt={title} />
                  <div className="flex flex-col gap-2">
                    <CourseCard.Title content={title} />
                    <CourseCard.Price content={price} />
                  </div>
                  <div className="flex justify-between items-center">
                    <CourseCard.Detail
                      Icon={<Clock size={24} />}
                      content={details.totalTime}
                    />
                    <CourseCard.Detail
                      Icon={<Video size={24} />}
                      content={details.lessonCount}
                    />
                    <CourseCard.Detail
                      Icon={<Star weight="fill" color="#FDB447" size={24} />}
                      content={details.category}
                    />
                  </div>
                </div>
                <CourseCard.Button
                  status={status}
                  content="Inscrever-se"
                  onClick={() =>
                    useSetItemLocalStorage(
                      "currentPage",
                      `/dashboard/cursos/${slug}`
                    )
                  }
                  target={`/dashboard/cursos/${slug}`}
                />
              </CourseCard.Root>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
