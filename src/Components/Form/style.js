import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 24px;
    background-color: #1b2022;
    border-radius: 1.2rem;
    @media (min-width: 768px) {
      padding: 48px;
    }
    @media (min-width: 1024px) {
      padding: 64px;
    }

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      position: relative;
      .message_error {
        color: var(--color-red);
        font-size: 14px;
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 3.8rem;
      a {
        font-weight: 400;
        font-size: 16px;
        color: #b9ffe6;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;
