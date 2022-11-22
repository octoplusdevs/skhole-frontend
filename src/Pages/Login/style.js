import styled from "styled-components";



export const Wrapper = styled.section`
    display: grid;
    place-items: center;
     flex-direction: column;
     width: 100vw;
     height: 100vh;
    .container{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 0 auto;
        flex-direction: column;
        gap: 48px;
        max-width: 596px;
    }
    Title{
        background-color: blue;
    }
    @media (min-width:991px) {
        .container{
           display: flex;
           justify-content: space-between;
           flex-direction: row;
           max-width: 1246px;
           align-items: center;
        }
    }
`