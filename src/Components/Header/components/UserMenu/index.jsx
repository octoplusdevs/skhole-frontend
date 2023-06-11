import { Question, SignOut, User } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { logoutUser } from "../../../../redux/auth/auth.actions";

export function UserMenu({ isOpen }) {
  const dispatch = useDispatch();

  return (
    <Wrapper className={`${isOpen ? "show" : "hidden"}`}>
      <ul>
        <li>
          <Link to={"/me/"}>
            <User size={18} className="icon" weight="fill" />
            Meu perfil
          </Link>
        </li>
        <li>
          <Link to={"/ajuda"}>
            <Question size={18} className="icon" weight="fill" />
            Central de ajuda
          </Link>
        </li>
        <li>
          <button onClick={() => dispatch(logoutUser())}>
            <SignOut size={18} className="icon" weight="fill" />
            Terminar sessão
          </button>
        </li>
      </ul>
    </Wrapper>
  );
}
