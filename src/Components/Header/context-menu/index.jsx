import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Question, SignOut, User } from "phosphor-react";
import PropTypes from "prop-types";
import { Wrapper } from "./style";
import { logoutUser } from "../../../redux/auth/auth.actions";
import { Modal } from "../../Modal";

export default function ContextMenu({ isOpen }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  function handleCloseModal() {
    setIsOpenModal((isOpen) => !isOpen);
  }
  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleConfirmModal() {
    dispatch(logoutUser());
  }

  return (
    <Wrapper className={`${isOpen ? "show" : "hidden"}`}>
      <ul>
        <li>
          <Link to={"/me/profile"}>
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
          <button onClick={handleOpenModal}>
            <SignOut size={18} className="icon" weight="fill" />
            Terminar sessão
          </button>
        </li>
      </ul>
      <Modal.Confirmation
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        onRequestConfirm={handleConfirmModal}
      />
    </Wrapper>
  );
}

ContextMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
