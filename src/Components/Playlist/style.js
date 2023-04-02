import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 485px;
  background-color: #211f1f;
  border-radius: 12px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 24px;
    background-color: #3a3a3a;
    border-radius: 12px 12px 0 0;
  }
  .classes {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  .classification {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }
  h5,
  .totalHour,
  span,
  .green,
  a {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #fff;
  }
  .totalHour {
    font-weight: 500;
    color: #bfbfbf;
  }
  span {
    font-weight: 400;
    color: #737272;
  }
  .vizualizad {
    font-weight: 500;
    color: #47fdbb;
  }
  .viewing {
    color: #47fdbb;
  }
  a {
    font-weight: 500;
  }
  .unviewed {
    color: #a6a6a6;
  }
  @media (min-width: 768px) {
    height: 520px;
    .classification {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 1024px) {
    max-width: 384px;
  }
`;
