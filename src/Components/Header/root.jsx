import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

function Root({ children }) {
  return (
    <Wrapper>
      <div className="container flex-between">{children}</div>
    </Wrapper>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
