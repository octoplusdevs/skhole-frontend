import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import { formatCurrency } from "../../../utils";

export default function Price({ price }) {
  return (
    <Wrapper>
      {price > 0 ? "Por apenas " : ""}
      <span>{price > 0 ? `${formatCurrency(price)}` : "Gratuito"}</span>
    </Wrapper>
  );
}

Price.propTypes = {
  price: PropTypes.string.isRequired,
};
