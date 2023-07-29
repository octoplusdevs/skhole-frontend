import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EnvelopeSimple, LockSimple, User } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRegister } from "../../Schemas";
import { Wrapper, Header } from "./style";
import { registerUser } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "../../Components/Form";

export function Register() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const hasError = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRegister) });

  function onSubmit(data) {
    const { username, email, password } = data;
    setLoading(true);
    dispatch(registerUser({ username, email, password })).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/courses");
  }, [isAuthenticated]);

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
            <label htmlFor="username">Nome de usuário</label>
            <Input
              {...register("username")}
              placeholder="Seu novo username"
              ClassName={errors.username && "error"}
              Icon={User}
              type="text"
              id="username"
            />
            <p className="message_error">
              {errors?.username?.message || (hasError?.includes("Username") && hasError)}
            </p>
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
            <p className="message_error">
              {errors?.email?.message || (hasError?.includes("Email") && hasError)}
            </p>
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
            <p className="message_error">
              {errors?.password?.message || (hasError?.includes("Password") && hasError)}
            </p>
          </div>

          <Button text="Criar conta" isLoading={isLoading} disabled={isLoading} Primary />
          <div className="links">
            <Link to={"/password/reset"}>Recuperar conta</Link>
            <Link to={"/"}>Fazer Login</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
