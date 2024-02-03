import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EnvelopeSimple, LockSimple, User } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRegister } from "../../Schemas";
import { Wrapper, Header } from "./style";
import { registerUser } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Form } from "../../Components/Form";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { toast } from "react-toastify";
import AccountCreated from "./accountCreated";

export default function Register() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const hasError = useSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SchemaRegister) });

  function onSubmit(data) {
    const { username, email, password } = data;
    setLoading(true);
    dispatch(
      registerUser(
        { username, email, password },
        () => {
          setAccountCreated(true);
        },
        (error) => {
          // toast.error(error);
        },
      ),
    ).finally(() => setLoading(false));
  }

  //faz o redirecionamento caso o usuário esteja logado
  useAuthRedirect("/courses");

  return (
    <Wrapper>
      <div className="container">
        {!accountCreated ? (
          <>
            <Header>
              <h2>Skholê</h2>
              <h1>Crie uma conta grátis na nossa plataforma</h1>
              <p>© {new Date().getFullYear()} Skholê. Powered by Octoplus</p>
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
                  {errors?.username?.message || (hasError?.includes("usuário") && hasError)}
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
                  {errors?.email?.message || (hasError?.includes("E-mail") && hasError)}
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
          </>
        ) : (
          <AccountCreated username={getValues("username")} />
        )}
      </div>
    </Wrapper>
  );
}
