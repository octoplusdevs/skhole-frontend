import { useCourses } from "../../hooks/useCourses";
import { Wrapper } from "./style";
import Loader from "../../Components/Loader";
import { CourseCard } from "../../Components/card";

export default function Courses() {
  const { data: courses, isLoading: isLoadingCourses } = useCourses();

  return (
    <>
      <Wrapper>
        <div className="container">
          <h4>Cursos disponiveis </h4>
          {courses?.length <= 0 && <h4>Ainda sem cursos disponíveis</h4>}
          {isLoadingCourses && <Loader />}
          {courses?.length > 0 && (
            <div className="cards">
              {courses.map((course) => (
                <CourseCard.Root
                  key={course.slug}
                  course_id={course.id}
                  slug={course.slug}
                  confirmed={course?.enrollment?.confirmed || false}
                  subscribed={course?.subscribed || false}
                  status={course?.status || "inactive"}
                >
                  <CourseCard.Thumbnail
                    src={course?.thumbnail?.url || ""}
                    alt={course?.description}
                    confirmed={course?.enrollment?.confirmed || false}
                    slug={course?.slug}
                  />
                  <CourseCard.Title
                    confirmed={course?.enrollment?.confirmed || false}
                    title={course?.title}
                    slug={course?.slug}
                  />
                  <CourseCard.Price price={course?.price} />
                  <CourseCard.Details
                    totalDuration={course?.duration}
                    totalLessons={course.modules
                      .map((module) => module.videos.length)
                      .reduce((acc, curr) => acc + curr, 0)}
                  />
                </CourseCard.Root>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
