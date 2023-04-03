import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 800px;
  .skeleton-loader {
    background-color: #1c1b1b;
    background-image: linear-gradient(to right, #1c1b1b 0%, #242424 20%, #1c1b1b 40%, #1c1b1b 100%);
    background-size: 800px 104px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
    width: fit-content;
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

  .video {
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 800px;
    height: 273px;
    background: #000000;
    border-radius: 12px 12px 0px 0px;
  }
  .reproduction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    background: #211f1f;
    border-radius: 0px 0px 12px 12px;
    padding: 22px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h4 {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.9rem;
    color: #f2f2f2;
    span {
      color: #8c8c8c;
    }
  }
  h5 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: #8c8c8c;
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 600px) {
    .video {
      height: 400px;
    }
  }
`;
