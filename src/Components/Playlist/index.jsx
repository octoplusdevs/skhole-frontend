import { Wrapper, Module } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

export default function Playlist({ modules = [], slug_course, activeVideo }) {
  const [activeModule, setActiveModule] = useState(null);

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
                  <Link
                    to={`${slug_course}/${module?.slug}/${video?.slug}`}
                    className={activeVideo === video?.slug ? "active" : ""}
                  >
                    {video?.title}
                  </Link>
                  <span>{video?.duration} min</span>
                </div>
              ))}
            </div>
          </Module>
        ))}
    </Wrapper>
  );
}
