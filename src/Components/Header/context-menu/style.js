import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #252e31;
  position: absolute;
  top: 56px;
  border-top: 1.5px solid #252e31;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  right: 0;
  box-shadow: 0 15px 12px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
  &.show {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
  &.hidden {
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
  }
  &::before {
    display: none;
    content: "";
    position: absolute;
    top: -7px;
    right: 8px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent #303632;
  }
  ul li {
    display: flex;
    .icon {
      color: #47fdbb;
    }
    a,
    button {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #fff;
      font-size: 16px;
      padding: 16px 12px;
      border-radius: 4px;
      width: 100%;
      cursor: pointer;
      text-align: left;
      transition: 0.4s ease;
      &:hover {
        background-color: #38474d;
      }
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
