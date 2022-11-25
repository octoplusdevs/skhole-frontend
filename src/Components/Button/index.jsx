import PropTypes from "prop-types";
import { CircleNotch } from "phosphor-react";
import { Wrapper } from "./style";

export function Button({ className, text, isLoading = false, Icon, ...rest }) {
  return (
    <Wrapper {...rest} className={className}>
      {isLoading === false ? text : <CircleNotch className="loading" size={24} />}
      {Icon && <img src={Icon} />}
    </Wrapper>
  );
}

Button.propTypes = {
  isLoading: PropTypes.boolean,
  Icon: PropTypes.elementType,
  className: PropTypes.string,
  text: PropTypes.string,
};
