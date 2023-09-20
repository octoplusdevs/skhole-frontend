import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Envelope, EnvelopeSimple, Info, LockSimple } from "phosphor-react";
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

export function Login() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isModalAtivationAccountOpen, setIsModalAtivationAccountOpen] = useState(false);
  const hasError = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaLogin) });

  function handleCloseModal() {
    setIsModalAtivationAccountOpen(false);
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
          title="Verifique seu e-mail"
          body="Verifique também a pasta de spam se não o encontrar na sua caixa de entrada."
          icon={<Envelope size={32} color="orange" />}
        />
        <Modal.Footer>
          {/* <Modal.Button className="default" text={"Receber novo email"} /> */}
          <Modal.Button className="confirm" text={"Fechar"} onClick={handleCloseModal} />
        </Modal.Footer>
      </Modal.Root>
    </Wrapper>
  );
}
