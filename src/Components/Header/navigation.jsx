import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeLocation = pathSegments[1];

  return (
    <nav className="header__nav ">
      <ul>
        <li className={`${activeLocation === "courses" || activeLocation === "" ? "active" : ""}`}>
          <Link to={"/courses"}>Cursos</Link>
        </li>
        <li className={`${activeLocation === "bootcamps" ? "active" : ""}`}>
          <Link>Especialidades</Link>
        </li>
        <li className={`${activeLocation === "learn" ? "active" : ""}`}>
          <Link>Aprendizados</Link>
        </li>
        <li className={`${activeLocation === "events" ? "active" : ""}`}>
          <Link>Eventos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
