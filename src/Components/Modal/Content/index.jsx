import React from "react";
import { Wrapper } from "./styles";
import propTypes from "prop-types";

function Content({ title, body, icon: Icon }) {
  return (
    <Wrapper>
      {Icon && Icon}
      <h2>{title}</h2>
      <p>{body}</p>
    </Wrapper>
  );
}
Content.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  icon: propTypes.node.isRequired,
};

export default Content;
