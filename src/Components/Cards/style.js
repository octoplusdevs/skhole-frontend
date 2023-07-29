import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1b2022;
  border-radius: 18px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .card__thumbnail {
    height: 164px;
    border: none;
    img {
      min-width: 100%;
      min-height: 100%;
      background-color: #394d55;
      border: none;
      border-radius: 12px;
    }
  }
  .card__details {
    display: flex;
    justify-content: space-between;
    color: #afbbc0;
    span {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }
  .card__info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.6rem;
    .card__title,
    .card__price {
      color: #fff;
      font-family: Inter;
    }

    .card__title,
    .card__title > a {
      color: #fff;
      font-size: 1.8rem;
      line-height: 140%;
      font-weight: 700;
      /* letter-spacing: 0.3px; */
    }
    .card__price {
      color: #bfbfbf;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 600;
      .price {
        color: #e1cb2b;
        /* font-weight: 600; */
      }
    }
  }
  .card__button {
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #47fdbb;
    padding: 1.4rem 2.4rem;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease;
    border-radius: 8px;
    /* text-transform: uppercase; */
    letter-spacing: 0.8px;
    &:hover {
      transform: translateY(-3px);
      background-color: #2be19f;
      box-shadow: 0px 6px 10px 0px rgba(71, 253, 187, 0.2);
    }

    &.subscribed {
      color: #47fdbb;
      background-color: #252e31;
      box-shadow: none;
      &:hover {
        transform: translateY(-3px);
        color: #fff;
      }
    }
    &.noverify {
      color: #fdb447;
      background-color: #252e31;
      box-shadow: none;
      pointer-events: none;
    }
  }
`;
