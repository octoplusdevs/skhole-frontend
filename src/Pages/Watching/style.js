import styled from "styled-components";


export const Wrapper = styled.section`
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 81px;
        gap: 40px;
    }
    @media (min-width:1024px) {
        .container{
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
`