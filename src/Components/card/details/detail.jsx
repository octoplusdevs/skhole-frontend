import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  span {
    font-size: 14px;
  }
`;

export default function Detail({ icon: Icon, text }) {
  return (
    <Wrapper>
      {Icon}
      <span>{text}</span>
    </Wrapper>
  );
}

Detail.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
};
