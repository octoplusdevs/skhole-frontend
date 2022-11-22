import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    height: 485px;
    background-color: #211F1F;
    border-radius: 12px;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 24px;
        background-color: #3A3A3A;
        border-radius: 12px 12px 0 0;
    }
    .classes{
        padding: 20px 24px;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
    }
    .classification{
        display: flex;
        gap: 8px;
        flex-direction: column;
    }
    h5, .totalHour, span, .green, a{
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #F2F2F2;
    }
    .totalHour{
        font-weight: 500;
        color: #BFBFBF;
    }
    span{
        font-weight: 400;
        color: #737272;
    }
    .vizualizad{
        font-weight: 500;
        color: #47FDBB;
    }
    .viewing{
        color: #F2F2F2;
    }
    a{
        font-weight: 500;
    }
    .unviewed{
        color: #A6A6A6;
    }
    @media (min-width:768px) {
        height: 760px;
        .classification{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
    @media (min-width:1024px) {
        max-width: 384px;
    }
`


