import { Wrapper, Module } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaretDown, CaretUp, Lock } from "phosphor-react";
import propTypes from "prop-types";
import { useVideoMarkAsWatched } from "../../hooks/useVideoMarkAsWatched";
import { formatSecondsToHMS } from "../../utils";

export default function Playlist({ modules = [], slug_course, activeVideo }) {
  const [activeModule, setActiveModule] = useState(null);
  const { mutate: markAsWatched } = useVideoMarkAsWatched();

  function markedAsWatched(slug_video) {
    markAsWatched(slug_video);
  }

  const toggleModule = (slug) => {
    setActiveModule(activeModule === slug ? null : slug);
  };

  return (
    <Wrapper>
      {modules.length > -1 &&
        modules.map((module) => (
          <Module key={module?.slug} onClick={() => toggleModule(module?.slug)}>
            <div className="module__header">
              <div className="module__title">
                <h1>{module?.title}</h1>
                {/* <p>6 aulas - 32:16min</p> */}
              </div>
              <div className="module__state">
                {activeModule === module?.slug ? (
                  <CaretUp size={24} weight="bold" />
                ) : (
                  <CaretDown size={24} weight="bold" />
                )}
              </div>
            </div>
            <div className={`module__lessons ${activeModule === module.slug ? "isOpen" : ""}`}>
              {module?.videos?.map((video) => (
                <div key={video?.slug} className="lesson" onClick={(e) => e.stopPropagation()}>
                  {video?.isAvailable === true ? (
                    <>
                      <div className="lesson__title">
                        <input
                          type="checkbox"
                          // defaultChecked={!video?.progress}
                          checked={video?.progress?.isViewed}
                          onChange={() => markedAsWatched(video?.slug)}
                        />
                        <Link
                          to={`${slug_course}/${module?.slug}/${video?.slug}`}
                          className={`${activeVideo === video?.slug ? "active" : ""} ${
                            video?.progress?.isViewed ? "isViewed" : ""
                          }`}
                        >
                          {video?.title}
                        </Link>
                      </div>
                      <span>{formatSecondsToHMS(video?.duration)}</span>
                    </>
                  ) : (
                    <>
                      <div className="lesson__title" title="Aula indisponível">
                        <a>{video?.title}</a>
                      </div>
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
                    </>
                  )}
                </div>
              ))}
            </div>
          </Module>
        ))}
    </Wrapper>
  );
}

Playlist.propTypes = {
  modules: propTypes.array,
  slug_course: propTypes.string,
  activeVideo: propTypes.string,
};
