import styled from "styled-components";



export const Wrapper = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    .switch{
        width: 68px;
        padding: 0.6rem 0.5rem;
        background-color: #000000;
        border-radius: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    input{
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #8C8C8C;
        cursor: pointer;
        transition: all 01s;
        :checked{
            transform: translateX(200%);
            background-color: #47FDBB;
        }
    }
    span{
        font-family: 'Inter', sans-serif;
        font-weight: 100;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #FFFFFF;
    }
`