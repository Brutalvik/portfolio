import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userRegisterFailed,
  userRegisterInProgress,
  userRegisterSuccess,
} from "app/reducers/register";
import axios from "axios";

const URI = `${process.env.REACT_APP_URI}${process.env.REACT_APP_REGISTER_URI}`;

export const register = createAsyncThunk(
  "register",
  async ({ values, dispatch }: any) => {
    userRegisterInProgress(true);
    try {
      const { data, status } = await axios.post(URI, values);
      dispatch(userRegisterSuccess({ data, status }));
      dispatch(userRegisterInProgress(false));
    } catch (error: any) {
      const { data, status } = error.response;
      dispatch(userRegisterFailed({ data, status }));
      dispatch(userRegisterInProgress(false));
    }
  }
);
