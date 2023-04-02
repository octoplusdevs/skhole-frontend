import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Cards";
import { Header } from "../../Components/Header";
import { fetchCourses, toggleCourse } from "../../redux/courses/courses.actions";
import { Wrapper } from "./style";

export function Discover() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state?.courses?.courses);

  function fetch() {
    dispatch(fetchCourses());
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h4>Programação</h4>
          <div className="cards">
            {courses?.map((course) => (
              <Link
                to={`/watch/course/${course.slug}`}
                onClick={() => dispatch(toggleCourse(course.slug))}
              >
                <Card
                  title={course.title}
                  duration={course.duration}
                  thumbnail={course.thumbnail}
                  description={course.description}
                  key={course.slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
