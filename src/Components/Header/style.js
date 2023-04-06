import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #303632;
  margin-bottom: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  .container {
    height: 56px;
  }
  .header__nav {
    display: none;
  }
  .header__logo h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }
  .header__user {
    display: flex;
    cursor: pointer;
    padding: 8px 24px 8px 8px;

    :hover {
      background-color: #3d433f;
      border-radius: 8px;
    }
    .header__user-info {
      display: none;
      .header__user-info__name {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
      .header__user-info__status {
        color: #47fdbb;
        font-size: 14px;
        font-weight: 500;
      }
    }
    .user__mobile {
      color: #fff;
    }
    .header__user-avatar {
      height: 32px;
      img {
        max-width: 100%;
        height: auto;
        background-color: red;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      height: 80px;
    }
    .header__logo h3 {
      font-size: 24px;
      font-weight: 700;
    }
    .header__nav {
      display: block;
      ul {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        li {
          a {
            font-weight: 600;
            color: #8c8c8c;
            &:hover {
              color: #fff;
            }
          }
          &.active a {
            color: #fff;
            font-weight: 700;
          }
        }
      }
    }
    .header__user {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      .header__user-info {
        display: block;
      }
      .user__mobile {
        display: none;
      }
      .header__user-avatar {
        height: 40px;
      }
    }
  }
`;
