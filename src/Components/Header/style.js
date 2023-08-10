import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #1b2022;
  /* margin-bottom: 4rem; */
  border-bottom: 1px solid #2b3133;
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
  .header__cta {
    display: flex;
    gap: 0px;
    width: fit-content;
  }
  .header__logo .link {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }
  .header__user {
    display: flex;
    cursor: pointer;
    padding: 8px;
    position: relative;
    :hover {
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

    .header__user-avatar {
      height: 32px;
      width: 32px;
      background: #101010;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      img {
        max-width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #ddd;
        object-fit: cover;
      }
    }
  }
  .user__mobile {
    color: #fff;
    padding: 8px;
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
        gap: 14px;
        li {
          a {
            font-weight: 500;
            color: #6a6666;
            transition: 0.8s;
            &:hover {
              color: #fff;
            }
          }
          &.active a {
            color: #47fdbb;
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
      padding: 8px 24px 8px 8px;

      .header__user-info {
        display: block;
      }

      .header__user-avatar {
        height: 40px;
        width: 40px;
      }
    }
    .user__mobile {
      display: none;
    }
  }
`;
