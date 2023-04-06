import { Wrapper } from "./style";

export function Player({
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = true,
  isLoading,
}) {
  return (
    <Wrapper>
      <div className="video__container">
        {!isLoading && (
          <iframe
            src={`https://iframe.mediadelivery.net/embed/107511/${videoIdCDN}?autoplay=${autoplay}`}
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
