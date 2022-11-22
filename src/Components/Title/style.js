import styled from "styled-components";


export const Wrapper = styled.div`
        width: 100%;
        max-width: 562px;
    h1{
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: #FFFFFF;
        margin: 16px 0 24px 0;
        width: 100%;
    }
    p{
        font-weight: 100;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: #FFFFFF;

    }
    @media (min-width: 480px) {
        h1{
            font-size: 4.6rem;
        }
    }
    @media (min-width: 991px) {
        h1{
            font-size: 3.9rem;
        }
    }
    @media (min-width: 1124px) {
        h1{
            font-size: 4.6rem;
        }
    }
`