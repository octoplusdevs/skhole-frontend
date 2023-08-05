import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import styled from "styled-components";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { toast } from "react-toastify";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;

const Wrapper1 = styled.div`
  color: #fff;
  font-size: 16px;
  max-width: 448px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  @media (min-width: 768px) {
    padding: 0;
  }
  span {
    font-size: 24px;
    color: "#47fdbb";
  }
  h1 {
    font-size: 32px;
  }
  p {
    color: #bfbfbf;
    line-height: 130%;
    font-size: 18px;
  }
  .link {
    color: "#47fdbb";
  }
`;

const StyledLink = styled(Link)`
  color: #47fdbb;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.1s linear;
  .icon {
    transition: 0.3s linear;
  }
  &:hover {
    color: #fff;
    .icon {
      transform: translateX(4px);
    }
  }
`;

export function ConfirmAccount() {
  const navigate = useNavigate();
  const [accountWasConfirmed, setAccountWasConfirmed] = useState(false);
  const { token } = useParams();

  console.log(token);
  async function confirmAccount() {
    try {
      await API.get(`/accounts/confirm/${token}`);
      setAccountWasConfirmed(true);
      toast.success("Conta confirmada com sucesso!");
    } catch (error) {
      navigate("/login");
    }
  }
  useEffect(() => {
    confirmAccount();
  }, []);

  //faz o redirecionamento caso o usuário esteja logado
  useAuthRedirect("/courses");

  return (
    <Wrapper>
      <div className="container">
        {accountWasConfirmed ? (
          <Wrapper1>
            <span>🥳 Parabéns,</span>
            <h1>A sua conta foi confirmada com sucesso!</h1>
            <p>Agora já podes acessar o Skholê e desfrutar dos cursos.</p>
            <StyledLink to={"/login"}>
              Faça o login
              <ArrowRight size={24} className="icon" />
            </StyledLink>
          </Wrapper1>
        ) : null}
      </div>
    </Wrapper>
  );
}
