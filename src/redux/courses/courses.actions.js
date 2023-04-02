import { API } from "../../services/api";
import {
  fetchCoursesFailure,
  fetchCoursesRequest,
  fetchCoursesSuccess,
  toggleCourses,
} from "./courses.slice";

export const fetchCourses = () => async (dispatch) => {
  dispatch(fetchCoursesRequest());
  try {
    const response = await API.get(`/courses`);
    dispatch(fetchCoursesSuccess(response.data));
  } catch (error) {
    dispatch(fetchCoursesFailure(error?.response?.data?.error));
  }
};

export const toggleCourse = (slug) => async (dispatch) => {
  dispatch(toggleCourses(slug));
};
