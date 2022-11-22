import styled from "styled-components";


export const Wrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    .text{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
    .card{
        width: 100%;
        height: 272px;
        background-color: #211F1F;
        border-radius: 1.2rem;
    }
    h4{
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #D9D9D9;
    }
    span{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #A6A6A6;
    }
    @media (min-width:600px) {
        max-width: 278px;
    }
    @media (min-width:768px) {
        max-width: 360px;
    }
    @media (min-width:800px) {
        max-width: 376px;
    }
    @media (min-width:991px) {
        max-width: 310px;
    }
    @media (min-width:1024px) {
        max-width: 320px;
    }

    @media (min-width:1150px) {
        max-width: 360px;
    }
  
    @media (min-width:1210px) {
        max-width: 384px;
    }
  
`