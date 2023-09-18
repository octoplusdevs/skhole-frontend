import { useEffect, useRef, useState, useCallback } from "react";
import { Wrapper } from "./style";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { useVideoUpdateProgress } from "../../hooks/useVideoUpdateProgress";

const getUpdateFrequency = (duration) => {
  return duration * 0.15; // 15% da duração total em segundos
};

export function Player({
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = true,
  url,
  initialLastPosition,
  slugVideo,
  slugCourse,
  isLoading,
}) {
  const playerRef = useRef(null);
  const [lastReportedTime, setLastReportedTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [updateInterval, setUpdateInterval] = useState(null);

  const updateProgressMutation = useVideoUpdateProgress({
    slug_course: slugCourse,
    slug_video: slugVideo,
  });

  function handleDuration(dur) {
    const frequency = getUpdateFrequency(dur);
    setUpdateInterval(frequency);
  }

  function updateProgress() {
    if (!playerRef.current) return;

    const playedSeconds = playerRef.current.getCurrentTime();
    const interval = playedSeconds - timeSpent;
    setTimeSpent(playedSeconds);

    updateProgressMutation.mutate({ timeSpent: playedSeconds, lastPosition: playedSeconds });
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

  // useEffect(() => {
  //   const updateIntervalId = setInterval(updateProgress, updateInterval);

  //   window.addEventListener("beforeunload", updateProgress);

  //   return () => {
  //     clearInterval(updateIntervalId);
  //     window.removeEventListener("beforeunload", updateProgress);
  //   };
  // }, [updateInterval, updateProgress]);

  return (
    <Wrapper>
      <div className="video__container aspect-ratio-container">
        {!isLoading && (
          <>
            <ReactPlayer
              ref={playerRef}
              url={url}
              controls
              onDuration={handleDuration}
              onProgress={handleProgress}
              onPause={handlePause}
              onSeek={updateProgress}
              onPlay={updateProgress}
              onReady={handleReady}
              width="100%"
              height="100%"
              className="player-wrapper"
            />
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
