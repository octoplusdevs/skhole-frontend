import { useUserEnrollments } from "../../hooks/useUserEnrollments";
import { Wrapper } from "./style";
import Loader from "../../Components/Loader";
import { CourseCard } from "../../Components/card";

export default function Learning() {
  const { data: enrollments, isLoading: isLoadingCourses } = useUserEnrollments();
  return (
    <>
      <Wrapper>
        <div className="container">
          <h4>Meu Aprendizado </h4>
          {enrollments?.length <= 0 && <h4>Ainda não estás inscrito em nenhum curso.</h4>}
          {isLoadingCourses && <Loader />}
          {enrollments?.length > 0 && (
            <div className="cards">
              {enrollments.map((enrollment) => (
                <CourseCard.Root
                  key={enrollment.Course.slug}
                  slug={enrollment.Course.slug}
                  confirmed={enrollment.confirmed}
                  subscribed={enrollment.confirmed}
                  status={enrollment.confirmed && "active"}
                >
                  <CourseCard.Thumbnail
                    src={enrollment.Course?.thumbnail?.url || ""}
                    alt={enrollment.Course?.description}
                    confirmed={enrollment.confirmed}
                    slug={enrollment.Course?.slug}
                  />
                  <CourseCard.Title
                    confirmed={enrollment.confirmed}
                    title={enrollment.Course?.title}
                    slug={enrollment.Course?.slug}
                  />
                  {/* <CourseCard.Price price={enrollment.Course?.price} /> */}
                  {/* <CourseCard.Details
                    totalDuration={enrollment.Course?.duration}
                    totalLessons={enrollment.Course.modules
                      .map((module) => module.videos.length)
                      .reduce((acc, curr) => acc + curr, 0)}
                  /> */}
                </CourseCard.Root>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
