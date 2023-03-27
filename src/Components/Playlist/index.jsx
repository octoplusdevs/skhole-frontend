import { Wrapper } from "./style";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
import { CourseContext } from "../../contexts/courseContext";
import uuid from "react-uuid";

export default function Playlist({ modules, to }) {
  let { pathname } = useLocation();
  const { selectedCourse, setSelectedVideo, selectedVideo, setVideoInformation } =
    useContext(CourseContext);

  const getVideoInformation = async (courseId, moduleId, videoId) => {
    const { data } = await API.get(
      `/videos/course/${courseId}/module/${moduleId}/video/${videoId}`,
    );
    setVideoInformation(data);
    return data;
  };
  return (
    <Wrapper>
      {modules?.modules?.map((module) => (
        <Fragment key={uuid()}>
          <div className="title">
            <h5>{module.title}</h5>
            <span className="totalHour">34</span>
          </div>
          <div className="classes">
            {module?.videos?.map((video) => (
              <div key={uuid()} className="classification">
                <Link
                  onClick={() => {
                    setSelectedVideo({
                      course: selectedCourse,
                      module: module.id,
                      video: video.id,
                    });
                    getVideoInformation(
                      selectedVideo.course,
                      selectedVideo.module,
                      selectedVideo.video,
                    );
                  }}
                  to={`${selectedCourse}/${video.id}`}
                  params={{ video_id: video.id }}
                  className="vizualizad"
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
