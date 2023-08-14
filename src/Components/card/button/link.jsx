import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled(ReactLink)`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.4rem 2.4rem;
  cursor: pointer;
  text-align: center;
  transition: 0.3s ease;
  border-radius: 8px;
  letter-spacing: 0.8px;
  color: #47fdbb;
  background-color: #252e31;
  box-shadow: none;
  &:hover {
    transform: translateY(-3px);
    color: #fff;
  }
  &.noverify {
    color: #fdb447;
    background-color: #252e31;
    box-shadow: none;
    pointer-events: none;
  }
`;

export default function Link({ text, ...rest }) {
  return (
    <Wrapper className={"card__button subscribed"} {...rest}>
      {text}
    </Wrapper>
  );
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
};
