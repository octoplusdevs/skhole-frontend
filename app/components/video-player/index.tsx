"use client";

import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { useWatchedLesson } from "@/hooks/use-watched-lesson";

interface PlayerProps {
  moduleId: string;
  courseId: string;
  lessonId: string;
  autoplay?: boolean;
  watchedId?: string;
  url: string;
  initialLastPosition?: number;
  isLoading: boolean;
}

export default function Player({
  autoplay = true,
  url,
  initialLastPosition = 0,
  isLoading,
  lessonId,
  moduleId,
  courseId,
  watchedId,
}: PlayerProps) {
  const playerRef = useRef<ReactPlayer>(null);
  const hasSeeked = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [lastReportedTime, setLastReportedTime] = useState(0);

  const updateLessonProgress = useWatchedLesson();

  const updateProgress = () => {
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime();
    if (currentTime === lastReportedTime) return;

    setLastReportedTime(currentTime);

    updateLessonProgress.mutate({
      action: "record",
      timeWatched: currentTime,
      lessonId,
      courseId,
      moduleId,
    });
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        updateProgress();
      }, 60_000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying]);

  const handleReady = () => {
    if (
      !hasSeeked.current &&
      initialLastPosition != null &&
      playerRef.current
    ) {
      playerRef.current.seekTo(initialLastPosition);
      hasSeeked.current = true;
    }
  };

  useEffect(() => {
    hasSeeked.current = false;
    setLastReportedTime(0);
  }, [watchedId]);

  return (
    <div className="w-full bg-secondary rounded-md p-1 grid">
      <div className="relative w-full pt-[56.25%]">
        {!isLoading ? (
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={autoplay}
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => {
              setIsPlaying(false);
              updateProgress();
            }}
            onEnded={() => {
              setIsPlaying(false);
              updateProgress();
            }}
            onSeek={() => updateProgress()}
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
