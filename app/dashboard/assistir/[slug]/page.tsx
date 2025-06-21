"use client";
import { Container } from "@/components/container";
import { lesson } from "./data";
import { VideoPlayer } from "@/components/video-player";

export default function WatchLessonPage() {
  return (
    <section className="py-36">
      <Container className="">
        <div>
          <div className="flex flex-col gap-14 w-full max-w-[800px]">
            <VideoPlayer
              startTime={0}
              url="https://www.youtube.com/watch?v=VSATxevwqzY&list=RDVSATxevwqzY&start_radio=1"
            />
            <div className="flex flex-col gap-4 w-full">
              <h2 className="font-bold text-[20px] sm:text-[24px]">
                <span className="font-bold text-[20px] sm:text-[24px] text-description">
                  {lesson.order}{" "}
                </span>
                {lesson.title}
              </h2>
              <p className="font-medium text-[16px] text-description">
                {lesson.description}
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </Container>
    </section>
  );
}
