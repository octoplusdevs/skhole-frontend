import PropTypes from "prop-types";

const EnrollmentStatus = ({ status, onClick }) => {
  const statusText = {
    active: "Inscrito",
    canceled: "Inscrever",
    completed: "Completo",
  };

  return <h1 onClick={onClick}>{statusText[status]}</h1>;
};

EnrollmentStatus.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export const ButtonEnroll = ({ course, enrollment, handleEnrollmentDestroy, handleEnroll }) => {
  const renderEnrollmentStatus = () => {
    if (enrollment.status === "active") {
      return (
        <EnrollmentStatus
          status={enrollment.status}
          onClick={() => handleEnrollmentDestroy(enrollment.id, enrollment.slug_course)}
        />
      );
    } else if (enrollment.status === "canceled") {
      return (
        <EnrollmentStatus status={enrollment.status} onClick={() => handleEnroll(course.slug)} />
      );
    } else if (enrollment.status === "completed") {
      return <EnrollmentStatus status={enrollment.status} />;
    }
  };

  return <>{renderEnrollmentStatus()}</>;
};

ButtonEnroll.propTypes = {
  course: PropTypes.object.isRequired,
  enrollment: PropTypes.object.isRequired,
  handleEnrollmentDestroy: PropTypes.func.isRequired,
  handleEnroll: PropTypes.func.isRequired,
};
