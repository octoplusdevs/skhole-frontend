import React, { useEffect, useState, useRef } from "react";
import { Wrapper } from "./style";
import { useUserInformation } from "../../../hooks/useUserInformation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaProfile } from "../../../Schemas";
import { Button } from "../../../Components/Button";
import useUpdateAccount from "../../../hooks/useUpdateAccount";
import { User } from "phosphor-react";
import { isObjectEmpty } from "../../../utils";
import Cookies from "js-cookie";

export function EditProfile() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [myFile, setMyFile] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  const [hasError, setHasError] = useState("");
  const { mutate, isLoading } = useUpdateAccount(setHasError, () => {});
  const { data: userInfo } = useUserInformation(Cookies.get("userId"));
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
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
      const formData = new FormData();
      if (myFile) {
        formData.append("file", myFile);
      }
      if (data.username != null && data.username != "") {
        formData.append("username", data.username);
      }

      if (data.last_name != null && data.last_name != "") {
        formData.append("last_name", data.last_name);
      }
      if (data.first_name != null && data.first_name != "") {
        formData.append("first_name", data.first_name);
      }
      if (data.email != null && data.email != "") {
        formData.append("email", data.email);
      }

      if (data.phone != null && data.phone != "") {
        formData.append("phone", data.phone);
      }

      mutate({ id: userInfo?.id, data: formData });
      reset();
      setMyFile(null);
    } catch (err) {
      // console.log(err);
    }
  }
  const handleCancelImageLoad = () => {
    setMyFile(null);
    setSelectedImage(null);
  };
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
  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setValue(fieldName, fieldValue);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      setIsEmpty(isObjectEmpty(value, name, type)),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Wrapper>
      <h2>Informações de Perfil</h2>
      <div className="avatar">
        <div className="user__avatar" onClick={handleButtonClick}>
          {selectedImage || userInfo?.avatar?.url ? (
            <img src={selectedImage || userInfo?.avatar?.url} alt={userInfo?.username} />
          ) : (
            <User size={56} color="#fff" />
          )}
        </div>
        <div className="input__file">
          <input
            type="file"
            id="avatar"
            accept="image/png,image/jpeg"
            {...register("file")}
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button onClick={!myFile ? handleButtonClick : handleCancelImageLoad}>
            {myFile != null ? "Cancelar" : "Carregar Imagem"}
          </button>
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
            onChange={handleInputChange}
            placeholder={userInfo?.username}
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
              placeholder={userInfo?.first_name}
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
              placeholder={userInfo?.last_name}
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
            placeholder={userInfo?.email}
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
          <input
            {...register("phone")}
            placeholder={userInfo?.phone}
            type="tel"
            className="input"
          />
          <div className="message_error">
            {errors?.phone?.message || (hasError?.includes("phone") && hasError)}
          </div>
        </div>
        <div className="input__group">
          {myFile ? (
            <Button text={"Atualizar"} isLoading={isLoading} disabled={!myFile} />
          ) : (
            <Button
              text={"Atualizar"}
              isLoading={isLoading}
              disabled={!isDirty || !isValid || isLoading || isEmpty}
            />
          )}
        </div>
      </form>
    </Wrapper>
  );
}
