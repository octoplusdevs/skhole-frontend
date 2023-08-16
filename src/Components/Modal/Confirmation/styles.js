import ReactModal from "react-modal";
import styled from "styled-components";

export const Wrapper = styled(ReactModal)`
  .modal__information {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
    p {
      color: #838587;
    }
  }
  .modal__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
    height: 64px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    padding: 24px;
    background: #131718;
    button {
      padding: 8px 24px;
      font-size: 16px;
      color: #c9dcdf;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      transition: 0.5s ease;
      cursor: pointer;
      &.default {
        background: #202728;
        color: #838587;
        &:hover {
          background-color: #2b3334;
          color: #ccc;
        }
      }
      &.confirm {
        background-color: #03853f;
        color: #fff;
        &:hover {
          background-color: #059949;
        }
      }
    }
  }
`;
