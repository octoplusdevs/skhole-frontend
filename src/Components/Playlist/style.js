import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 449px;
  background-color: #161817;
  border-radius: 8px;
  overflow: scroll;

  @media (min-width: 1024px) {
    max-width: 384px;
  }
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
      flex-direction: column;
      gap: 4px;
      h1 {
        font-size: 16px;
        color: #fff;
      }
      p {
        color: #c4c4c4;
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
      padding: 8px 32px;
      .lesson__title {
        display: flex;
        gap: 8px;
        input[type="checkbox"] {
          height: 20px;
          width: 20px;
          border-radius: 5px;
          cursor: pointer;
          accent-color: #47fdbb;
        }
      }
      .active {
        color: #47fdbb;
      }
      a {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #fff;
      }
      span {
        font-weight: 400;
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
`;
