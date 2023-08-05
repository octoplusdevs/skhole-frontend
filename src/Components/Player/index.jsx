import { Wrapper } from "./style";
import PropTypes from "prop-types";

export function Player({
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = true,
  isLoading,
}) {
  return (
    <Wrapper>
      <div className="video__container aspect-ratio-container">
        {" "}
        {/* Adicione a classe aspect-ratio-container aqui */}
        {!isLoading && (
          <iframe
            src={`https://iframe.mediadelivery.net/embed/44259/${videoIdCDN}?autoplay=${autoplay}`}
            loading="lazy"
            style={{
              border: "none",
              top: 0,
              height: "100%",
              width: "100%",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        )}
      </div>
    </Wrapper>
  );
}

Player.propTypes = {
  videoIdCDN: PropTypes.string,
  autoplay: PropTypes.bool,
  isLoading: PropTypes.bool,
};
