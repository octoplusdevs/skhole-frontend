import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header__logo">
      <Link to={"/"}>
        <h3>SKHOLÊ</h3>
      </Link>
    </div>
  );
}

export default Logo;
