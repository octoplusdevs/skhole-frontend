import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaLogin } from "../../Schemas";
import { Wrapper, Form, Header } from "./style";
import { loginUser } from "../../redux/auth/auth.actions";
import { useEffect } from "react";

export function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const hasError = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaLogin) });

  function onSubmit(data) {
    const { email, password } = data;
    dispatch(loginUser(email, password)).then(() => {
      navigate("/discover");
    });
  }
  useEffect(() => {
    if (isAuthenticated) navigate("/discover");
  }, []);
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
            <label htmlFor="email">Email</label>
            <Input
              {...register("email")}
              placeholder="Seu email"
              ClassName={errors.email && "error"}
              Icon={EnvelopeSimple}
              type="text"
              id="email"
              autoComplete="email"
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
              autoComplete="current-password"
            />
            <p className="message_error">
              {errors?.email?.password || (hasError?.includes("Password") && hasError)}
            </p>
          </div>

          <Button text="Entrar" Primary isLoading={isLoading} disabled={isLoading} />
          <div className="links">
            <Link to={"/"}>Recuperar conta</Link>
            <Link to={"/Register"}>Criar uma nova conta</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
