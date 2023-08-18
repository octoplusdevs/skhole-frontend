import { useCourses } from "../../hooks/useCourses";
import { Wrapper } from "./style";
import Loader from "../../Components/Loader";
import { CourseCard } from "../../Components/card";

export function Courses() {
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
                  slug={course.slug}
                  confirmed={course?.enrollment?.confirmed || false}
                  subscribed={course?.subscribed || false}
                  status={course?.status || "inativo"}
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
                  <CourseCard.Details />
                </CourseCard.Root>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
