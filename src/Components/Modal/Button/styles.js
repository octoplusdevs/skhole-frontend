import styled from "styled-components";

export const Wrapper = styled.button`
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
`;
