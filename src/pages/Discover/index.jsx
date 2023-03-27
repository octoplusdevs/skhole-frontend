import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Card from "../../Components/Cards";
import { Header } from "../../Components/Header";
import { Wrapper } from "./style";

export function Discover() {
  const [courses, setCourses] = useState([]);
  const user = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h4>Programação</h4>
          <div className="cards">
            {courses.map((course) => (
              <Link to={`/watch/${course.id}`} onClick={() => {}}>
                <Card
                  title={course.title}
                  duration={course.duration}
                  thumbnail={course.thumbnail}
                  description={course.description}
                  key={uuid()}
                />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
