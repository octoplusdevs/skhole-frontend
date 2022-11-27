import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EnvelopeSimple, LockSimple, User } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRegister } from "../../Schemas";
import { Wrapper, Form, Header } from "./style";

export function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRegister) });

  function onSubmit(data) {
    console.log(data);
    setIsLoading(!isLoading);
  }

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <h2>Skholê</h2>
          <h1>Crie uma conta grátis na nossa plataforma</h1>
          <p>© 2022 Skholê. Powered by Octoplus</p>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <label htmlFor="name">Nome</label>
            <Input
              {...register("name")}
              placeholder="Seu nome do registo"
              ClassName={errors.name && "error"}
              Icon={User}
              type="text"
              id="name"
            />
            <p className="message_error">{errors?.name?.message}</p>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <Input
              {...register("email")}
              placeholder="Seu endereço de email"
              ClassName={errors.email && "error"}
              Icon={EnvelopeSimple}
              type="email"
              id="email"
            />
            <p className="message_error">{errors?.email?.message}</p>
          </div>

          <div className="input">
            <label htmlFor="password">Senha</label>
            <Input
              {...register("password")}
              placeholder="Sua senha"
              ClassName={errors.password && "error"}
              Icon={LockSimple}
              type="password"
              id="password"
            />
            <p className="message_error">{errors?.password?.message}</p>
          </div>

          <Button
            text="Entrar"
            isLoading={isLoading}
            Primary
            // onClick={() => setIsLoading(!isLoading)}
          />
          <div className="links">
            <Link to={"/Login"}>Recuperar conta</Link>
            <Link to={"/Register"}>Criar uma nova conta</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
