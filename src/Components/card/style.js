import styled from "styled-components";

export const Wrapper = styled.div`
  .card__details {
  }
  .card__info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.6rem;
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
