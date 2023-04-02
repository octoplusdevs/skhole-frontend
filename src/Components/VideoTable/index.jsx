import { Wrapper } from "./style";
import playVideo from "../../assets/PlayVideo.svg";
import replayIcon from "../../assets/Vector.svg";
import ReactPlayer from "react-player";
import Switch from "../Switch";

export default function VideoTable({
  description,
  title,
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = true,
  isLoading,
}) {
  return (
    <>
      <Wrapper>
        <div className="video-played">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src={`https://iframe.mediadelivery.net/embed/107511/${videoIdCDN}?autoplay=${autoplay}`}
              loading="lazy"
              style={{
                border: "none",
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="reproduction">
            <div className="icon-playback">
              <img src={replayIcon} />
            </div>
            <div className="switch">
              <Switch autoplay={autoplay} />
            </div>
          </div>
        </div>
        <div className="text">
          <h4>{isLoading ? "Carregando titulo" : title}</h4>
          <h5>{isLoading ? "Carregando legenda" : description}</h5>
        </div>
      </Wrapper>
    </>
  );
}
