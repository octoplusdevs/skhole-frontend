import React from "react";
import { Wrapper } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../Components/Button";
import useChangePassword from "../../../hooks/useChangePassword";
import { useSelector } from "react-redux";
import { SchemaChangePassword } from "../../../Schemas";

export function ChangePassword() {
  const userLoggedInfo = useSelector((state) => state?.auth?.user?.user);
  const { mutate, isLoading } = useChangePassword(() => {});
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(SchemaChangePassword),
    mode: "onChange",
  });

  function onSubmit(data) {
    mutate({ id: userLoggedInfo?.id, data });
  }

  return (
    <Wrapper>
      <h2>Alterando a senha</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input__group">
          <label htmlFor="oldPassword">Senha atual</label>
          <input
            {...register("oldPassword")}
            placeholder="Senha atual"
            type="password"
            className="input"
          />
          <p className="message_error">{errors?.oldPassword?.message}</p>
        </div>
        <div className="input__group">
          <label htmlFor="newPassword">Nova senha</label>
          <input
            {...register("newPassword")}
            placeholder="Nova senha"
            type="password"
            className="input"
          />
          <p className="message_error">{errors?.newPassword?.message}</p>
        </div>
        <div className="input__group">
          <label htmlFor="confirmPassword">Senha atual</label>
          <input
            {...register("confirmPassword")}
            placeholder="Repita a nova senha"
            type="password"
            className="input"
          />
          <p className="message_error">{errors?.confirmPassword?.message}</p>
        </div>

        <div className="input__group">
          <Button
            text={"Atualizar senha"}
            isLoading={isLoading}
            disabled={!isDirty || !isValid || isLoading}
          />
        </div>
      </form>
    </Wrapper>
  );
}
