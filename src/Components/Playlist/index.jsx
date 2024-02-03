import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CaretDown, CaretUp, Lock } from "phosphor-react";
import propTypes from "prop-types";
import { useVideoMarkAsWatched } from "../../hooks/useVideoMarkAsWatched";
import { calculateTotalProgresseViewedVideos, formatSecondsToHMS } from "../../utils";
import CheckBox from "../Check";
import CircularProgress from "../CircularProgress";
import { Wrapper, Module } from "./style";
import { useModules } from "../../hooks/useModules";

function Video({ video, slug_course, slug_module, markedAsWatched, activeVideo }) {
  // Aqui estou assumindo que `video.progress` sempre existe
  const isViewed = video.progress.isViewed || false;

  return (
    <div className="lesson" onClick={(e) => e.stopPropagation()}>
      {video.isAvailable ? (
        <AvailableLesson
          video={video}
          slug_course={slug_course}
          markedAsWatched={markedAsWatched}
          activeVideo={activeVideo}
          isViewed={isViewed}
          slug_module={slug_module}
        />
      ) : (
        <LockedLesson title={video.title} />
      )}
    </div>
  );
}

const AvailableLesson = ({
  video,
  slug_course,
  slug_module,
  markedAsWatched,
  activeVideo,
  isViewed,
}) => (
  <>
    <div className="lesson__title">
      <CheckBox checked={isViewed} onChange={() => markedAsWatched(video.id, !isViewed)} />
      <Link
        to={`${slug_course}/${slug_module}/${video.slug}`}
        className={`${activeVideo === video.slug ? "active" : ""} `}
      >
        {video.title}
      </Link>
    </div>
    <span>{formatSecondsToHMS(video.duration)}</span>
  </>
);

const LockedLesson = ({ title }) => (
  <>
    <div className="lesson__title" title="Aula indisponível">
      <a>{title}</a>
    </div>
    <LockedLessonLabel />
  </>
);

const LockedLessonLabel = () => (
  <span
    style={{
      color: "yellow",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    }}
  >
    <Lock color="yellow" size={18} weight="fill" />
    Retido
  </span>
);

function Playlist({ activeVideo }) {
  const { mutate: markVideoAsWatched } = useVideoMarkAsWatched();
  const [activeModule, setActiveModule] = useState(null);
  const { slug_course } = useParams();

  const { data: modules } = useModules(slug_course);
  const [localModules, setLocalModules] = useState([]);

  useEffect(() => {
    if (modules) {
      setLocalModules(modules);
    }
  }, [modules]);

  const toggleModule = (slug) => {
    setActiveModule(activeModule === slug ? null : slug);
  };

  const markedAsWatchedCallback = useCallback(
    (video_id, newIsViewed) => {
      const updatedModules = localModules.map((module) => {
        if (!module.videos) return module;

        const videos = module.videos.map((video) => {
          if (video.id !== video_id) return video;
          return {
            ...video,
            progress: { isViewed: newIsViewed },
          };
        });

        return { ...module, videos };
      });

      setLocalModules(updatedModules);

      markVideoAsWatched(
        { video_id },
        {
          onError: () => {
            const revertedModules = updatedModules.map((module) => {
              if (!module.videos) return module;

              const videos = module.videos.map((video) => {
                if (video.id !== video_id) return video;
                return {
                  ...video,
                  progress: { isViewed: !newIsViewed },
                };
              });

              return { ...module, videos };
            });

            setLocalModules(revertedModules);
          },
        },
      );
    },
    [localModules, markVideoAsWatched],
  );

  return (
    <Wrapper>
      {localModules.map((module) => (
        <Module key={module.slug} onClick={() => toggleModule(module?.slug)}>
          <div className="module__header">
            <div className="module__title">
              <div className="progress">
                <CircularProgress progress={calculateTotalProgresseViewedVideos(module)} />
              </div>
              <div className="content">
                <h1>{module.title}</h1>
                <p>
                  {module?.videos.length > 0
                    ? `${module.videos.length} aulas - ${formatSecondsToHMS(
                        module.videos.reduce((sum, video) => sum + parseInt(video.duration), 0),
                      )}`
                    : "Sem aulas disponíves"}
                </p>
              </div>
            </div>
            <div className="module__state">
              {activeModule === module.slug ? (
                <CaretUp size={24} weight="bold" />
              ) : (
                <CaretDown size={24} weight="bold" />
              )}
            </div>
          </div>
          {activeModule === module.slug && (
            <div className={`module__lessons ${activeModule === module.slug ? "isOpen" : ""}`}>
              {module.videos.map((video) => (
                <Video
                  key={video.slug}
                  video={video}
                  slug_course={slug_course}
                  markedAsWatched={markedAsWatchedCallback}
                  activeVideo={activeVideo}
                  slug_module={activeModule}
                />
              ))}
            </div>
          )}
        </Module>
      ))}
    </Wrapper>
  );
}


export function SkeletonPlaylist(){
  return (
    <div className="h-[449px] bg-[##161817] rounded-[8px] w-[384px]">
      <div className="sm:bg-[#161817] h-full flex flex-col gap-8 max-w-[800px] px-[12px] sm:px-[32px] py-[40px] rounded-[5px]">
        <div role="status" className="w-full animate-pulse ">
          <div className="flex flex-col gap-8 w-full mb-4">
            {
              [...Array(7).keys()].map((item)=>(
                <div key={item} className="flex gap-4 opacity-[0.13]">
                  <div className="h-[38px] w-[38px] shrink-0 bg-slate-500 rounded-full"></div>
                  <div className="w-full flex flex-col gap-4 items-start justify-center">
                    <div className="h-[12px] w-[71%] bg-slate-500 rounded"></div>
                    <div className="h-[8px] w-[35%] bg-green-500 rounded"></div>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      </div>
    </div>
  )
}

Playlist.propTypes = {
  modules: propTypes.array,
  slug_course: propTypes.string,
  activeVideo: propTypes.string,
};

export default Playlist;
