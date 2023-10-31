import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 449px;
  background-color: #161817;
  border-radius: 8px;
  overflow: scroll;

  
`;

export const Module = styled.div`
  .module__header {
    background-color: #1b2022;
    width: 100%;
    padding: 16px;
    border-top: 1px solid #161817;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #c4c4c4;
    cursor: pointer;
    .module__title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      h1 {
        font-size: 16px;
        color: #fff;
        padding-bottom: 4px;
      }
      p {
        color: #c4c4c4;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
  .module__lessons {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out 0s;
    &.isOpen {
      max-height: 500px;
      overflow: initial;
    }
    .lesson {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      .lesson__title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
        gap: 8px;
        /* input[type="checkbox"] {
          height: 20px;
          width: 20px;
          border-radius: 5px;
          cursor: pointer;
          accent-color: #47fdbb;
          background-color: yellow;
        } */
      }
      .active {
        color: #fff;
      }
      .isViewed {
        /* color: #47fdbb; */
        color: #737373;
      }
      a {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 1.9rem;
        color: #737272;
      }
      span {
        font-weight: 400;
        font-size: 1.5rem;
        color: #737272;
      }
      &:first-of-type {
        padding-top: 24px;
      }
      &:last-of-type {
        padding-bottom: 24px;
      }
    }
  }

  @media (min-width: 768px) {
    .module__lessons {
      .lesson {
        padding: 8px 16px;
        a {
          font-size: 1.4rem;
        }
        span {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
