import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Wrapper } from "./style";
import { schemaRegister } from "../../Schemas/schemaRegister";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateAnAcount() {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaRegister) });

  function onSubmit() {
    setIsLoading(!isLoading);
    setClicked(!clicked);
  }
  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name")}
            placeholder="Seu nome do registo"
            color={errors.name && "#FD4747"}
            className={errors.name && "errorInput"}
          />

          <Input
            {...register("email")}
            placeholder="Seu endereço de email"
            color={errors.email && "#FD4747"}
            className={errors.email && "errorInput"}
          />

          <Input
            {...register("password")}
            placeholder="Sua senha"
            color={errors.password && "#FD4747"}
            className={errors.password && "errorInput"}
          />

          <Button
            Text="Entrar"
            isLoading={isLoading}
            Primary
            className={clicked === false ? "" : "clicked"}
          />
          <div className="links">
            <Link to={"/Login"}>Recuperar conta</Link>
            <Link to={"/Register"}>Criar uma nova conta</Link>
          </div>
        </form>
      </Wrapper>
    </>
  );
}
