import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EnvelopeSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRecoverPassword } from "../../Schemas";
import { Wrapper, Header, Message } from "./style";
import { sendForgotPasswordEmail } from "../../redux/forgotPassword/forgotPassword.actions";
import { Form } from "../../Components/Form";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useState } from "react";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const hasError = useSelector((state) => state.forgotPassword.error);
  const isSuccess = useSelector((state) => state.forgotPassword.isSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRecoverPassword) });

  function onSubmit(data) {
    const { email } = data;
    setLoading(true);

    dispatch(
      sendForgotPasswordEmail(email, () => {
        setEmailSent(true);
      }),
    ).finally(() => setLoading(false));
  }

  //faz o redirecionamento caso o usuário esteja logado
  useAuthRedirect("/courses");

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <h2>Skholê</h2>
          <h1>Faça o login para continuar na plataforma</h1>
          <p>© {new Date().getFullYear()} Skholê. Powered by Octoplus</p>
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

          <Button
            text={emailSent ? "Email enviado" : "Enviar email"}
            Primary
            isLoading={isLoading}
            disabled={isLoading || emailSent}
          />
          <div className="links">
            <Link to={"/"}>Voltar ao login</Link>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}
