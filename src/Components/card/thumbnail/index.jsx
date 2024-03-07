import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

export default function Thumbnail({ status, src, alt, slug }) {
  return (
    <Wrapper>
      {!(status === "inactive") ? (
        <Link to={`/courses/${slug}`}>
          <img src={src} alt={alt} />
        </Link>
      ) : (
        <img src={src} alt={alt} />
      )}
    </Wrapper>
  );
}

Thumbnail.propTypes = {
  status: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
