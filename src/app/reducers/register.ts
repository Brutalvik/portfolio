import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  message: "",
  status: null,
  processing: false,
  error: false,
};

const register = createSlice({
  name: "registration",
  initialState,
  reducers: {
    userRegisterSuccess: (state, { payload }: PayloadAction<any>) => {
      state.isRegistered = payload.data.isRegistered;
      state.message = payload.data.message;
      state.status = payload.status;
    },
    userRegisterInProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.processing = payload;
    },
    userRegisterFailed: (state, { payload }: PayloadAction<any>) => {
      state.isRegistered = payload.data.isRegistered;
      state.message = payload.data.message;
      state.error = true;
      state.status = payload.status;
    },
    userRegisterReset: () => {
      return { ...initialState };
    },
  },
});

export const {
  userRegisterSuccess,
  userRegisterInProgress,
  userRegisterFailed,
  userRegisterReset,
} = register.actions;

export default register.reducer;
