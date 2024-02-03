import { useRef, useState } from "react";
import { Wrapper } from "./style";
import PropTypes from "prop-types";
import { useVideoUpdateProgress } from "../../hooks/useVideoUpdateProgress";

const getUpdateFrequency = (duration) => {
  return duration * 0.15; // 15% da duração total em segundos
};

export default function Player({
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = false,
  video_id,
  url,
  initialLastPosition,
  isLoading,
}) {
  const playerRef = useRef(null);
  const [lastReportedTime, setLastReportedTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [updateInterval, setUpdateInterval] = useState(null);

  const updateProgressMutation = useVideoUpdateProgress();

  function handleDuration(dur) {
    const frequency = getUpdateFrequency(dur);
    setUpdateInterval(frequency);
  }

  function updateProgress() {
    if (!playerRef.current) return;

    const playedSeconds = playerRef.current.getCurrentTime();
    const interval = playedSeconds - timeSpent;
    setTimeSpent(playedSeconds);

    updateProgressMutation.mutate({
      timeSpent: playedSeconds,
      lastPosition: playedSeconds,
      video_id,
    });
    setLastReportedTime(playedSeconds); // Atualize o último tempo registrado
  }

  function handleProgress({ playedSeconds }) {
    const nextUpdatePoint = lastReportedTime + getUpdateFrequency(playerRef.current.getDuration());

    if (playedSeconds >= nextUpdatePoint && !updateProgressMutation.isMutating) {
      setLastReportedTime(playedSeconds);
      updateProgress();
    }
  }

  function handlePause() {
    updateProgress();
  }

  function handleReady() {
    if (initialLastPosition && playerRef.current) {
      playerRef.current.seekTo(initialLastPosition);
    }
  }



  return (
    <Wrapper>
      <div className="video__container aspect-ratio-container">
        {!isLoading && (
          <>
            <iframe
              src={`https://iframe.mediadelivery.net/embed/44259/${videoIdCDN}?autoplay=${autoplay}&preload=${false}&onPause=${handlePause}`}
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
          </>
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
