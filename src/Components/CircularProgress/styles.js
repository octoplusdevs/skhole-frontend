import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #000;
  color: #fff;
  position: relative;
  font-weight: 700;
  &.completed{
    ${({ progress }) =>
    css`
      background: radial-gradient(closest-side, #000 79%, transparent 96% 100%),
        conic-gradient(green ${progress}%, #303030 0);
        transition: background 0.3s ease-in-out;
    `}
  }
  ${({ progress }) =>
    css`
      background: radial-gradient(closest-side, #000 79%, transparent 96% 100%),
        conic-gradient(orange ${progress}%, #303030 0);
        transition: background 0.3s ease-in-out;
    `}
`;
