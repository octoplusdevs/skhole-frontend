import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    max-width: 592px;
    padding: 80px 65px;
    background-color: #1F1F1F;
    border-radius: 1.2rem;
    .errorInput{
        border: 1px solid #FD4747;
    }
    .clicked{
        background-color: blue;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 3.8rem;
    }
    a{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #B9FFE6;
    }
    @media (min-width:600px) {
        .links{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
`
