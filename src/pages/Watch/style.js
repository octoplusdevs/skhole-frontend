import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 56px;
  padding-bottom: 100px;
  .button_assets {
    background-color: #002300;
    color: #47fdbb;
    padding: 12px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 8px;
    font-size: 16px;
    height: 56px;
    transition: .3s ease;
    font-weight: 500;
    width: calc(100% - 48px);
    @media (min-width: 640px){
      width: 100%
    }
    &:hover{
      color: #fff;
    }
    &.disabled{
      cursor: not-allowed;
      background-color: #202020;
      color: #494949;
    }
  }
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    .aside {
      max-width: 800px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;
      @media (min-width: 1024px) {
        max-width: 384px;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  }
  .skeleton {
    display: flex;
    flex-direction: column;
    gap: 32px;
    h1 {
      color: #303632;
      height: 18px;
      width: 60%;
      background: #303632;
      text-indent: -9999px;
    }
    p {
      color: #303632;
      height: 10px;
      width: 100%;
      background: #303632;
      position: relative;
      text-indent: -9999px;
      /* &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 18px;
        width: 73%;
        height: 10px;
        background: #303632;
      } */

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 18px;
        width: 95%;
        height: 10px;
        background: #303632;
      }
    }
  }
  .video__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 15px;
    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
      color: #f2f2f2;
    }
    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 150%;
      color: #dddddd;
    }
  }
  @media (min-width: 768px) {
    padding-top: 80px;
  }
  @media (min-width: 1024px) {
    padding-top: 120px;
    .grid {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 8rem;
      padding: 0 15px;
    }
  }
`;
