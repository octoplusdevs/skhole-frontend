import { Wrapper } from "./style";
import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { EyeClosed, Eye } from "phosphor-react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ color, Icon, ClassName, type = "text", ...rest }, ref) => {
  const [inputType, setInputType] = useState(type);

  function toggleTypeInput(e) {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <Wrapper className={ClassName}>
      {Icon && (
        <div className="icon">
          <Icon size={32} color={color} />
        </div>
      )}
      <input type={inputType} ref={ref} {...rest} />
      {type === "password" ? (
        <button className="Eye" onClick={toggleTypeInput}>
          {inputType === "password" ? (
            <EyeClosed size={30} color="#323232" />
          ) : (
            <Eye size={30} color="#47FDBB" />
          )}
        </button>
      ) : null}
    </Wrapper>
  );
});

Input.propTypes = {
  color: PropTypes.string,
  Icon: PropTypes.elementType,
  ClassName: PropTypes.string,
  type: PropTypes.string,
};
