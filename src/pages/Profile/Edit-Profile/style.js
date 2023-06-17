import styled from "styled-components";

export const Wrapper = styled.div`
  .avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2.4rem;
    margin-top: 2.4rem;
    .user__avatar {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      .captions {
        span {
          font-size: 1.2rem;
          line-height: 1.6rem;
        }
      }
      button {
        color: #fff;
        background-color: transparent;
        border: 2px solid #2b3133;
        padding: 1.6rem 2.4rem;
        cursor: pointer;
        border-radius: 12px;
        transition-property: color, background-color, border-color, text-decoration-color, fill,
          stroke;
        transition-timing-function: linear;
        transition-duration: 0.2s;
        &:hover {
          background-color: #2b3133;
        }
      }
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 4.8rem;
    .input__line {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
    }
    .input__group {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      button {
        background-color: #0084ffe6;
        padding: 1.6rem 2.4rem;
        color: #fff;
        border-radius: 12px;
        font-size: 1.6rem;
        font-weight: 500;
        cursor: pointer;
        transition-property: color, background-color, border-color, text-decoration-color, fill,
          stroke;
        transition-timing-function: linear;
        transition-duration: 0.2s;
        &:hover {
          background-color: #0084ff;
        }
      }
      label {
        font-size: 1.4rem;
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
          // border-color: #47fdbb;
          background-color: transparent;
        }
      }
    }
  }
`;
