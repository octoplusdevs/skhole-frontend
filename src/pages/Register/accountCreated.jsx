import styled from "styled-components";
import { ArrowRight } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
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

function AccountCreated({ username }) {
  return (
    <Wrapper>
      <span>🥳 {username},</span>
      <h1>Parabéns a sua nova conta foi criada com sucesso!</h1>
      <p>Verifique o seu email para concluir o processo de criação de conta</p>
      <StyledLink to={"/login"}>
        Ir para o login
        <ArrowRight size={24} className="icon" />
      </StyledLink>
    </Wrapper>
  );
}

export default AccountCreated;
