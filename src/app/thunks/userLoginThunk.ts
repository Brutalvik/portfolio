import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userLoginSuccess,
  userLoginInProgress,
  userLoginFailed,
} from "app/reducers/login";
import axios from "axios";

const URI = `${process.env.REACT_APP_URI}${process.env.REACT_APP_LOGIN_URI}`;

export const loginUser = createAsyncThunk(
  "login",
  async ({ values, dispatch }: any) => {
    userLoginInProgress(true);
    try {
      const { data, status } = await axios.post(URI, values);
      dispatch(userLoginSuccess({ data, status }));
      dispatch(userLoginInProgress(false));
    } catch (error: any) {
      const { data, status } = error.response;
      dispatch(userLoginFailed({ data, status }));
      dispatch(userLoginInProgress(false));
    }
  }
);
