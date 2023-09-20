import { createSlice } from "@reduxjs/toolkit";
import AuthTokenManager from "../../utils/auth";

const initialState = {
  user: null,
  error: null,
  showToast: false,
  isAuthenticated: checkTokenExistence(),
};

function checkTokenExistence() {
  const { accessToken, refreshToken } = AuthTokenManager.getAuthToken();
  return accessToken != null || refreshToken != null;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.showToast = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.showToast = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.showToast = true;
      state.user = null;
      state.error = null;
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
