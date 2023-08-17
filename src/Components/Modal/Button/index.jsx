import propTypes from "prop-types";
import { Wrapper } from "./styles";

function Button({ text, onClick, ...rest }) {
  return (
    <Wrapper onClick={onClick} {...rest}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Button;
