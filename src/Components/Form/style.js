import styled from "styled-components";

export const Wrapper = styled.div`
  form {
    width: 100%;
    max-width: 480px;
    padding: 32px;
    background-color: #1b2022;
    border-radius: 1.2rem;
    @media (min-width: 1024px) {
      padding: 64px;
    }

    .input {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 1.4rem;
      position: relative;
      .message_error {
        color: var(--color-red);
        font-size: 1.4rem;
        height: 1.6rem;
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 3.8rem;
      a {
        font-weight: 400;
        font-size: 1.6rem;
        color: #b9ffe6;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;
