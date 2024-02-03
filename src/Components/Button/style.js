import styled, { keyframes } from "styled-components";

const loadingAnimated = keyframes`
  to{
		transform: rotate(360deg);
  }
  from{
		transform: rotate(0);
  }
`;

export const Wrapper = styled.button`
  background-color: #47fdbb;
  padding: 1.4rem 2.4rem;
  color: #000;
  font-weight: 700;
  font-size: 1.6rem;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.1s ease;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    animation: ${loadingAnimated} 1s linear infinite;
  }
  &:hover {
    background-color: #22e39d;
  }
  &:disabled {
    background: #323232;
    color: #fff;
    pointer-events: none;
  }
`;
