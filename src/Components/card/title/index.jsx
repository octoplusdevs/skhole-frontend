import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

export default function Title({ confirmed, slug, title }) {
  return (
    <Wrapper>{confirmed ? <Link to={`/courses/watch/${slug}`}>{title}</Link> : title}</Wrapper>
  );
}

Title.propTypes = {
  slug: PropTypes.string.isRequired,
  confirmed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
