import styled,{css, keyframes} from "styled-components";

const loadingAnimated = keyframes`
   to{
      transform: rotate(360deg);
   }
   from{
      transform: rotate(0);
   }
`

export const Wrapper = styled.button`
   background-color: #323232;
   padding: 1.8rem 3.2rem;
   color: #fff;
   font-weight: 500;
   font-size: 1.8rem;
   line-height: 2.2rem;
   width: 100%;
   margin-top: 1.6rem;
   cursor: pointer;
   transition: all 0.1s ease;
   .loading{
      animation: ${loadingAnimated} 1s linear infinite ;
   }
   ${props=>props.Primary && css`
      background-color: #47FDBB;
      color: #000;
      &:hover{
         background-color: #79FCCD;
         color: #3B3737;
      }
      &:disabled{
         background-color: #323232;
   }
   `}
   ${props=> props.Destrutive && css`
      background-color: #FD4747;
      color: #fff;
      &:disabled{
         background-color: #FFB0B0;
      }
      &:hover{
         background-color: #FC7979;
      }
   `}
`