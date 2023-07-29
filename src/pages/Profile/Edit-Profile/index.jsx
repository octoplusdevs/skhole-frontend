import React, { useEffect } from "react";
import { Wrapper } from "./style";
// import { useState } from "react";
// import { useRef } from "react";
import { useUserInformation } from "../../../hooks/useUserInformation";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaProfile } from "../../../Schemas";
import { Button } from "../../../Components/Button";
import useUpdateAccount from "../../../hooks/useUpdateAccount";
// import avatarImg from "../../../assets/avatar.png";

export function EditProfile() {
  // const fileInputRef = useRef(null);
  // const [isLoading, setLoading] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const { mutate, isLoading } = useUpdateAccount();
  const userLoggedInfo = useSelector((state) => state?.auth?.user?.user);
  const { data: userInfo } = useUserInformation(userLoggedInfo?.id); // const userInfo = {}
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(SchemaProfile),
    mode: "onChange",
  });

  // const handleButtonClick = () => {
  //   fileInputRef.current.click();
  // };

  function onSubmit(data) {
    // console.log(userInfo);
    mutate({ id: userInfo?.id, data });
  }

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  // console.log(isDirty, isValid, errors);
  useEffect(() => {
    if (userInfo) {
      setValue("username", userInfo?.username);
      setValue("firstname", userInfo?.firstname);
      setValue("lastname", userInfo?.lastname);
      setValue("email", userInfo?.email);
      setValue("phone", userInfo?.phone);
    }
  }, [userInfo, setValue]);

  return (
    <Wrapper>
      <h2>Informações de Perfil</h2>
      {/* <div className="avatar">
        <div className="user__avatar">
          <img src={selectedImage || userInfo?.avatar?.url} alt={userInfo?.username} />
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
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input__group">
          <label htmlFor="username">Nome de usuário</label>
          <input
            {...register("username")}
            placeholder="Nome de usuário"
            type="tel"
            className="input"
          />
          <p className="message_error">{errors?.username?.message}</p>
        </div>
        <div className="input__line">
          <div className="input__group">
            <label htmlFor="firstname">Nome</label>
            <input
              {...register("firstname")}
              placeholder="Primeiro nome"
              type="text"
              className="input"
            />
            <p className="message_error">{errors?.firstname?.message}</p>
          </div>
          <div className="input__group">
            <label htmlFor="lastname">Sobrenome</label>
            <input
              {...register("lastname")}
              placeholder="Último nome"
              type="text"
              className="input"
            />
            <p className="message_error">{errors?.lastname?.message}</p>
          </div>
        </div>
        <div className="input__group">
          <label htmlFor="email">E-mail</label>
          <input {...register("email")} placeholder="Último nome" type="email" className="input" />
          <p className="message_error">{errors?.email?.message}</p>
        </div>
        <div className="input__group">
          <label htmlFor="phone">Telefone</label>
          <input {...register("phone")} placeholder="Seu telefone" type="tel" className="input" />
          <p className="message_error">{errors?.phone?.message}</p>
        </div>
        <div className="input__group">
          <Button
            text={"Salvar"}
            isLoading={isLoading}
            disabled={!isDirty || !isValid || isLoading}
          />
        </div>
      </form>
    </Wrapper>
  );
}
