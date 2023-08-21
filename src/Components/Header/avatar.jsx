import { List, User } from "phosphor-react";
import React from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useUserInformation } from "../../hooks/useUserInformation";
import Mobile from "./mobile";
import ContextMenu from "./context-menu";
import Cookies from "js-cookie";

function Avatar() {
  const { data: userInfo } = useUserInformation(Cookies.get("userId"));

  const [userMenuOpen, setUserMenuOpen, userMenuRef] = useClickOutside(false);
  const [mobileMenu, setMobileMenu, mobileMenuRef] = useClickOutside(false);
  return (
    <div className="header__cta">
      <div
        className="header__user"
        ref={userMenuRef}
        onClick={() => setUserMenuOpen((state) => !state)}
      >
        <div className="header__user-avatar">
          {userInfo?.avatar ? (
            <img className="avatar" src={userInfo?.avatar?.url} alt="avatar" />
          ) : (
            <div className="avatar">
              <User size={22} color="#ffffff" />
            </div>
          )}
        </div>
        <div className="header__user-info">
          <h4 className="header__user-info__name">Olá, {userInfo?.username}</h4>
          <span className="header__user-info__status">
            {userInfo?.role === "student" ? "Estudante" : "Admin"}
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
      <Mobile isOpen={mobileMenu} />
      <ContextMenu isOpen={userMenuOpen} />
    </div>
  );
}

export default Avatar;
