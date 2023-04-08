import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #303632;
  position: absolute;
  top: 80px;
  width: 100%;
  /* height: 140px; */
  padding: 12px 0;
  border-radius: 2px;
  right: 0;
  width: 200px;
  box-shadow: 0 15px 12px rgba(0, 0, 0, 0.3);
  &.show {
    display: block;
  }
  &.hidden {
    display: none;
  }
  &::before {
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
      font-size: 1.6rem;
      padding: 12px 16px;
      width: 100%;
      cursor: pointer;
      text-align: left;
      &:hover {
        background-color: #3d433f;
      }
    }
  }
`;
