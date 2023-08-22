import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #252e31;
  position: absolute;
  top: 56px;
  border-top: 1.5px solid #202020;
  width: 100%;
  padding: 12px;
  border-radius: 2px;
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
  ul li {
    display: flex;
    a,
    button {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      padding: 16px 12px;
      width: 100%;
      cursor: pointer;
      text-align: left;
      transition: 0.4s ease;
      border-radius: 4px;
      &:hover {
        background-color: #38474d;
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
