import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   html{
      font-size: 62.5%;
   }
   body{
      background-color:  #141313;
      font-size: 16px;
   }

   *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
   }

   .container{
      width: 100%;
      max-width: 1246px;
      padding: 0 15px;
      margin: 0 auto;
   }

   ul, li{
    list-style: none;
   }

   h3{
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: #47FDBB;
    }

   a{
    text-decoration: none;
   }

   button{
    border: none;
    background-color: transparent;
   }

   input{
    border: none;
   }
   label{
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      cursor: pointer;
   }
   @media (max-width:1060px){
      html{
         font-size: 58%;
      }
   }

   @media (max-width:600px){
      html{
         font-size: 50%;
      }
   }
`;
