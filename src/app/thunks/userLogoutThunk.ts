import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  userLoginSuccess,
  userLoginInProgress,
  userLoginFailed,
} from "app/reducers/login";

const URI = `${process.env.REACT_APP_URI}${process.env.REACT_APP_LOGOUT_URI}`;

export const logoutUser = createAsyncThunk(
  "logout",
  async ({ id, dispatch }: any) => {
    dispatch(userLoginInProgress(true));
    try {
      const { data, status } = await axios.post(`${URI}${id}`);
      dispatch(userLoginSuccess({ data, status }));
      dispatch(userLoginInProgress(false));
    } catch (error: any) {
      const { data, status } = error.response;
      dispatch(userLoginFailed({ data, status }));
      dispatch(userLoginInProgress(false));
    }
  }
);
