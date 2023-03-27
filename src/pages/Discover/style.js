import styled from "styled-components";


export const Wrapper = styled.section`
  margin-top: 82px;
  .container{
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  h4{
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #D9D9D9;
  }
  .cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 1.6rem;
  }
`
