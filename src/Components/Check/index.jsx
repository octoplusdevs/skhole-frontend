import React from "react";
import { Wrapper } from "./styles";

function CheckBox({ checked, ...rest }) {
  return (
    <Wrapper>
      <input type="checkbox" checked={checked} {...rest} />
      <span className="checkmark"></span>
    </Wrapper>
  );
}

export default CheckBox;
