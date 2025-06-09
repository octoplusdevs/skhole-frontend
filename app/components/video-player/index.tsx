"use client";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { IVideoPlayer } from "./interface";

export const VideoPlayer = ({ url, startTime }: IVideoPlayer) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      playerRef.current?.seekTo(startTime, "seconds");
    }, 500);

    return () => clearTimeout(timer);
  }, [startTime]);

  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  return (
    <div className="w-full max-w-[800px] h-[242px] sm:h-[368px]  lg:h-[449px] rounded-[8px]">
      <p>Current time: {currentTime.toFixed(0)} seconds</p>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
        className="w-full h-full"
      />
    </div>
  );
};
