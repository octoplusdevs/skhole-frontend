import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Playlist({ modules = [], slug_course, activeVideo }) {
  return (
    <Wrapper>
      {/* <div className="title">
        <h5>Modulos do curso</h5>
      </div> */}
      {modules?.map((module) => (
        <Fragment key={module.slug}>
          <div className="title">
            <h5>{module.title}</h5>
            <span className="totalHour">{module.duration}</span>
          </div>
          <div className="classes">
            {module?.videos.map((video) => (
              <div key={video.slug} className="classification">
                <Link
                  to={`${slug_course}/${module.slug}/${video.slug}`}
                  className={activeVideo === video.slug ? "viewing" : ""}
                >
                  {video.title}
                </Link>
                <span>{video.duration}</span>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </Wrapper>
  );
}
