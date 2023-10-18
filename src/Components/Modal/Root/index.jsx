import React from "react";
import { Wrapper } from "./styles";
import propTypes from "prop-types";

function Root({ isOpen, onRequestClose, children, ...rest }) {
  return (
    <Wrapper
      {...rest}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
          transition: "backgroundColor 0.8s ease",
        },
        content: {
          background: "#1b2022",
          border: "1.5px solid #2b3133",
          position: "relative",
          color: "#fff",
          width: "100%",
          maxWidth: "380px",
          height: "100%",
          maxHeight: "240px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          transition: "0.8s ease",
        },
      }}
    >
      {children}
    </Wrapper>
  );
}
Root.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onRequestClose: propTypes.func,
  onRequestConfirm: propTypes.func,
  children: propTypes.node.isRequired,
};

export default Root;
