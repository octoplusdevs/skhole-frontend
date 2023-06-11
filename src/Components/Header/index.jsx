import { Wrapper } from "./style";
import { Link, useLocation } from "react-router-dom";
import { List, User } from "phosphor-react";
import { useSelector } from "react-redux";
import { UserMenu } from "./components/UserMenu";
import { useClickOutside } from "../../hooks/useClickOutside";
import { MobileMenu } from "./components/MobileMenu";

export function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeLocation = pathSegments[1];
  const userLoggedInfo = useSelector((state) => state?.auth?.user?.user);
  const [userMenuOpen, setUserMenuOpen, userMenuRef] = useClickOutside(false);
  const [mobileMenu, setMobileMenu, mobileMenuRef] = useClickOutside(false);

  return (
    <Wrapper className="header">
      <div className="container flex-between">
        <div className="header__logo">
          <Link to={"/"}>
            <h3>SKHOLÊ</h3>
          </Link>
        </div>
        <nav className="header__nav ">
          <ul>
            <li className={`${activeLocation === "courses" ? "active" : ""}`}>
              <Link to={"/courses"}>Cursos</Link>
            </li>
            <li className={`${activeLocation === "bootcamps" ? "active" : ""}`}>
              <Link to={"/bootcamps"}>Bootcamps</Link>
            </li>
            <li className={`${activeLocation === "events" ? "active" : ""}`}>
              <Link to={"/events"}>Eventos</Link>
            </li>
          </ul>
        </nav>
        <div className="header__cta">
          <div
            className="header__user"
            ref={userMenuRef}
            onClick={() => setUserMenuOpen((state) => !state)}
          >
            <div className="header__user-avatar">{<User size={22} color="#47fdbb" />}</div>
            <div className="header__user-info">
              <h4 className="header__user-info__name">Olá, {userLoggedInfo?.username}</h4>
              <span className="header__user-info__status">
                {userLoggedInfo?.role === "student" ? "Estudante" : "Admin"}
              </span>
            </div>
          </div>
          <button
            ref={mobileMenuRef}
            className="user__mobile"
            onClick={() => setMobileMenu((state) => !state)}
          >
            <List size={32} />
          </button>
        </div>
        <UserMenu isOpen={userMenuOpen} username={userLoggedInfo?.username} />
        <MobileMenu isOpen={mobileMenu} activeLocation={activeLocation} />
      </div>
    </Wrapper>
  );
}
