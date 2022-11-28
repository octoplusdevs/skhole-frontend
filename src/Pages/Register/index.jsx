import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EnvelopeSimple, LockSimple, User } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignup } from "../../hooks/useSignup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRegister } from "../../Schemas";
import { Wrapper, Form, Header } from "./style";

export function Register() {
  const { signup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRegister) });

  function onSubmit(data) {
    const { username, email, password } = data;
    signup(username, email, password);
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
            <label htmlFor="username">Nome</label>
            <Input
              {...register("username")}
              placeholder="Seu novo username"
              ClassName={errors.username && "error"}
              Icon={User}
              type="text"
              id="username"
            />
            <p className="message_error">{errors?.username?.message}</p>
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

          <Button text="Entrar" isLoading={isLoading} disabled={isLoading} Primary />
          <div className="links">
            <Link to={"/Recover-Account"}>Recuperar conta</Link>
            <Link to={"/Login"}>Fazer Login</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
