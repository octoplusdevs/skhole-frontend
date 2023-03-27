import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 800px;
    .video{
        display: grid;
        place-items:center;
        width: 100%;
        max-width: 800px;
        height: 273px;
        background: #000000;
        border-radius: 12px 12px 0px 0px;
    }
    .reproduction{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 800px;
        background: #211F1F;
        border-radius: 0px 0px 12px 12px;
        padding: 22px;
    }
    .text{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    h4{
        font-weight: 600;
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: #F2F2F2;
        span{
            color: #8C8C8C;
        }
    }
    h5{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 150%;
        color: #8C8C8C;
    }
    @media (min-width:768px) {
        h4{
            font-size: 2.8rem;
        }
    }
    @media (min-width:600px) {
        .video{
            height: 400px;
        }
    }
`