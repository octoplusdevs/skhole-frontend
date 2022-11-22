import { Wrapper } from "./style";
import { forwardRef } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ color, icon: Icon, ClassName, disabled, ...rest }, ref) => (
  <Wrapper className={ClassName}>
    <div className="icon">{Icon ? <Icon size={32} color={color} /> : null}</div>
    <input disabled={disabled} readOnly={disabled} ref={ref} {...rest} />
  </Wrapper>
));

Input.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element,
  ClassName: PropTypes.string,
  disabled: PropTypes.boolean,
};
