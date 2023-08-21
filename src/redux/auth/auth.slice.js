import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.user_id = null;
    },
    loginSuccess: (state, action) => {
      state.user_id = action.payload;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user_id = null;
    },
    registerRequest: (state) => {
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
