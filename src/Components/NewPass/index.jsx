import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Wrapper } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { schemaLogin } from "../../Schemas/schemaLogin";
import { Link } from "react-router-dom";
import { EnvelopeSimple } from "phosphor-react";

export function NewPass() {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  function onSubmit(data) {
    console.log(data);
    setIsLoading(!isLoading);
    setClicked(!clicked);
  }

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            placeholder="Seu endereço de email"
            ClassName={errors.email && "error"}
            icon={EnvelopeSimple}
            type="email"
          />
          <p>{errors.email}</p>

          <Input
            {...register("password")}
            placeholder="Sua senha"
            ClassName={errors.email && "error"}
            icon={EnvelopeSimple}
            type="password"
          />

          <Button
            Text="Entrar"
            isLoading={true}
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
