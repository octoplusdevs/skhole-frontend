import React from "react";
import Card from "../../Components/Cards";
import { useCourses } from "../../hooks/useCourses";
import useEnrollment from "../../hooks/useSubscribeCourse";

function ShowCourses() {
  const { mutate: enroll } = useEnrollment();

  const { data: courses } = useCourses();

  return (
    <>
      {courses?.map((course) => (
        <Card
          title={course?.title}
          duration={course?.duration}
          thumbnail={course?.thumbnail?.url}
          description={course?.description}
          key={course?.slug}
          slug={course?.slug}
          confirmed={course?.enrollment?.confirmed}
          price={course?.price}
          subscribed={
            course?.enrollment?.status === "active" || course?.enrollment?.status === "completed"
          }
          handleEnroll={enroll}
          className="card"
        />
      ))}
    </>
  );
}

export default ShowCourses;
