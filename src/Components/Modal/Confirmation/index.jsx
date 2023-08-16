import React from "react";
import { Wrapper } from "./styles";
import { WarningCircle } from "phosphor-react";
import propTypes from "prop-types";

function Confirmation({ isOpen, onRequestClose, onRequestConfirm, ...rest }) {
  return (
    <Wrapper
      {...rest}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
          transition: "backgroundColor 0.8s ease",
        },
        content: {
          background: "#1b2022",
          border: "1.5px solid #2b3133",
          position: "relative",
          color: "#fff",
          width: "100%",
          maxWidth: "380px",
          height: "100%",
          maxHeight: "220px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          transition: "0.8s ease",
        },
      }}
    >
      <div className="modal__information">
        <WarningCircle size={40} color="#059949" weight="duotone" />
        <h2>Terminando Sessão</h2>
        <p>Se clicar em confirmar poderás entrar novamente com o seu email e senha!</p>
      </div>
      <div className="modal__footer">
        <button className="default" onClick={onRequestClose}>
          Cancelar
        </button>
        <button className="confirm" onClick={onRequestConfirm}>
          Confirmar
        </button>
      </div>
    </Wrapper>
  );
}
Confirmation.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onRequestClose: propTypes.func.isRequired,
  onRequestConfirm: propTypes.func.isRequired,
};

export default Confirmation;
