import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  background-color: red;
  border-radius: 4px;
  padding: 3px;
  background-color: #161817;
  display: grid;

  .aspect-ratio-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* Proporção de aspecto 16:9 (9 / 16 * 100) */

    iframe,
    .player-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  @media (min-width: 768px) {
    .video__container {
      height: 432px;
    }
  }

  @media (min-width: 1024px) {
    .video__container {
      height: 449px;
    }
  }
`;
