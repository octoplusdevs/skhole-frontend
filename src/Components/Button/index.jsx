import PropTypes from "prop-types";
import { CircleNotch } from "phosphor-react";
import { Wrapper } from "./style";

export function Button({ className, text, isLoading, Icon, ...rest }) {
  return (
    <Wrapper {...rest} className={className}>
      {!isLoading ? text : <CircleNotch className="loading" size={16} />}
      {Icon && <img src={Icon} />}
    </Wrapper>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  Icon: PropTypes.elementType,
  className: PropTypes.string,
  text: PropTypes.string,
};
