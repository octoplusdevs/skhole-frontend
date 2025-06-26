"use client";

import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
import ReactPlayer from "react-player/file";

interface PlayerProps {
  videoIdCDN?: string;
  autoplay?: boolean;
  video_id: string;
  url: string;
  initialLastPosition?: number;
  isLoading: boolean;
}

const getUpdateFrequency = (duration: number) => {
  return duration * 0.15;
};

export default function Player({
  videoIdCDN = "c8fae39c-2720-4c14-8d32-50415e57ad67",
  autoplay = true,
  video_id,
  url,
  initialLastPosition,
  isLoading,
}: PlayerProps) {
  const playerRef = useRef<ReactPlayer>(null);
  const [lastReportedTime, setLastReportedTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [updateInterval, setUpdateInterval] = useState<number | null>(null);

  // const updateProgressMutation = useVideoUpdateProgress();

  const handleDuration = (dur: number) => {
    const frequency = getUpdateFrequency(dur);
    setUpdateInterval(frequency);
  };

  const updateProgress = () => {
    if (!playerRef.current) return;

    const playedSeconds = playerRef.current.getCurrentTime();
    const interval = playedSeconds - timeSpent;
    setTimeSpent(playedSeconds);

    // updateProgressMutation.mutate({
    //   timeSpent: playedSeconds,
    //   lastPosition: playedSeconds,
    //   video_id,
    // });
    setLastReportedTime(playedSeconds);
  };

  const handleProgress = ({ playedSeconds }: { playedSeconds: number }) => {
    const nextUpdatePoint =
      lastReportedTime +
      getUpdateFrequency(playerRef.current?.getDuration?.() ?? 0);

    // if (playedSeconds >= nextUpdatePoint && !updateProgressMutation.isMutating) {
    //   setLastReportedTime(playedSeconds);
    //   updateProgress();
    // }
    if (playedSeconds >= nextUpdatePoint) {
      setLastReportedTime(playedSeconds);
      updateProgress();
    }
  };

  const handlePause = () => {
    updateProgress();
  };

  const handleReady = () => {
    if (initialLastPosition && playerRef.current) {
      playerRef.current.seekTo(initialLastPosition);
    }
  };

  return (
    <div className="w-full bg-secondary rounded-md p-1 grid">
      <div className="relative w-full pt-[56.25%]">
        {!isLoading ? (
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={autoplay}
            controls
            onDuration={handleDuration}
            onProgress={handleProgress}
            onPause={handlePause}
            onSeek={updateProgress}
            onPlay={updateProgress}
            onReady={handleReady}
            width="100%"
            height="100%"
            className="absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full">
            <CircleNotch
              color="#baf722"
              size={56}
              className="rotate-180 animate-spin duration-150"
            />
          </div>
        )}
      </div>
    </div>
  );
}
