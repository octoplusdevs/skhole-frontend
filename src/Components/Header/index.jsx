import { Wrapper } from "./style";
import Avatar from "../../assets/Avatar.png";
import hamburguer from "../../assets/List.svg";
import { Link } from "react-router-dom";
import { Watching } from "../../Pages/Watching";

export function Header() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="logo">
            <h3>SKOLÊ</h3>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Discover</Link>
              </li>
              <li>
                <Link to={"/watch"}>Watch</Link>
              </li>
              <li>
                <Link to={"/Watching"}>Cursos</Link>
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
