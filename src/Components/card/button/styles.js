import styled from "styled-components";

export const Wrapper = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #47fdbb;
  padding: 1.4rem 2.4rem;
  cursor: pointer;
  text-align: center;
  transition: 0.3s ease;
  border-radius: 8px;
  letter-spacing: 0.8px;
  user-select: none;

  &:hover {
    transform: translateY(-3px);
    background-color: #2be19f;
    box-shadow: 0px 6px 10px 0px rgba(71, 253, 187, 0.2);
  }
`;
