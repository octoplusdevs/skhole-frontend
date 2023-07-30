import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaResetPassword } from "../../Schemas";
import { Wrapper, Form, Header, Message } from "./style";
import { resetPassword } from "../../redux/resetPassword/forgotPassword.actions";
import { useEffect, useState } from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export function ResetPassword() {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.resetPassword.error);
  const isSuccess = useSelector((state) => state.resetPassword.isSuccess);
  const navigate = useNavigate();
  const { token } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromURL = queryParams.get("email");
  const [email, setEmail] = useState(emailFromURL || "");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaResetPassword) });

  function onSubmit(data) {
    const { email, password, confirmPassword } = data;
    console.log({ token, email, password, confirmPassword });
    dispatch(resetPassword(token, email, password, confirmPassword));
  }
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  //faz o redirecionamento caso o usuário esteja logado
  useAuthRedirect("/courses");

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <h2>Skholê</h2>
          <h1>Faça o login para continuar na plataforma</h1>
          <p>© 2022 Skholê. Powered by Octoplus</p>
        </Header>
        {hasError ? (
          <Message>
            <p>
              {hasError && "O token de redefinição de senha é inválido ou já expirou."}
              <br />
              {hasError && "Por favor, solicite um novo link de redefinição de senha."}
            </p>
          </Message>
        ) : undefined}
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
              value={email}
              onChange={handleEmailChange}
            />
            <p className="message_error">
              {errors?.email?.message || (hasError?.includes("email") && hasError)}
            </p>
          </div>
          <div className="input">
            <label htmlFor="password">Nova senha</label>
            <Input
              {...register("password")}
              placeholder="Sua nova senha"
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
          <div className="input">
            <label htmlFor="password">Repita a senha</label>
            <Input
              {...register("confirmPassword")}
              placeholder="Repita a senha nova"
              ClassName={errors.confirmPassword && "error"}
              Icon={LockSimple}
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <p className="message_error">
              {errors?.email?.password || (hasError?.includes("confirmPassword") && hasError)}
            </p>
          </div>
          <Button text="Alterar senha" Primary isLoading={false} disabled={false} />
          <div className="links">
            <Link to={"/"}>Voltar ao login</Link>
            <Link to={"/password/reset"}>Solicitar novo link de recuperação</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
