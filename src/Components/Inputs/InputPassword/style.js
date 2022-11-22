import styled from "styled-components";



export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #141313;
    width: 100%;
    height: 64px;
    padding: 0 0 0 24px;
    gap: 8px;
    margin: 1.2rem 0;
    .icon > svg{
                color: #3B3737;
        }
    &:focus-within{
        border: 1px solid #47FDBB;
        .icon > svg{
                color: #47FDBB;
        }
    }
    input{
        outline: none;
        width: 100%;
        padding: 2.1rem 1.4rem;
        color: #fff;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        background-color: #141313;
        .icon{
            position: absolute;
        }
    }
    .Eye{
        margin-right: 20px;
        cursor: pointer;
    }
    &:hover{
        background-color: #211F1F;
        input{
            background-color: #211F1F;
            &::placeholder{
                color: #FFFFFF;
            };
        }
    }  
`