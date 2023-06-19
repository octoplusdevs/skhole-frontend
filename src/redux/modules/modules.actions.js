import { API } from "../../services/api";
import {
  fetchModulesFailure,
  fetchModulesRequest,
  fetchModulesSuccess,
  toggleVideo,
} from "./modules.slice";

export const fetchModules = (slug_course) => async (dispatch) => {
  dispatch(fetchModulesRequest());
  try {
    const response = await API.get(`/courses/${slug_course}/modules`);
    dispatch(fetchModulesSuccess(response.data));
  } catch (error) {
    dispatch(fetchModulesFailure(error?.response?.data?.error));
  }
};

export const selectVideo = (videoId, moduleId) => async (dispatch) => {
  dispatch(toggleVideo(videoId, moduleId));
};
