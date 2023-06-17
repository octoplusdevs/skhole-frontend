import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

const resetPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    resetPasswordRequest: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.error = "";
    },
    resetPasswordSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.error = "";
    },
    resetPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { resetPasswordFailure, resetPasswordRequest, resetPasswordSuccess } =
  resetPasswordSlice.actions;

export const resetPasswordReducer = resetPasswordSlice.reducer;
