import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #141313;
  padding: 0 16px;
  gap: 8px;
  border: 1px solid transparent;
  width: 100%;
  transition: all 0.3s ease;
  border-radius: 4px;
  .Eye {
    cursor: pointer;
  }
  input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    /* height: 64px; */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 100px #141313 inset !important;
      -webkit-text-fill-color: #fff;
    }
  }
  .icon svg {
    color: #3b3737;
  }
  &:hover {
    background-color: #1a1818;
  }
  &:focus-within {
    border: 1px solid #47fdbb;
    .icon svg {
      color: #47fdbb;
    }
  }
  &.error {
    border: 1px solid var(--color-red);
    .icon svg {
      color: var(--color-red);
    }
  }
  &.disabled {
    background-color: #272727;
    pointer-events: none;

    input {
      color: #606060;
      user-select: none;
      pointer-events: none;
    }
    .icon svg {
      color: #606060;
    }
  }
`;
