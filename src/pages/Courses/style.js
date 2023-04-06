import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 82px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  h4 {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #d9d9d9;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 384px);
    width: 100%;
    gap: 1.6rem;
    .card {
      width: 100%;
      height: 352px;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      .card {
      }
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);

      .card {
      }
    }
  }
`;
