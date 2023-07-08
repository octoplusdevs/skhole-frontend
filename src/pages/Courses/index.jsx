import { Link } from "react-router-dom";
import Card from "../../Components/Cards";
import { Header } from "../../Components/Header";
import { useCourses } from "../../hooks/useCourses";
import { Wrapper } from "./style";
import useEnrollment from "../../hooks/useSubscribeCourse";
import Modal from "react-modal";
import { useState } from "react";
import { ButtonEnroll } from "../../Components/ButtonEnroll";

Modal.setAppElement("#root");

export function Courses() {
  const { mutate: enroll } = useEnrollment();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [enrollToDestroy, setEnrollToDestroy] = useState({
    id: null,
    slug_course: null,
  });
  const { mutate: destroyEnroll } = useEnrollment(true);
  const { data: courses, isLoading } = useCourses();

  const setEnrollmentToDestroy = (id, slug_course) => {
    setEnrollToDestroy({
      id,
      slug_course,
    });
    setShowConfirmationModal(true);
  };
  const handleConfirmationModal = (options) => {
    destroyEnroll(options);
    setEnrollToDestroy(null);
    setShowConfirmationModal(false);
  };
  const handleRequestCloseModal = () => {
    setShowConfirmationModal(false);
    setEnrollToDestroy(null);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h4>Tste {enrollToDestroy?.slug_course}</h4>
          <h4>Cursos</h4>
          <div className="cards">
            {isLoading && "Carregando cursos..."}
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <Link
                  key={course.slug}
                  to={course?.enrollment?.confirmed && `/courses/watch/${course.slug}`}
                >
                  <Card
                    title={course?.title}
                    duration={course?.duration}
                    thumbnail={course?.thumbnail?.url}
                    description={course?.description}
                    key={course?.slug}
                    className="card"
                  />
                  <button>
                    <h4>
                      {course?.enrollment?.confirmed
                        ? "Confirmado"
                        : course?.enrollment?.status === "active"
                        ? "Aguardando confirmacao"
                        : ""}
                    </h4>
                  </button>
                  {course?.enrollment && (
                    <ButtonEnroll
                      enrollment={course.enrollment}
                      handleEnrollmentDestroy={setEnrollmentToDestroy}
                      course={course}
                      handleEnroll={enroll}
                    />
                  )}
                </Link>
              ))
            ) : (
              <h4>Sem cursos disponíveis</h4>
            )}
          </div>
        </div>
      </Wrapper>

      <Modal
        isOpen={showConfirmationModal}
        onRequestClose={handleRequestCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
            transition: "backgroundColor 0.8s ease",
          },
          content: {
            background: "#1b2022",
            border: "1.5px solid #2b3133",
            color: "#fff",
            width: "500px",
            height: "200px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
      >
        <h2>Confirmação</h2>
        <p>Deseja confirmar a inscrição?</p>
        <div
          className="buttons"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "64px",
            fontSize: "16px",
          }}
        >
          <button
            style={{
              padding: "8px 14px",
              fontSize: "16px",
              background: "blue",
              color: "#fff",
              border: "none",
            }}
            onClick={() => handleConfirmationModal(enrollToDestroy)}
          >
            Confirmar
          </button>
          <button
            style={{
              padding: "8px 14px",
              fontSize: "16px",
              background: "red",
              color: "#fff",
              border: "none",
            }}
            onClick={handleRequestCloseModal}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
