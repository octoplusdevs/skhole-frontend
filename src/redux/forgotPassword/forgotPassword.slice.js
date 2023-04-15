import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    forgotPasswordRequest: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.error = "";
    },
    forgotPasswordSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.error = "";
    },
    forgotPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.payload;
      console.log(action.payload);
    },
  },
});

export const { forgotPasswordRequest, forgotPasswordSuccess, forgotPasswordFailure } =
  forgotPasswordSlice.actions;

export const forgotPasswordReducer = forgotPasswordSlice.reducer;
