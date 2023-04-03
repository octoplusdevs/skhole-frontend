import { Link } from "react-router-dom";
import Card from "../../Components/Cards";
import { Header } from "../../Components/Header";
import { useCourses } from "../../hooks/useCourses";
import { Wrapper } from "./style";

export function Discover() {
  const { data: courses } = useCourses();

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h4>Programação</h4>
          <div className="cards">
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <Link to={`/watch/course/${course.slug}`}>
                  <Card
                    title={course?.title}
                    duration={course?.duration}
                    thumbnail={course?.thumbnail?.url}
                    description={course?.description}
                    key={course?.slug}
                  />
                </Link>
              ))
            ) : (
              <h4>Sem cursos disponíveis</h4>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
