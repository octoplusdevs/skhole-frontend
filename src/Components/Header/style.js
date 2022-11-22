import styled from "styled-components";
import { lighten } from "polished";


export const Wrapper = styled.header`
    background-color: #211F1F;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }
    nav{
        display: none;
    }
    .menu-mobile{
        display: flex;
    }
    
    ul{
        display: flex;
        gap: 24px;
    }
    a{
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #737373;
        transition: all 0.1s ease;
        &:hover{
            color: #fff;
        }
    }
    h3{
        font-size: 2.4rem;
    }
    @media (min-width: 800px) {
        nav{
            display: flex;
        }
        .menu-mobile img{
            display: none;
        }
        .user{
        border-radius: 50%;
        padding:20px;
        width:20px;
        border:1px solid black;
    }
        
    }
`