import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  data: null,
  message: "",
  status: null,
  processing: false,
  error: false,
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLoginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.isLoggedIn = payload.data.isLoggedIn;
      state.data = payload.data.data;
      state.message = payload.data.message;
      state.status = payload.status;
    },
    userLoginInProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.processing = payload;
    },
    userLoginFailed: (state, { payload }: PayloadAction<any>) => {
      state.isLoggedIn = payload.data.isRegistered;
      state.message = payload.data.message;
      state.error = true;
      state.status = payload.status;
    },
    userLoginReset: (state) => {
      return { ...initialState };
    },
  },
});

export const {
  userLoginSuccess,
  userLoginInProgress,
  userLoginFailed,
  userLoginReset,
} = login.actions;

export default login.reducer;
