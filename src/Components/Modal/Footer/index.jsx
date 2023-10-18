import React from "react";
import { Wrapper } from "./styles";
import propTypes from "prop-types";

function Footer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
Footer.propTypes = {
  children: propTypes.node.isRequired,
};

export default Footer;
