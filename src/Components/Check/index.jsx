import React from "react";
import { Wrapper } from "./styles";
import { Check } from "phosphor-react";

function CheckBox({ checked, ...rest }) {
  return (
    <Wrapper>
      <div className="checkbox">
        <input type="checkbox" checked={checked} {...rest} />
        {checked && <Check color="#47fdbb" size={18} weight="bold"/>}
      </div>
      <span className="checkmark"></span>
    </Wrapper>
  );
}

export default CheckBox;
