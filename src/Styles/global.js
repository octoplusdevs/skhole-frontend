import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  body{
    background-color:  #0A0B0A;
    font-size: 16px;
    padding-top: 14rem;

  }
  *{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  }
  :root{
  --color-red: #ff9494;
  }
  .skeleton-loader {
    background-size: 800px 104px;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
    color: transparent;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  .container{
    width: 100%;
    max-width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
    &.flex-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
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
