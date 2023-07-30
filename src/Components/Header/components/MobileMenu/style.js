import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #303632;
  position: absolute;
  top: 56px;
  border-top: 1.5px solid #202020;
  width: 100%;
  padding: 12px 0;
  border-radius: 2px;
  right: 0;
  box-shadow: 0 15px 12px rgba(0, 0, 0, 0.3);
  &.show {
    display: block;
  }
  &.hidden {
    display: none;
  }
  ul li {
    display: flex;
    a,
    button {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #d1d1d1;
      font-size: 16px;
      font-weight: 500;
      padding: 16px 32px;
      width: 100%;
      cursor: pointer;
      text-align: left;
      &:hover {
        background-color: #fff;
      }
    }
    &.active a {
      color: #47fdbb;
      font-weight: 600;
    }
  }
  @media (min-width: 520px) {
    top: 100px;
    width: fit-content;
    right: 24px;
    &::before {
      display: block;
    }
  }
`;
