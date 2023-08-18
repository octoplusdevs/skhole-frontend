import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

export default function Mobile({ isOpen, activeLocation }) {
  return (
    <Wrapper className={`${isOpen ? "show" : "hidden"}`}>
      <ul>
        <li className={`${activeLocation === "courses" || activeLocation === "" ? "active" : ""}`}>
          <Link to={"/courses"}>Cursos</Link>
        </li>
        <li className={`${activeLocation === "bootcamps" ? "active" : ""}`}>
          <Link>Especialidades</Link>
        </li>
        <li className={`${activeLocation === "events" ? "active" : ""}`}>
          <Link>Eventos</Link>
        </li>
        <li className={`${activeLocation === "learn" ? "active" : ""}`}>
          <Link to={"/learn"}>Meu Aprendizado</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

Mobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeLocation: PropTypes.string,
};
