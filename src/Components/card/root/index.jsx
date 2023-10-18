import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import useEnrollment from "../../../hooks/useSubscribeCourse";
import { Button } from "../button";

export default function Root({ children, slug, confirmed, subscribed, status }) {
  const { mutate, isLoading: isEnrolling } = useEnrollment();

  function handleEnroll(slug) {
    mutate(slug);
  }
  return (
    <Wrapper>
      {children}
      {!subscribed && status === "active" && (
        <Button.Default
          disabled={isEnrolling}
          onClick={() => handleEnroll(slug)}
          text={"Inscrever"}
        />
      )}
      {confirmed && subscribed && status === "active" && (
        <Button.Link text={"Assistir"} to={`/courses/watch/${slug}`} />
      )}
      {subscribed && !confirmed && status === "active" && (
        <Button.Link className="noverify" text={"Em verificação..."} />
      )}
      {status === "inactive" && (
        <Button.Link className="noverify" style={{ color: "#fff" }} text={"Brevemente"} />
      )}
    </Wrapper>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
  status: PropTypes.any,
  confirmed: PropTypes.bool.isRequired,
  subscribed: PropTypes.bool.isRequired,
};
