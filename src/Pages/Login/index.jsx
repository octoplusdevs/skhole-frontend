import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaLogin } from "../../Schemas";
import { Wrapper, Form, Header } from "./style";
import { useLogin } from "../../hooks/useLogin";

export function Login() {
  const { login, error, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaLogin) });

  function onSubmit(data) {
    console.log(data);
    const { username, password } = data;
    (async () => {
      await login(username, password);
      console.log(error);
    })();
  }

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <h2>Skholê</h2>
          <h1>Faça o login para continuar na plataforma</h1>
          <p>© 2022 Skholê. Powered by Octoplus</p>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <label htmlFor="username">Email</label>
            <Input
              {...register("username")}
              placeholder="Seu nome de usuário"
              ClassName={errors.username && "error"}
              Icon={EnvelopeSimple}
              type="text"
              id="username"
              autoComplete="username"
            />
            <p className="message_error">{errors?.username?.message}</p>
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
              autoComplete="current-password"
            />
            <p className="message_error">{errors?.password?.message}</p>
          </div>

          <Button text="Entrar" isLoading={isLoading} Primary disabled={isLoading} />
          <div className="links">
            <Link to={"/"}>Recuperar conta</Link>
            <Link to={"/Register"}>Criar uma nova conta</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
