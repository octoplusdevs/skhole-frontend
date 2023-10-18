import PropTypes from "prop-types";
import { Wrapper } from "./styles";

export default function Button({ text, onClick, ...rest }) {
  return (
    <Wrapper onClick={onClick} {...rest}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
