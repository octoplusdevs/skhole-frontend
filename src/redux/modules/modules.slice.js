import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
  selectedVideo: {},
  isLoading: false,
  error: null,
};

const moduleSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    fetchModulesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.selectedVideo = {};
    },
    fetchModulesSuccess: (state, action) => {
      state.isLoading = false;
      state.modules = action.payload;
    },
    fetchModulesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    toggleVideo: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.selectedVideo = state.modules
        .find((module) => module.slug === action.payload.slug_module)
        ?.videos.find((video) => video.slug === action.payload.slug_video);
    },
  },
});

export const { fetchModulesFailure, fetchModulesRequest, fetchModulesSuccess, toggleVideo } =
  moduleSlice.actions;

export const ModuleReducer = moduleSlice.reducer;
