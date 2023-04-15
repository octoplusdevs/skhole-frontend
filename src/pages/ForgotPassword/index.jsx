import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EnvelopeSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRecoverPassword } from "../../Schemas";
import { Wrapper, Form, Header, Message } from "./style";
import { sendForgotPasswordEmail } from "../../redux/forgotPassword/forgotPassword.actions";
import { useEffect } from "react";

export function ForgotPassword() {
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.forgotPassword.error);
  const isSuccess = useSelector((state) => state.forgotPassword.isSuccess);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { token } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRecoverPassword) });

  function onSubmit(data) {
    const { email } = data;
    dispatch(sendForgotPasswordEmail(email));
  }
  useEffect(() => {
    if (isAuthenticated) navigate("/courses");
  }, [isAuthenticated]);
  return (
    <Wrapper>
      <div className="container">
        <Header>
          <h2>Skholê</h2>
          <h1>Faça o login para continuar na plataforma</h1>
          <p>© 2022 Skholê. Powered by Octoplus</p>
        </Header>
        {isSuccess === true ? (
          <Message>
            <p>
              Acabamos de enviar um e-mail com os passos necessários para recuperar a senha da sua
              conta.
              <br />
              Por favor, verifique sua caixa de entrada e siga as instruções fornecidas.
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
            />
            <p className="message_error">{errors?.email?.message || hasError}</p>
          </div>

          <Button text="Enviar link de recuperação" Primary isLoading={false} disabled={false} />
          <div className="links">
            <Link to={"/"}>Voltar ao login</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
