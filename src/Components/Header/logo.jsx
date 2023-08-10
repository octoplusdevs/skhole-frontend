import React from "react";
import { Link } from "react-router-dom";
import SkholeLogo from "../../assets/Logo";

function Logo() {
  return (
    <div className="header__logo">
      <Link to={"/"} className="link">
        <SkholeLogo />
        <h3>SKHOLÊ</h3>
      </Link>
    </div>
  );
}

export default Logo;
