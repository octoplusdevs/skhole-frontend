import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 592px;
  }
`;
export const Header = styled.div`
  margin-bottom: 3.2rem;
  text-align: center;
  width: 100%;
  h1,
  h2 {
    color: #fff;
    font-size: 2.4rem;
    font-family: "Inter";
    line-height: 140%;
    margin: 2.4rem 0;
    text-align: center;
  }
  h2 {
    color: #47fdbb;
  }
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1.4rem;
    color: #bfbfbf;
    text-align: center;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }
  }
  @media (min-width: 1024px) {
    text-align: left;
    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  padding: 4rem;
  background-color: #1f1f1f;
  border-radius: 1.2rem;
  @media (min-width: 1024px) {
    /* padding: 7.2rem; */
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.4rem;
    position: relative;
    label {
      width: fit-content;
    }
    .message_error {
      color: var(--color-red);
      font-size: 1.4rem;
      height: 1.6rem;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 3.8rem;
    a {
      font-weight: 400;
      font-size: 1.6rem;
      color: #b9ffe6;
    }
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Message = styled.div`
  background: #93b8ff;
  padding: 16px;
  border-radius: 6px;
  p {
    color: #00507e;
    font-weight: 500;
  }
`;
