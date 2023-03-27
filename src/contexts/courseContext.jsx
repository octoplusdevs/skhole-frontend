import { createContext, useReducer, useEffect, useState } from "react";
// import PropTypes from "prop-types";

export const CourseContext = createContext();

// eslint-disable-next-line react/prop-types
export const CourseContextProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoInformation, setVideoInformation] = useState({});



  return <CourseContext.Provider value={{
    selectedCourse,
    setSelectedCourse,
    selectedVideo,
    setSelectedVideo,
    videoInformation,
    setVideoInformation
  }}>{children}</CourseContext.Provider>;
};

// CourseContextProvider.propTypes = {
//   children: PropTypes.elementType.isRequired,
// };
