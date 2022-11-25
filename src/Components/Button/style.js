import styled, { css, keyframes } from "styled-components";

const loadingAnimated = keyframes`
  to{
		transform: rotate(360deg);
  }
  from{
		transform: rotate(0);
  }
`;

export const Wrapper = styled.button`
  background-color: #323232;
  padding: 1.8rem 3.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  height: 5.8rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.1s ease;
  .loading {
    animation: ${loadingAnimated} 1s linear infinite;
  }
  ${(props) =>
    props.Primary &&
    css`
      background-color: #47fdbb;
      color: #000;
      &:hover {
        background-color: #79fccd;
        color: #3b3737;
      }
      &:disabled {
        background-color: #323232;
      }
    `}
  ${(props) =>
    props.Destrutive &&
    css`
      background-color: #fd4747;
      color: #000;
      &:disabled {
        background-color: #ffb0b0;
      }
      &:hover {
        background-color: #fc7979;
      }
      &:visited {
        background-color: #bf3636;
      }
    `}
`;
