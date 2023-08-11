import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 480px;
  width: 100%;
  .form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 4.8rem;
    max-width: 100%;
    .input__line {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
    .input__group {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      label {
        font-size: 1.6rem;
      }
      .input {
        border: 2px solid #191919;
        border-radius: 12px;
        padding: 1.6rem 2.4rem;
        outline: 2px solid transparent;
        width: 100%;
        outline-offset: 2px;
        font-size: 1.6rem;
        color: #fff;
        background-color: #191919;
        transition-property: color, background-color, border-color, text-decoration-color, fill,
          stroke;
        transition-timing-function: linear;
        transition-duration: 0.2s;
        &:focus {
          outline: none;
          border-color: #47fdbb;
          background-color: transparent;
        }
      }
      .message_error {
        color: var(--color-red);
      }
    }
  }
`;
