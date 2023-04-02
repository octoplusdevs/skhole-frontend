import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../redux/modules/modules.actions";

export default function Playlist({ modules = [], slug_course, activeVideo }) {
  const dispatch = useDispatch();
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
                  onClick={() =>
                    dispatch(selectVideo({ slug_video: video.slug, slug_module: module.slug }))
                  }
                  className={activeVideo === video.id ? "viewing" : ""}
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
