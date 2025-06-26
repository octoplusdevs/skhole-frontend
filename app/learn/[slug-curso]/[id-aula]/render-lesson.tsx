"use client";
import VideoPlayer from "@/components/video-player";
import { IRenderLesson } from "./interface";
import { getItemLocalStorage } from "@/utils/localStorage/get-item-local-storage";

export const RenderLesson = ({ lesson }: IRenderLesson) => {
  const lessonOrder = getItemLocalStorage("lessonOrder");
  const moduleOrder = getItemLocalStorage("moduleOrder");

  return (
    <div className="flex flex-col gap-8 w-full lg:max-w-[800px] xl:max-w-[1840px] xl:w-[80%]">
      <div className="w-full rounded-[8px] bg-secondary">
        <VideoPlayer
          isLoading={false}
          url="/intro-octoplus.mp4"
          video_id="84323232"
        />
      </div>

      <div className="flex flex-col gap-4 max-w-[800px] w-full">
        <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-logo leading-[140%]">
          <span className="text-[#737272]">
            {String(moduleOrder ?? 1).concat(`.${lessonOrder ?? 1} `)}
          </span>
          {lesson?.title}
        </h1>
        <p className="text-link leading-[150%]">{lesson?.content}</p>
      </div>
    </div>
  );
};
