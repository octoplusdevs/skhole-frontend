import styled from "styled-components";

export const Wrapper = styled.aside`
  background-color: #1b2022;
  width: 380px;
  height: 520px;
  color: #fff;
  padding: 4rem 2.4rem;
  margin-top: 4.4rem;
  border-radius: 5px;
  position: sticky;
  top: 100px;
  .sidebar > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    li {
      &.active {
        background-color: red;
      }
    }
  }
`;
export const Button = styled.button`
  /* background-color: #1b2022; */
  border: 2px solid transparent;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  color: #84898b;
  gap: 0.8rem;
  width: 100%;
  cursor: pointer;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: linear;
  transition-duration: 0.2s;
  &:hover {
    background-color: #2b3133;
    color: #fff;
  }
  &.active {
    border-color: #47fdbb;
    color: #fff;
    svg {
      fill: #fff;
    }
    &:hover {
      background-color: transparent;
    }
  }
`;
