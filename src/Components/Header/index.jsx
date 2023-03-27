import { Wrapper } from "./style";
import Avatar from "../../assets/Avatar.png";
import hamburguer from "../../assets/List.svg";
import { Link } from "react-router-dom";
import { Watching } from "../../pages/Watching";

export function Header() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="logo">
            <Link to={"/discover"}>
              <h3>SKOLÊ</h3>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/discover"}>Discover</Link>
              </li>
              <li>
                <Link to={"/courses"}>Cursos</Link>
              </li>
              <li>
                <Link to={"/profile"}>Perfil</Link>
              </li>
            </ul>
          </nav>
          <div className="menu-mobile">
            <div className="user">
              <img src={Avatar} />
            </div>
            <img src={hamburguer} />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
