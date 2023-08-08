import { Wrapper, Module } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import propTypes from "prop-types";
import { useVideoMarkAsWatched } from "../../hooks/useVideoMarkAsWatched";
import { formatSecondsToHMS } from "../../utils";

export default function Playlist({ modules = [], slug_course, activeVideo }) {
  const [activeModule, setActiveModule] = useState(null);
  const { mutate: markAsWatched, isLoading, error, data } = useVideoMarkAsWatched();

  function markedAsWatched(slug_video) {
    markAsWatched(slug_video);
    console.log({ isLoading, error, data });
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
                <p>6 aulas - 32:16min</p>
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
                  <div className="lesson__title">
                    <input
                      type="checkbox"
                      // defaultChecked={!video?.progress}
                      checked={video?.progress?.isViewed}
                      onChange={() => markedAsWatched(video?.slug)}
                      disabled={isLoading}
                    />
                    <Link
                      to={`${slug_course}/${module?.slug}/${video?.slug}`}
                      className={activeVideo === video?.slug ? "active" : ""}
                    >
                      {video?.title}
                    </Link>
                  </div>
                  <span>{formatSecondsToHMS(video?.duration)}</span>
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
