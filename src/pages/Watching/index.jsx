import Playlist from "../../Components/Playlist";
import { Header } from "../../Components/Header";
import VideoTable from "../../Components/VideoTable";
import { Wrapper } from "./style";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { API } from "../../services/api";
import { CourseContext } from "../../contexts/courseContext";
import { useState } from "react";

export function Watching() {
  const [course, setCourse] = useState([]);
  const [video, setVideo] = useState([]);
  const { selectedCourse, selectedVideo, videoInformation } = useContext(CourseContext);

  const { course_id, video_id } = useParams();

  const getCourseResources = async (course_id) => {
    const { data } = await api.get(`/courses/${course_id}`);
    setCourse(data);
    setVideo(data.modules[0].videos[0]);
  };
  const getModules = async (courseId) => {
    const { data } = await api.get(`courses/${courseId}/modules`);
    setCourse(data);
  };

  const handleSelectVideo = () => {
    alert(0);
  };

  useEffect(() => {
    console.log(selectedCourse);
    // getVideoInformation(selectedVideo.courseId, selectedVideo.moduleId, selectedVideo.videoId)
    getModules(course_id);
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <VideoTable
            title={videoInformation.title}
            description={videoInformation.description}
            duration={videoInformation.duration}
          />
          <Playlist modules={course} onSelectVideo={handleSelectVideo} />
        </div>
      </Wrapper>
    </>
  );
}
