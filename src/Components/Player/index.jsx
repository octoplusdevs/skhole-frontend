import { useEffect, useRef, useState, useCallback } from "react";
import { Wrapper } from "./style";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { useVideoUpdateProgress } from "../../hooks/useVideoUpdateProgress";

const getUpdateFrequency = (duration) => {
  if (duration > 3600) {
    // Conteúdo longo, mais de 1 hora
    return 600000; // Atualize a cada 10 minutos
  } else if (duration > 600) {
    // Conteúdo de média duração, 10-60 minutos
    return 180000; // Atualize a cada 3 minutos
  } else {
    // Conteúdo curto, menos de 10 minutos
    return 30000; // Atualize a cada 30 segundos
  }
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
  console.log("unknow");

  const updateProgressMutation = useVideoUpdateProgress({
    slug_course: slugCourse,
    slug_video: slugVideo,
  });

  const handleDuration = useCallback((dur) => {
    const frequency = getUpdateFrequency(dur);
    setUpdateInterval(frequency);
  }, []);

  const updateProgress = useCallback(() => {
    if (!playerRef.current) return;

    const playedSeconds = playerRef.current.getCurrentTime();
    const interval = playedSeconds - timeSpent;
    setTimeSpent(playedSeconds);
    if (interval > updateInterval / 1000) {
      updateProgressMutation.mutate({ timeSpent: playedSeconds, lastPosition: playedSeconds });
    }
  }, [timeSpent, updateInterval, updateProgressMutation]);

  const handleProgress = useCallback(
    ({ playedSeconds }) => {
      if (playedSeconds - lastReportedTime > 5 && !updateProgressMutation.isMutating) {
        setLastReportedTime(playedSeconds);
        updateProgress();
      }
    },
    [lastReportedTime, updateProgress, updateProgressMutation],
  );

  const handlePause = useCallback(() => {
    updateProgress();
  }, [updateProgress]);

  const handleReady = useCallback(() => {
    if (initialLastPosition && playerRef.current) {
      playerRef.current.seekTo(initialLastPosition);
    }
  }, [initialLastPosition]);

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
