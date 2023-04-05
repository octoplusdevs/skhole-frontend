import { Wrapper } from "./style";
import Avatar from "../../assets/Avatar.png";
import { Link, useLocation } from "react-router-dom";
import { List } from "phosphor-react";

export function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeLocation = pathSegments[1];

  return (
    <Wrapper className="header">
      <div className="container flex-between">
        <div className="header__logo">
          <Link to={"/discover"}>
            <h3>SKOLÊ</h3>
          </Link>
        </div>
        <nav className="header__nav ">
          <ul>
            <li className={`${activeLocation === "courses" ? "active" : ""}`}>
              <Link to={"/courses"}>Cursos</Link>
            </li>
            <li className={`${activeLocation === "bootcamps" ? "active" : ""}`}>
              <Link to={"/bootcamps"}>Treinamentos</Link>
            </li>
            <li className={`${activeLocation === "events" ? "active" : ""}`}>
              <Link to={"/events"}>Eventos</Link>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <img src={Avatar} className="header__user-avatar" />
          <div className="header__user-info">
            <h4 className="header__user-info__name">Jandiro</h4>
            <span className="header__user-info__status">online</span>
          </div>
          <button className="user__mobile">
            <List size={32} />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
