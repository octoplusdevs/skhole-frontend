import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 480px;
  width: 100%;
  .avatar {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 2.4rem;

    .user__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #000;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
    .input__file {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.4rem;
      input[type="file"] {
        display: none;
      }
      button {
        border: 2px solid transparent;
        border-radius: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 600;
        padding: 8px 16px;
        background-color: #47fdbb;
        color: #000;
        cursor: pointer;
      }
      .captions {
        span {
          font-size: 1.4rem;
          line-height: 1.6rem;
          user-select: none;
        }
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .input__file button {
        padding: 12px 24px;
      }
    }
  }
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
