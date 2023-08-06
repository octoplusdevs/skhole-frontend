import { List, User } from "phosphor-react";
import React from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useUserInformation } from "../../hooks/useUserInformation";
import { useSelector } from "react-redux";
import Mobile from "./mobile";
import ContextMenu from "./context-menu";

function Avatar() {
  const userLoggedInfo = useSelector((state) => state?.auth?.user?.user);

  const { data: userInfo } = useUserInformation(userLoggedInfo?.id);

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
            <img src={userInfo?.avatar?.url} alt="avatar" />
          ) : (
            <User size={22} color="#ffffff" />
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
