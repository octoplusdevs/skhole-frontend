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
      {!subscribed && (
        <Button.Default
          disabled={isEnrolling}
          onClick={() => handleEnroll(slug)}
          text={"Inscrever"}
        />
      )}
      {confirmed && subscribed && status === "ativo" && (
        <Button.Link text={"Assistir"} to={`/courses/watch/${slug}`} />
      )}
      {subscribed && !confirmed && status === "ativo" && (
        <Button.Link className="noverify" text={"Em verificação..."} />
      )}
      {status === "inativo" && (
        <Button.Link className="noverify" style={{ color: "#fff" }} text={"Brevemente"} />
      )}
    </Wrapper>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  confirmed: PropTypes.bool.isRequired,
  subscribed: PropTypes.bool.isRequired,
};
