import React from "react";
import { Wrapper } from "./style";
import { useState } from "react";
import { useRef } from "react";
import avatarImg from "../../../assets/avatar.png";

export function EditProfile() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Wrapper>
      <h2>Informações de Perfil</h2>
      <div className="avatar">
        <div className="user__avatar">
          <img src={selectedImage || avatarImg} alt="" />
        </div>
        <div className="input__file">
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button onClick={handleButtonClick}>Carregar Imagem</button>
          <div className="captions">
            <span>At least 800x800 px recommended.</span> <br />
            <span>JPG or PNG and GIF is allowed.</span>
          </div>
        </div>
      </div>
      <form action="" className="form">
        <div className="input__group">
          <label htmlFor="username">Nome de usuário</label>
          <input name="username" placeholder="Nome de usuário" type="tel" className="input" />
        </div>
        <div className="input__line">
          <div className="input__group">
            <label htmlFor="firstname">Nome</label>
            <input name="firstname" placeholder="Primeiro nome" type="text" className="input" />
          </div>
          <div className="input__group">
            <label htmlFor="lastname">Sobrenome</label>
            <input name="lastname" placeholder="Último nome" type="text" className="input" />
          </div>
        </div>
        <div className="input__group">
          <label htmlFor="lastname">E-mail</label>
          <input name="lastname" placeholder="Último nome" type="email" className="input" />
        </div>
        <div className="input__group">
          <label htmlFor="lastname">Telefone</label>
          <input name="lastname" placeholder="Seu telefone" type="tel" className="input" />
        </div>
        <div className="input__group">
          <button>Salvar Alterações</button>
        </div>
      </form>
    </Wrapper>
  );
}
