import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

function CheckBox({ checked, ...rest }) {
  return (
    <Wrapper>
      <input type="checkbox" checked={checked} {...rest} />
      <span className="checkmark"></span>
    </Wrapper>
  );
}
CheckBox.propTypes = {
  checked: PropTypes.bool,
};

export default CheckBox;
