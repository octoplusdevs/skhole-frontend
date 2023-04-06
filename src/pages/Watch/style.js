import styled from "styled-components";

export const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  }
  .video__info {
    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
      color: #f2f2f2;
    }
    p {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 150%;
      color: #bfbfbf;
    }
  }
  @media (min-width: 1024px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 8rem;
    }
  }
`;
