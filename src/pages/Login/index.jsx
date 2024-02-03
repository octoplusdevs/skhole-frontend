import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Check, Envelope, EnvelopeSimple, Info, LockSimple } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaLogin } from "../../Schemas";
import { Wrapper, Header } from "./style";
import { loginUser } from "../../redux/auth/auth.actions";
import { useState } from "react";
import { Form } from "../../Components/Form";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { queryClient } from "../../services/query";
import { Modal } from "../../Components/Modal";
import { API } from "../../services/api";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isModalAtivationAccountOpen, setIsModalAtivationAccountOpen] = useState(false);
  const [isConfirmationSend, setIsConfirmationSend] = useState(false);
  const hasError = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaLogin) });

  function handleCloseModal() {
    setIsModalAtivationAccountOpen(false);
  }

  async function handleConfirmModal(email) {
    try {
      setIsConfirming(true);

      await API.post("/accounts/confirm/resend-confirmation", { email });
    } catch (error) {
      console.log(error);
      // toast.error(response.data?.message);
    } finally {
      setIsConfirmationSend(true);
      setIsConfirming(false);
    }
  }
  function onSubmit(data) {
    const { email, password } = data;
    setLoading(true);
    dispatch(
      loginUser(
        email,
        password,
        () => {
          queryClient.invalidateQueries(["account"]);
        },
        (err) => {
          if (err?.response?.data?.error === "Conta não confirmada.") {
            setIsModalAtivationAccountOpen(true);
          }
        },
      ),
    ).then(() => {
      setLoading(false);
    });
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
              {errors?.password?.message || (hasError?.includes("senha") && hasError)}
            </p>
          </div>

          <Button text="Entrar" Primary isLoading={isLoading} disabled={isLoading} />
          <div className="links">
            <Link to={"/password/reset"}>Recuperar senha</Link>
            <Link to={"/Register"}>Criar conta</Link>
          </div>
        </Form>
      </div>
      <Modal.Root isOpen={isModalAtivationAccountOpen}>
        <Modal.Content
          title={isConfirmationSend ? "Novo e-mail enviado" : "Verifique seu e-mail"}
          body={
            isConfirmationSend
              ? "Acabamos de enviar um novo e-mail, com as instruções de ativação. verifique o SPAM se não encontrar na caixa principal."
              : "Verifique também a pasta de spam se não o encontrar na sua caixa de entrada."
          }
          icon={
            !isConfirmationSend ? (
              <Envelope size={32} color="orange" />
            ) : (
              <Check size={32} color="green" />
            )
          }
        />
        <Modal.Footer>
          {!isConfirmationSend && (
            <Modal.Button
              className="default"
              text={isConfirming ? "Enviando email..." : "Receber novo email"}
              onClick={() => {
                handleConfirmModal(getValues("email"));
              }}
            />
          )}

          <Modal.Button className="confirm" text={"Fechar"} onClick={handleCloseModal} />
        </Modal.Footer>
      </Modal.Root>
    </Wrapper>
  );
}
