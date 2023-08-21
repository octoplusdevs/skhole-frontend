import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.4rem;
    padding: 0 16px;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;
export const Header = styled.div`
  width: 100%;
  max-width: 480px;
  margin-bottom: 3.2rem;
  text-align: left;
  h1,
  h2 {
    color: #fff;
    font-size: 2.4rem;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    line-height: 140%;
    margin: 2.4rem 0;
  }
  h2 {
    color: #47fdbb;
  }
  p {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: #bfbfbf;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }
  }
  @media (min-width: 1024px) {
    text-align: left;
    max-width: 550px;
    h1 {
      font-size: 4.8rem;
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
  max-width: 480px;
  padding: 24px;
  background-color: #1f1f1f;
  border-radius: 1.2rem;
  @media (min-width: 1024px) {
    padding: 64px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.4rem;
    position: relative;
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
