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
      state.isLoggedIn = payload.data.isLoggedin;
      state.data = payload.data.data;
      state.message = payload.data.message;
      state.status = payload.status;
    },
    userLoginInProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.processing = payload;
    },
    userLoginFailed: (state, { payload }: PayloadAction<any>) => {
      state.isLoggedIn = payload.data.isLoggedin;
      state.message = payload.data.message;
      state.error = true;
      state.status = payload.status;
    },
    userLoginReset: () => {
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
