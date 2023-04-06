import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: red;
  border-radius: 4px;
  padding: 3px;
  background-color: #161817;
  display: grid;
  height: 210px;

  @media (min-width: 768px) {
    height: 432px;
  }
  @media (min-width: 1024px) {
    height: 449px;
  }
`;
