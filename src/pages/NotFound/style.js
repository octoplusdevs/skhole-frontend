import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5.4rem;
  max-width: 480px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    h1 {
      font-size: 14rem;
      color: #fff;
      span {
        color: #4d4e50;
      }
    }
    p {
      color: #fff;
      font-size: 2.4rem;
      line-height: 150%;
    }
    a {
      background-color: #47fdbb;
      color: #000;
      padding: 1.4rem 2.4rem;
      width: 100%;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: 0.3s ease;
      :hover {
        background-color: #95e1c6;
      }
    }
  }
  .right {
    img {
      max-width: 320px;
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    max-width: 1246px;
    .left {
      max-width: 320px;
    }
    .right img {
      max-width: 780px;
      width: 100%;
    }
  }
`;
