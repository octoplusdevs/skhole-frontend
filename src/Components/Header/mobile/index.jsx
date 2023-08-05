import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

export default function Mobile({ isOpen, activeLocation }) {
  return (
    <Wrapper className={`${isOpen ? "show" : "hidden"}`}>
      <ul>
        <li className={`${activeLocation === "courses" ? "active" : ""}`}>
          <Link to={"/courses"}>Cursos</Link>
        </li>
        <li className={`${activeLocation === "bootcamps" ? "active" : ""}`}>
          <Link to={"/bootcamps"}>Trilhas</Link>
        </li>
        <li className={`${activeLocation === "events" ? "active" : ""}`}>
          <Link to={"/events"}>Aprendizados</Link>
        </li>
        <li className={`${activeLocation === "events" ? "active" : ""}`}>
          <Link to={"/events"}>Eventos</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

Mobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeLocation: PropTypes.string,
};
