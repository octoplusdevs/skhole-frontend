import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 120px 0;
  .container {
    display: flex;
    gap: 32px;
    height: 1000px;
    .main{
      max-width: 100%;
      width: 100%;
      .content{
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-top: 40px;
        h2{
          color: #fff;
        }
      }


    }
  }

`;


export const BannerCourse = styled.div`
  height: 450px;
  border-radius: 12px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .course__brand{
    width: 56px;
    height: 56px;
    border-radius: 8px;
    background: linear-gradient(144deg, #9747FF 29.24%, rgba(151, 71, 255, 0.69) 101.68%);
  }

  .course__heading {
    h1{
      color: #FFF;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 8px;
    }
    p{
      color: #808080;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      max-width: 660px;
      width: 100%;
    }
  }
  .course__progress {
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .progress {
      color: #fff;
      display: flex;
      align-items: center;
      gap: 16px;
      span{
        color: #fff;
      }
      .progress-bar{
        max-width: 398px;
        width: 100%;
        height: 8px;
        background-color: #212923;
        border-radius: 30px;
        position: relative;
        &::before{
          content: "";
          border-radius: 8px;
          background: #0EF64F;
          height: 8px;
          width: 16%;
          position: absolute;
        }
      }
    }
    span{
      color: #808080;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
    }
  }

  .course__button{
    border-radius: 4px;
    background: #3E4B50;
    display: flex;
    max-width: 100%;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }

  @media (min-width: 425px){
    padding: 24px;
    background-color: #1B2022;

  }
  @media (min-width: 600px){
    padding: 40px;
    .course__heading {
      h1{
        font-size: 32px;
      }
      p{
        font-size: 16px;
      }
    }

    .course__button{
      width: 240px;

    }
  }




`

export const Draft = styled.div`
  height: 450px;
  width: 384px;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  display: none;
  @media (min-width: 1148px){
    display: flex;
  }
  .draft-cta {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3 {
      color: #fff;
      font-size: 32px;
    }
    button {
      background-color: #47fdbb;
      border: none;
      color: #000;
      font-size: 18px;
      font-weight: 700;
      padding: 16px 24px;
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .benefits {
    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
      li {
        display: flex;
        color: #9E9E9E;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  .trainer{
    display: flex;
    align-items: center;
    gap: 14px;
    .trainer-avatar {
      width: 64px;
      height: 64px;
      background-color: #202020;
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
    .trainer-info{
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`

export const Modules = styled.ul`

  color: #fff;
  li {
    margin-bottom: 8px;
    cursor: pointer;
  }
  .module__header{
    display: flex;
    justify-content: space-between;
    padding: 24px;
    justify-content: center;
    /* max-width: 800px; */
    width: 100%;
    border-radius:  8px 8px 0 0;

    background: #13181A;
    .module__left{
      display: flex;
      gap: 16px;
      align-items: center;
      width: 100%;

      .module__number {
        display: flex;
        padding: 8px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 48px;
        background: #212923;
        span{
          color: #FFF;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
      .module__title{
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
        max-width: 400px;
        .progress {
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          span{
            color: #fff;
            font-size: 14px;
          }

        }
        h2{
          color: #FFF;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }

    button {
      display: grid;
      place-items: center;
      cursor: pointer;
      .active {
        transform: rotate(180deg);
        transition: transform 0.4s ease;
      }
      .inactive {
        transform: rotate(0);
        transition: transform 0.4s ease;
      }
    }




  }

  .module__content {
    transition: all 0.4s ease;

    overflow: hidden;
    background-color: #030404;

    border-radius: 0 0 8px 8px;

    padding: 0 40px;

    opacity: 0;
    pointer-events: none;
    height: 0;
    visibility: hidden;

    &.open {
      opacity: 1;
      pointer-events: auto;
      height: auto;
      visibility: visible;
      height: auto;
      padding: 24px 40px;

    }

    h3{
      font-size: 16px;
      color: #fff;
      margin-bottom: 8px;
      span{
        opacity: 0.4;
        margin-right: 8px;
      }
    }
  }
`

export const ProgressBar = styled.div`
  &.progress-bar{
    width: 100%;
    height: 8px;
    background-color: #212923;
    border-radius: 30px;
    position: relative;
    &::before{
      content: "";
      border-radius: 8px;
      background: #0EF64F;
      height: 8px;
      width: ${props => props.progress || 0}%;
      position: absolute;
    }
  }

`
