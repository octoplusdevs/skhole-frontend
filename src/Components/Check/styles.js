import styled from "styled-components";

export const Wrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox{
    display: flex;
    position: relative;
    svg{
      position: absolute;
      left: -32px;
      top: 2px;
      z-index: 2;
    }
  }
  .checkmark {
    position: absolute;
    transition: all 0.5s ease;

    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #222f35;
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: #47fdbb;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  /* .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  } */
`;
