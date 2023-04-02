import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  selectedCourse: {},
  selectedModule: {},
  selectedVideo: {},
  isLoading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchCoursesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCoursesSuccess: (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    toggleCourses: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.selectedCourse = state.courses?.find((course) => course.slug === action?.payload);
    },
    toggleModules: (state, action) => {
      state.selectedModule = state.selectedCourse?.modules?.filter(
        (course) => course.module_id === action?.payload?.id,
      );
    },
  },
});

export const {
  fetchCoursesFailure,
  fetchCoursesRequest,
  fetchCoursesSuccess,
  toggleCoursesFailure,
  toggleCourses,
  toggleModules,
  fetchCoursesByIdSuccess,
  fetchCoursesByIdFailure,
  fetchCoursesByIdRequest,
} = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
