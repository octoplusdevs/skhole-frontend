import React, { useEffect, useState, useRef } from "react";
import { Wrapper } from "./style";
import { useUserInformation } from "../../../hooks/useUserInformation";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaProfile } from "../../../Schemas";
import { Button } from "../../../Components/Button";
import useUpdateAccount from "../../../hooks/useUpdateAccount";

export function EditProfile() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [myFile, setMyFile] = useState(null);

  const [hasError, setHasError] = useState("");
  const { mutate } = useUpdateAccount(setHasError, () => {});
  const userLoggedInfo = useSelector((state) => state?.auth?.user?.user);
  const { data: userInfo } = useUserInformation(userLoggedInfo?.id);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(SchemaProfile),
    mode: "onChange",
  });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  function onSubmit(data) {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", myFile);
      formData.append("username", data.username);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      console.log(formData);
      mutate({ id: userInfo?.id, data: formData });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setMyFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (userInfo) {
      setValue("username", userInfo?.username);
      setValue("first_name", userInfo?.first_name);
      setValue("last_name", userInfo?.last_name);
      setValue("email", userInfo?.email);
      if (userInfo?.phone) setValue("phone", userInfo?.phone);
    }
  }, [userInfo, setValue]);

  return (
    <Wrapper>
      <h2>Informações de Perfil</h2>
      <div className="avatar">
        <div className="user__avatar">
          <img src={selectedImage || userInfo?.avatar?.url} alt={userInfo?.username} />
        </div>
        <div className="input__file">
          <input
            type="file"
            id="avatar"
            accept="image/*"
            {...register("avatar")}
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button onClick={handleButtonClick}>Carregar Imagem</button>
          <div className="captions">
            <span>Formatos suportados: JPEG, PNG, GIF</span>
            <br />
            <span>Tamanho máximo do arquivo: 1MB</span>
            <br />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input__group">
          <label htmlFor="username">Nome de usuário</label>
          <input
            {...register("username")}
            placeholder="Nome de usuário"
            type="text"
            className="input"
          />
          <p className="message_error">
            {errors?.username?.message || (hasError?.includes("Username") && hasError)}
          </p>
        </div>
        <div className="input__line">
          <div className="input__group">
            <label htmlFor="first_name">Nome</label>
            <input
              {...register("first_name")}
              placeholder="Primeiro nome"
              type="text"
              className="input"
            />
            <div className="message_error">
              {errors?.first_name?.message || (hasError?.includes("first_name") && hasError)}
            </div>
          </div>
          <div className="input__group">
            <label htmlFor="last_name">Sobrenome</label>
            <input
              {...register("last_name")}
              placeholder="Último nome"
              type="text"
              className="input"
            />
            <div className="message_error">
              {errors?.last_name?.message || (hasError?.includes("last_name") && hasError)}
            </div>
          </div>
        </div>
        <div className="input__group">
          <label htmlFor="email">E-mail</label>
          <input
            {...register("email")}
            placeholder="Último nome"
            autoComplete="true"
            type="email"
            className="input"
          />
          <div className="message_error">
            {errors?.email?.message || (hasError?.includes("Email") && hasError)}
          </div>
        </div>
        <div className="input__group">
          <label htmlFor="phone">Telefone</label>
          <input {...register("phone")} placeholder="Seu telefone" type="tel" className="input" />
          <div className="message_error">
            {errors?.phone?.message || (hasError?.includes("phone") && hasError)}
          </div>
        </div>
        <div className="input__group">
          <Button
            text={"Atualizar"}
            isLoading={isLoading}
            disabled={!isDirty || !isValid || isLoading}
          />
        </div>
      </form>
    </Wrapper>
  );
}
