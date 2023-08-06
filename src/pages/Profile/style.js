import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  color: #fff;
  padding-top: 56px;
  .container {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  padding: 56px 32px;
`;
