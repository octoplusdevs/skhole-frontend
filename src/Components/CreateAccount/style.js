import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 592px;
  padding: 8rem 6.5rem;
  background-color: #1f1f1f;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .errorInput {
    border: 1px solid #fd4747;
  }
  .clicked {
    background-color: blue;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 3.8rem;
    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #b9ffe6;
    }
  }
  @media (min-width: 600px) {
    .links {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
